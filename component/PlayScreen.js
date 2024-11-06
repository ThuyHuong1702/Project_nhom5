import React from 'react';
import { View, StyleSheet, Text, Dimensions, PixelRatio, ScrollView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 320; // Scale based on a standard screen width of 320dp

function normalizeFont(size) {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
}

const PlayScreen = () => {
  return (
    <View style={styles.container}>
      {/* Stats Section */}
      <View style={styles.stats}>
        <Text style={styles.stat}>🔥 1</Text>
        <Text style={styles.stat}>🛡️ 500</Text>
        <Text style={styles.stat}>❤️ 5</Text>
        <Text style={styles.stat}>👤 </Text>
      </View>

      {/* Scrollable button container with reduced height */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContainer}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tất cả</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Du lịch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hoạt hình</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hoạt hình</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hoạt hình</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hoạt hình</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hoạt hình</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hoạt hình</Text>
        </TouchableOpacity>
        {/* Add more buttons as needed */}
      </ScrollView>

      <View style={styles.quizContainer}>
        <Text style={styles.quizText}>Bắt đầu Quiz hôm nay</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Thói quen buổi sáng</Text>
        <Text style={styles.description}>“Tôi đi mua cà phê sáng.”</Text>
        <Text style={styles.translation}>I go and ____ my morning coffee.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  stat: {
    textAlign: 'center',
    fontSize: normalizeFont(18),
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    height: 60,  // Set a fixed height for the scroll container
    paddingVertical: 5,  // Reduce the vertical padding
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,  // Reduced padding for smaller button size
    paddingHorizontal: 20,
    marginRight: 15,
    borderRadius: 10,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: normalizeFont(14),  // Reduced font size for smaller button text
    fontWeight: 'bold',
  },
  quizContainer: {
    backgroundColor: '#D9EFFF',
    padding: 15,
    top: -250,
    height: 65,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  quizText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    height: 300,
    top: -250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  video: {
    height: 300, // Video height
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  translation: {
    fontSize: 16,
    color: '#777',
  },
});

export default PlayScreen;
