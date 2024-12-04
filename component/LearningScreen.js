import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

const TravelAppScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Điều hướng đến màn hình thanh toán
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.container}>
      {/* Sticky Video Section */}
      <View style={styles.stickyHeader}>
        <WebView
          style={styles.video}
          source={{ uri: 'https://www.youtube.com/embed/Zp-Jhuhq0bQ' }}
          allowsFullscreenVideo
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Horizontal Scroll Section */}
        <View style={styles.horizontalContainer}>
          <Text style={styles.horizontalTitle}>Các câu nổi bật</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <SentenceCard text="At the top of our bucket list is the Philippines." translation="Địa điểm chúng tôi muốn tới nhất là Philippines." />
            <SentenceCard text="I really want to go backpacking." translation="Tôi rất muốn đi du lịch bụi." />
            <SentenceCard text="I want to go to Japan." translation="Tôi muốn tới Nhật Bản." />
            <SentenceCard text="We would love to go to New Zealand." translation="Chúng tôi rất muốn đến New Zealand." />
            <SentenceCard text="I want to travel frequently." translation="Tôi muốn đi du lịch thường xuyên." />
          </ScrollView>
        </View>

        {/* Practice Section */}
        <View style={styles.practiceContainer}>
          <Text style={styles.practiceText}>Hãy thử luyện nói nào!</Text>
          <View style={styles.practiceBox}>
            <Text style={styles.practiceSentence}>At the top of our bucket list is the Philippines.</Text>
            <Text style={styles.practiceTranslation}>Địa điểm chúng tôi muốn tới nhất là Philippines.</Text>
            <View>
              <Button
                title="Luyện nói"
                color='#00B7FF'
                onPress={handlePress}
              />
            </View>
          </View>
        </View>

        {/* Title Section */}
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>Chủ đề đang học</Text>
          <Text style={styles.title}>Tôi muốn đi du lịch</Text>
        </View>

        {/* Sentences List */}
        <View style={styles.listContainer}>
          <Sentence 
            text="Địa điểm chúng tôi muốn tới nhất là Philippines." 
            translation="At the top of our bucket list is the Philippines." 
            imageSource={require('../assets/caheo5.jpg')} 
          />
          <View style={styles.dashedLine} />
          <Sentence 
            text="Tôi rất muốn đi du lịch bụi." 
            translation="I really want to go backpacking." 
            imageSource={require('../assets/caheo2.jpg')} 
          />
          <View style={styles.dashedLine} />
          <Sentence 
            text="Tôi muốn tới Nhật Bản." 
            translation="I want to go to Japan." 
            imageSource={require('../assets/caheo3.jpg')} 
          />
          <View style={styles.dashedLine} />
          <Sentence 
            text="Chúng tôi rất muốn đến New Zealand." 
            translation="We would love to go to New Zealand." 
            imageSource={require('../assets/caheo4.jpg')} 
          />
          <View style={styles.dashedLine} />
          <Sentence 
            text="Tôi muốn đi du lịch thường xuyên." 
            translation="I want to travel frequently." 
            imageSource={require('../assets/caheo1.jpg')} 
          />
        </View>
      </ScrollView>
    </View>
  );
};

const SentenceCard = ({ text, translation }) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>{text}</Text>
    <Text style={styles.cardTranslation}>{translation}</Text>
  </View>
);

const Sentence = ({ text, translation, imageSource }) => (
  <View style={styles.sentenceContainer}>
    <Image source={imageSource} style={styles.sentenceImage} />
    <View>
      <Text style={styles.sentenceText}>{text}</Text>
      <Text style={styles.sentenceTranslation}>{translation}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stickyHeader: {
    position: 'absolute', 
    top: 0,
    width: '100%',
    zIndex: 10,
    backgroundColor: '#fff',
  },
  video: {
    width: '100%',
    height: 200,
  },
  content: {
    paddingTop: 210, 
  },
  horizontalContainer: {
    marginTop: 10,
    padding: 10,
  },
  horizontalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    width: 250,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardTranslation: {
    fontSize: 14,
    color: '#666',
  },
  titleContainer: {
    padding: 20,
  },
  subtitle: {
    color: '#00B7FF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  practiceContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  practiceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00B7FF',
  },
  practiceBox: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  practiceSentence: {
    fontSize: 16,
    marginBottom: 5,
  },
  practiceTranslation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  listContainer: {
    padding: 20,
  },
  sentenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,  
  },
  sentenceImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 10,
    alignSelf: 'flex-start',  
    borderWidth: 2,          
    borderColor: '#007bff',   
  },
  sentenceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sentenceTranslation: {
    fontSize: 14,
    color: '#666',
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 5,
    borderStyle: 'dashed', 
  },
});

export default TravelAppScreen;
