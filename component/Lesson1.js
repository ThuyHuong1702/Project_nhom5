import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

  
const requestPermissions = async () => {
  const response = await Audio.requestPermissionsAsync();
  if (!response.granted) {
    alert("Yêu cầu quyền truy cập âm thanh!");
  }
};

const playSound = async (soundFile) => {
  const { sound } = await Audio.Sound.createAsync(soundFile);
  await sound.playAsync();
  sound.setOnPlaybackStatusUpdate(async (status) => {
    if (status.didJustFinish) {
      await sound.unloadAsync();
    }
  });
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const ProgressBar = () => {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('CustomHome')} style={styles.closeButton}>
          <Image source={require('../assets/Close_square.png')} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={styles.progressFill}></View>
        </View>
        <View style={styles.heartContainer}>
          <Image source={require('../assets/Favorite_fill.png')} style={styles.heartIcon} />
          <Text style={styles.heartText}>5</Text>
        </View>
      </View>
      <Text style={styles.instructionText}>Nhấn vào các cặp tương ứng</Text>
    </View>
  );
};

const MatchingPairs = ({ matchedPairs, setMatchedPairs }) => {
  const [selectedSound, setSelectedSound] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [incorrectMatch, setIncorrectMatch] = useState(false);
  const [incorrectPair, setIncorrectPair] = useState({ sound: null, text: null });
  const [sounds, setSounds] = useState([]);
  const [texts, setTexts] = useState([]);
  const [lastSelectionType, setLastSelectionType] = useState(null);

  useEffect(() => {
    requestPermissions();

    const initialSounds = [
      { id: 0, sound: require('../assets/look__gb_1.mp3') },
      { id: 1, sound: require('../assets/letter__gb_2.mp3') },
      { id: 2, sound: require('../assets/give__gb_3.mp3') },
      { id: 3, sound: require('../assets/late__gb_1.mp3') },
    ];

    const initialTexts = [
      { id: 1, text: 'nhìn' },
      { id: 3, text: 'thư' },
      { id: 0, text: 'đưa' },
      { id: 2, text: 'muộn' },
    ];

    setSounds(shuffleArray(initialSounds));
    setTexts(shuffleArray(initialTexts));
  }, []);

  const handleSelect = async (type, index, soundFile = null) => {
    const correctPairs = { 0: 1, 1: 3, 2: 0, 3: 2 }; // Định nghĩa cặp đúng

    // Nếu đã chọn đúng cặp rồi thì không làm gì cả (không hiệu ứng)
    if (type === 'sound' && matchedPairs.some(pair => pair.sound === index)) return;
    if (type === 'text' && matchedPairs.some(pair => pair.text === index)) return;

    setIncorrectMatch(false); // Reset trạng thái lỗi khi có lần chọn mới

    if (type === 'sound') {
      if (lastSelectionType === 'sound') {
        setSelectedSound(index);
        setSelectedText(null);
      } else {
        if (selectedText !== null) {
          if (correctPairs[index] === selectedText) {
            setMatchedPairs((prev) => [...prev, { sound: index, text: selectedText }]);
          } else {
            setIncorrectMatch(true); // Hiển thị màu đỏ khi nối sai
            setIncorrectPair({ sound: index, text: selectedText });
            setTimeout(() => setIncorrectMatch(false), 1000); // Bỏ trạng thái đỏ sau 3 giây
          }
          setSelectedSound(null);
          setSelectedText(null);
        } else {
          setSelectedSound(index);
        }
      }
      setLastSelectionType('sound');
      if (soundFile) {
        await playSound(soundFile);
      }
    } else if (type === 'text') {
      if (lastSelectionType === 'text') {
        setSelectedText(index);
        setSelectedSound(null);
      } else {
        if (selectedSound !== null) {
          if (correctPairs[selectedSound] === index) {
            setMatchedPairs((prev) => [...prev, { sound: selectedSound, text: index }]);
          } else {
            setIncorrectMatch(true); // Hiển thị màu đỏ khi nối sai
            setIncorrectPair({ sound: selectedSound, text: index });
            setTimeout(() => setIncorrectMatch(false), 3000); // Bỏ trạng thái đỏ sau 3 giây
          }
          setSelectedSound(null);
          setSelectedText(null);
        } else {
          setSelectedText(index);
        }
      }
      setLastSelectionType('text');
    }
  };

  return (
    <View style={styles.pairsContainer}>
      {sounds.map((soundItem, index) => (
        <View style={styles.row} key={index}>
          <TouchableOpacity
            style={[
              styles.soundButton,
              matchedPairs.some(pair => pair.sound === soundItem.id) && styles.correct, // Màu xám và mờ khi đúng
              selectedSound === soundItem.id && !matchedPairs.some(pair => pair.sound === soundItem.id) && styles.selected,
              incorrectMatch && incorrectPair.sound === soundItem.id && styles.incorrect,
            ]}
            onPress={() => handleSelect('sound', soundItem.id, soundItem.sound)}
          >
            <View style={styles.soundContent}>
              <Image source={require('../assets/sound_max_fill.png')} style={styles.soundIcon} />
              <View style={styles.wavesContainer}>
                <View style={styles.wave}></View>
                <View style={[styles.wave, { height: 18 }]}></View>
                <View style={[styles.wave, { height: 24 }]}></View>
                <View style={[styles.wave, { height: 18 }]}></View>
                <View style={styles.wave}></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.textButton,
              matchedPairs.some(pair => pair.text === texts[index].id) && styles.correct, // Màu xám và mờ khi đúng
              selectedText === texts[index].id && !matchedPairs.some(pair => pair.text === texts[index].id) && styles.selected,
              incorrectMatch && incorrectPair.text === texts[index].id && styles.incorrect,
            ]}
            onPress={() => handleSelect('text', texts[index].id)}
          >
            <Text style={styles.text}>{texts[index].text}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const Lesson1Screen = () => {
  const navigation = useNavigation();
  const [showWarning, setShowWarning] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const handleCantHearPress = () => {
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 3000);
  };

  const allMatched = matchedPairs.length === 4; // Kiểm tra nếu tất cả các cặp đã khớp

  return (
    <View style={styles.container}>
      <ProgressBar />
      <MatchingPairs matchedPairs={matchedPairs} setMatchedPairs={setMatchedPairs} />
      <View style={styles.footer}>
        <Text style={styles.cantHearText} onPress={handleCantHearPress}>HIỆN KHÔNG NGHE ĐƯỢC</Text>
        <TouchableOpacity 
          style={[styles.continueButton, !allMatched && styles.disabledButton]}
          onPress={() => allMatched && navigation.navigate('Lesson2Screen')}
          disabled={!allMatched}
        >
          <Text style={styles.continueButtonText}>TIẾP TỤC</Text>
        </TouchableOpacity>
      </View>
      {showWarning && (
        <View style={styles.warningMessage}>
          <Text style={styles.warningText}>Nghe lại sau 15 phút</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 50,
  },
  progressBar: {
    flex: 1,
    height: 15,
    width: 256.32,
    backgroundColor: '#C5C4C4',
    borderRadius: 10,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  progressFill: {
    width: '30%',
    height: '100%',
    backgroundColor: '#00CFFF',
    borderRadius: 10,
  },
  heartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartText: {
    fontFamily: 'Jaldi',
    color: '#FE5959',
    marginLeft: 4,
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 42.25,
  },
  instructionText: {
    fontFamily: 'Instrument Sans',
    fontSize: 18,
    color: '#333',
    fontWeight: '700',
    lineHeight: 21.96,
    marginLeft: 20,
    alignSelf: 'flex-start',
  },
  closeIcon: {
    width: 35,
    height: 34,
  },
  heartIcon: {
    width: 33,
    height: 30,
  },
  pairsContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  soundButton: {
    width: 162,
    height: 74,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  selected: {
    backgroundColor: '#E0F7FF',
    borderColor: '#00CFFF',
  },
  correct: {
    backgroundColor: '#D3D3D3', // Màu xám cho các cặp đúng
    borderColor: '#A9A9A9',
    opacity: 0.2, // Làm mờ khi đúng
  },
  incorrect: {
    backgroundColor: '#FFCDD2',
    borderColor: '#F44336',
  },
  soundContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  soundIcon: {
    width: 24,
    height: 24,
    tintColor: '#00CFFF',
    marginRight: 10,
  },
  wavesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  wave: {
    width: 2,
    height: 12,
    backgroundColor: '#00CFFF',
    marginHorizontal: 1,
  },
  textButton: {
    width: 162,
    height: 74,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  text: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Instrument Sans',
    fontWeight: '400',
    lineHeight: 21.96,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 37,
  },
  cantHearText: {
    color: '#A1A1A1',
    fontSize: 18,
    marginBottom: 15,
    fontFamily: 'Instrument Sans',
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#00CFFF',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 120,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Instrument Sans',
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  warningMessage: {
    position: 'absolute',
    bottom: 90,
    left: 16,
    right: 16,
    backgroundColor: '#FFFBCC',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  warningText: {
    color: '#b5a50a',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Lesson1Screen;
