import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://i.imgur.com/nQyiyKZ.png' }}  // URL hình dolphin của bạn
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6DCFF6',  // Màu nền xanh
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
