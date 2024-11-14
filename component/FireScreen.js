import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Modal } from 'react-native';
import { ProgressBar, Text as PaperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Video } from 'expo-av';  // Import Video from expo-av

const FireScreen = ({ navigation }) => {
  const progressValue = 1 / 3; 
  const [selectedDate, setSelectedDate] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0); 
  const [timer, setTimer] = useState(null); 
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} phút ${remainingSeconds} giây`;
  };

  const loadElapsedTime = async () => {
    try {
      const savedTime = await AsyncStorage.getItem('elapsedTime');
      if (savedTime) {
        setElapsedTime(Number(savedTime)); 
      }
    } catch (error) {
      console.error("Error loading elapsed time:", error);
    }
  };

  const saveElapsedTime = async (time) => {
    try {
      await AsyncStorage.setItem('elapsedTime', String(time));
    } catch (error) {
      console.error("Error saving elapsed time:", error);
    }
  };

  useEffect(() => {
    loadElapsedTime(); 

    const startTimer = () => {
      const id = setInterval(() => {
        setElapsedTime((prevTime) => {
          const newTime = prevTime + 1;
          saveElapsedTime(newTime);
          return newTime;
        });
      }, 1000); 
      setTimer(id);
    };

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer); 
        setTimer(null);
      }
    };

    startTimer();

    return () => {
      stopTimer();
      saveElapsedTime(elapsedTime); 
    };
  }, []); 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <PaperText style={styles.headerTitle}>Hoàn thành mục tiêu mỗi ngày bạn nhé!</PaperText>
        </View>

        <View style={styles.progressSection}>
          <PaperText style={styles.streakText}>3 ngày liên tiếp duy trì Lửa</PaperText>
          {/* Removed ProgressBar and diamond icon */}
          <TouchableOpacity style={styles.stickerButton} onPress={() => setIsModalVisible(true)}>
            <PaperText style={styles.stickerButtonText}>Xem sticker hoàn thành mục tiêu</PaperText>
          </TouchableOpacity>
        </View>

        <View style={styles.goalStatus}>
          <View style={styles.goalHeader}>
            <Icon name="flame" size={24} color="#00B7FF" />
            <PaperText style={styles.goalTitle}>Hoàn thành mục tiêu hôm nay</PaperText>
          </View>
        </View>

        <View style={styles.date}>
          <CalendarPicker
            onDateChange={(date) => setSelectedDate(date)}
            selectedDayColor="#FF2D55"
            selectedDayTextColor="#FFFFFF"
            weekdays={['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']}
            months={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
            previousComponent={<Icon name="chevron-back" size={24} color="#333" />}
            nextComponent={<Icon name="chevron-forward" size={24} color="#333" />}
          />
        </View>

        <View style={styles.goalStatus}>
          <PaperText style={styles.goalSubtitle}>Tiến độ trong ngày</PaperText>
          <PaperText style={styles.goalProgress}>
            {`Hôm nay đã học ${formatTime(elapsedTime)}`}
          </PaperText>
        </View>
      </ScrollView>

      {/* Modal to show video */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <Icon name="close" size={24} color="#333" />
            </TouchableOpacity>
            {/* Replace Text with Video */}
            <Video
              source={require('../assets/vdsticker.mp4')} // Replace with your video URL
              style={styles.video}
              useNativeControls={false} // Remove controls
              resizeMode="contain"
              shouldPlay={true} // Auto-play the video when modal is shown
              isLooping={true} // Loop the video
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F7F6FB',
    top: 20,
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'column', 
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#00B7FF',
    marginTop: 10,
  },
  progressSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  streakText: {
    color: '#00B7FF',
    fontSize: 20,
  },
  stickerButton: {
    marginTop: 12,
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  stickerButtonText: {
    color: '#333',
    fontSize: 16,
  },
  goalStatus: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goalTitle: {
    color: '#00B7FF',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  goalSubtitle: {
    color: '#333',
    fontSize: 18,
    marginTop: 10,
  },
  goalProgress: {
    color: '#00B7FF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  date: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 20, 
    overflow: 'hidden',
  },
});

export default FireScreen;
