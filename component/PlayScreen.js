import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, PixelRatio, ScrollView, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview'; 
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const scale = width / 320;

function normalizeFont(size) {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
}

const PlayScreen = ({ navigation }) => {

  
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const videoData = {
    'Du lịch': [
      'https://www.youtube.com/embed/vWNL3ReYqio',
      'https://www.youtube.com/embed/xCNFScEc77M',
      'https://www.youtube.com/embed/GkWZIBzyL50',
      'https://www.youtube.com/embed/BNHz8SSA95o',
      'https://www.youtube.com/embed/gq3SfLf12ME',
      'https://www.youtube.com/embed/ysynaVNKr0I',
      'https://www.youtube.com/embed/A30IuIjQYYg',
    ],
    'Hoạt hình': [
      'https://www.youtube.com/embed/Q0SDpKxXGh4',
      'https://www.youtube.com/embed/afhbvugukl8',
      'https://www.youtube.com/embed/lCIaAXy-MNw',
      'https://www.youtube.com/embed/nFcyuOCK2lE',
      'https://www.youtube.com/embed/ZCf3MftJNCY',
      'https://www.youtube.com/embed/xrgdjYkRfoU',
      'https://www.youtube.com/embed/yCfx0AQBbQo',
    ],
    'Phim': [
      'https://www.youtube.com/embed/NFebkcCKkeU',
      'https://www.youtube.com/embed/t86sKsR4pnk',
      'https://www.youtube.com/embed/lQBmZBJCYcY',
      'https://www.youtube.com/embed/ET9SHYzMz_4',
      'https://www.youtube.com/embed/u1NlmFa0-68',
      'https://www.youtube.com/embed/NMjhjrBIrG8',
      'https://www.youtube.com/embed/Zp-Jhuhq0bQ',
    ],
    'Tất cả': [
      'https://www.youtube.com/embed/4EY2Q_07iUw',
      'https://www.youtube.com/embed/yzrjibEGwlg',
      'https://www.youtube.com/embed/NWIHICCRYOs',
      'https://www.youtube.com/embed/rlyVBMRXUtc',
      'https://www.youtube.com/embed/_Qw5FWDN-I4',
      'https://www.youtube.com/embed/ysynaVNKr0I',
      'https://www.youtube.com/embed/A30IuIjQYYg',
      'https://www.youtube.com/embed/A30IuIjQYYg',
    ],
  };

  const selectedVideos = videoData[selectedCategory];

  return (
    <View style={styles.container}>
      
      {/* Fixed Top Section */}
      <View style={styles.fixedTop}>
        <View style={styles.stats}>
        <TouchableOpacity 
            onPress={() => {
              console.log("Navigating to FireScreen");
              navigation.navigate('FireScreen');
            }}
          >
            <Text style={[styles.stat, styles.iconSize]}>🔥 1</Text>
          </TouchableOpacity>

          <Text style={[styles.stat, styles.iconSize]}>🛡️ 500</Text>
          <Text style={[styles.stat, styles.iconSize]}>❤️ 5</Text>
          <TouchableOpacity onPress={() => navigation.navigate('HosoScreen')}>
            <Text style={[styles.stat, styles.iconSize]}>👤</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.scrollContainerWrapper}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.scrollContainer}
          >
            <TouchableOpacity 
          style={[styles.button, selectedCategory === 'Tất cả' && styles.selectedButton]} 
          onPress={() => setSelectedCategory('Tất cả')}
        >
          <Text style={[styles.buttonText, selectedCategory === 'Tất cả' && styles.selectedText]}>Tất cả</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, selectedCategory === 'Du lịch' && styles.selectedButton]} 
          onPress={() => setSelectedCategory('Du lịch')}
        >
          <Text style={[styles.buttonText, selectedCategory === 'Du lịch' && styles.selectedText]}>Du lịch</Text>
          <Ionicons name="airplane" size={20} color={selectedCategory === 'Du lịch' ? '#fff' : '#00B7FF'} style={styles.icon} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, selectedCategory === 'Hoạt hình' && styles.selectedButton]} 
          onPress={() => setSelectedCategory('Hoạt hình')}
        >
          <Text style={[styles.buttonText, selectedCategory === 'Hoạt hình' && styles.selectedText]}>Hoạt hình</Text>
          <Text style={styles.icon}>😊</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, selectedCategory === 'Phim' && styles.selectedButton]} 
          onPress={() => setSelectedCategory('Phim')}
        >
          <Text style={[styles.buttonText, selectedCategory === 'Phim' && styles.selectedText]}>Phim&TV</Text>
          <Text style={styles.icon}>🍿</Text>
        </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <ScrollView style={styles.scrollableContent}>
         {/* Content Section */}
      <View style={styles.quizContainer}>
          <Image 
            source={require('../assets/vd_quiz.jpg')} 
            style={styles.quizImage}
          />
          <Text style={styles.quizText}>Bắt đầu Quiz hôm nay</Text>
          <TouchableOpacity 
            style={styles.arrowContainer}
            onPress={() => navigation.navigate('CustomHome')}
          >
            <Ionicons name="arrow-forward" size={24} color='#00B7FF' />
          </TouchableOpacity>
        </View>
        
        {/* Video Section 2 */}
        <View style={styles.contentContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('LearningScreen')} 
        >
          <Text style={styles.sectionTitle}>Học ngay</Text>
        </TouchableOpacity>
          <View style={styles.videoWrapper}>
            <WebView
              source={{ uri: selectedVideos[1] }} 
              style={styles.webview}
              allowsInlineMediaPlayback
            />
          </View>
        </View>

        <View style={styles.manyvideo}>
        <View style={styles.sectionHeader}>
        {/* Biểu tượng Play nằm bên trái của chữ */}
          <Ionicons name="play-circle-outline" size={24} color="#00B7FF" style={styles.iconmn} />
          <Text style={styles.sectionTitle}>Lượt học nhiều nhất</Text>
        </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.videoScrollContainer}>
            <View style={styles.videoContainer}>
              <WebView
                source={{ uri: selectedVideos[2] }} 
                style={styles.webviewmn}
                allowsInlineMediaPlayback
              />
            </View>
            <View style={styles.videoContainer}>
              <WebView
                source={{ uri: selectedVideos[3] }} 
                style={styles.webviewmn}
                allowsInlineMediaPlayback
              />
            </View>
            <View style={styles.videoContainer}>
              <WebView
                source={{ uri: selectedVideos[4] }} 
                style={styles.webviewmn}
                allowsInlineMediaPlayback
              />
            </View>
            <View style={styles.videoContainer}>
              <WebView
                source={{ uri: selectedVideos[5] }} 
                style={styles.webviewmn}
                allowsInlineMediaPlayback
              />
            </View>
          </ScrollView>
        </View>
        {/* Video Section 1 */}
        <View style={styles.contentContainer}>
          <Text style={[styles.sectionTitle]}>Học ngay</Text>
          <View style={styles.videoWrapper}>
            <WebView
              source={{ uri: `${selectedVideos[0]}?modestbranding=1&showinfo=0&controls=1&rel=0` }} 
              style={styles.webview}
              allowsInlineMediaPlayback  
            />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={[styles.sectionTitle]}>Học ngay</Text>
          <View style={styles.videoWrapper}>
            <WebView
              source={{ uri: selectedVideos[6] }} 
              style={styles.webview}
              allowsInlineMediaPlayback  
            />
          </View>
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  fixedTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 150,
    backgroundColor: '#fff', 
    paddingVertical: 10,
    width: '100%',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
    top: height * 0.04,
    marginBottom: height * 0.025,
  },
  iconSize: {
    fontSize: 20, 
  },
  stat: {
    marginHorizontal: 10,
  },
  scrollContainerWrapper: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 70,
    top: height * 0.025, 
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    marginBottom: 2,
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#808080', 
  },
  selectedButton: {
    backgroundColor: '#000', 
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 20, 
  },
  selectedText: {
    fontWeight: 'bold', 
    color: '#fff', 
  },
  icon: {
    marginLeft: 5, 
  },
  quizContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 90, 
    padding: 15,
    marginVertical: 20, 
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginTop: 170,  
  },
  quizImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15, 
  },
  quizText: {
    fontSize: normalizeFont(18),
    fontWeight: 'bold',
    color: '#333',
  },
  arrowContainer: {
    padding: 5,
  },
  scrollableContent: {
    marginTop: 0,  
  },
  contentContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: normalizeFont(18),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoWrapper: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  webview: {
    flex: 1,
  },
  translation: {
    fontSize: normalizeFont(14),
    color: '#888',
  },
  centerText: {
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  iconmn: {
    marginRight: 5, 
    marginBottom: 5,
  },
  manyvideo: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },

  videoScrollContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 0,
  },

  videoContainer: {
    width: width * 0.35, 
    marginRight: 15, 
    borderRadius: 10, 
    overflow: 'hidden',
    marginBottom: 10,
  },
  webviewmn: {
    height: (width * 0.35) * 4 / 3, 
  },
});

export default PlayScreen;
