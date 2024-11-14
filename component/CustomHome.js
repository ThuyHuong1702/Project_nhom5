import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, PixelRatio, Animated, StatusBar, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const normalizeFont = (size) => {
  const newSize = size * (width / 320);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const scaleWidth = (size) => size * (width / 375);
const scaleHeight = (size) => size * (height / 667);

const HomeScreen = ({ navigation }) => {
  const [headerTitle, setHeaderTitle] = useState('PHẦN 1, CỬA 1');
  const [subHeaderText, setSubHeaderText] = useState('Gọi đồ uống');
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerContainerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 300, 600, 900, 1200],
    outputRange: ['#00B7FF', '#FF6347', '#FFA500', '#8A2BE2', '#20B2AA'],
    extrapolate: 'clamp',
  });

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    if (scrollPosition > 2500) {
      setHeaderTitle('PHẦN 1, CỬA 5');
      setSubHeaderText('Gọi tráng miệng');
    } else if (scrollPosition > 1900) {
      setHeaderTitle('PHẦN 1, CỬA 4');
      setSubHeaderText('Gọi thêm món phụ');
    } else if (scrollPosition > 1200) {
      setHeaderTitle('PHẦN 1, CỬA 3');
      setSubHeaderText('Gọi món tráng miệng');
    } else if (scrollPosition > 600) {
      setHeaderTitle('PHẦN 1, CỬA 2');
      setSubHeaderText('Gọi món chính');
    } else {
      setHeaderTitle('PHẦN 1, CỬA 1');
      setSubHeaderText('Gọi đồ uống');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.fixedHeader}>
        <View style={styles.stats}>
          <TouchableOpacity 
            onPress={() => {
              console.log("Navigating to FireScreen");
              navigation.navigate('FireScreen');
            }}
          >
            <Text style={[styles.stat, styles.stat]}>🔥 1</Text>
          </TouchableOpacity>
          <Text style={styles.stat}>🛡️ 500</Text>
          <Text style={styles.stat}>❤️ 5</Text>
          <TouchableOpacity onPress={() => navigation.navigate('HosoScreen')}>
            <Text style={styles.stat}>👤</Text>
          </TouchableOpacity>
        </View>

        <Animated.View style={[styles.headerContainer, { backgroundColor: headerContainerBackgroundColor }]}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>{headerTitle}</Text>
            <Text style={styles.subHeader}>{subHeaderText}</Text>
          </View>

          <View style={styles.verticalDivider} />
          <Image 
            source={{ uri: 'https://img.icons8.com/?size=100&id=111491&format=png&color=FFFFFF' }} 
            style={styles.headerIcon} 
          />
        </Animated.View>
      </View>

      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.map}>
          {/* Section 1 content */}
          <TouchableOpacity onPress={() => navigation.navigate('Lesson1Screen')} style={styles.circleWrapper}>
            <Image source={require('../assets/Group 41830.png')} style={styles.circleBackground} />
            <Image source={require('../assets/island1.jpg')} style={[styles.island, styles.island1]} />
          </TouchableOpacity>
          <Image source={require('../assets/Group 41836.png')} style={styles.dashline1} />
          <TouchableOpacity onPress={() => navigation.navigate('Bai1')} style={styles.circleWrapper}>
            <Image source={require('../assets/island2.jpg')} style={[styles.island, styles.island2]} />
          </TouchableOpacity>
          <Image source={require('../assets/Group 41831.png')} style={styles.dashline2} />
          <Image source={require('../assets/island3.jpg')} style={[styles.island, styles.island3]} />
          <Image source={require('../assets/Group 41834.png')} style={styles.dashline3} />
          <Image source={require('../assets/chest.jpg')} style={[styles.island, styles.island4]} />
          <Image source={require('../assets/Group 41833.png')} style={styles.dashline4} />
          <Image source={require('../assets/dolphin.jpg')} style={[styles.island, styles.dolphin]} />

          {/* Divider between Section 1 and Section 2 */}
          <View style={styles.sectionDivider} />

          {/* Section 2 content */}
          <TouchableOpacity onPress={() => navigation.navigate('Lesson1Screen')} style={styles.circleWrapper}>
            <Image source={require('../assets/Group 41830.png')} style={styles.circleBackground} />
            <Image source={require('../assets/dao1.jpg')} style={[styles.island, styles.island1]} />
          </TouchableOpacity>
          <Image source={require('../assets/Group 41836.png')} style={styles.dashline1} />
          <TouchableOpacity onPress={() => navigation.navigate('Bai1')} style={styles.circleWrapper}>
            <Image source={require('../assets/dao2.jpg')} style={[styles.island, styles.island2]} />
          </TouchableOpacity>
          <Image source={require('../assets/Group 41831.png')} style={styles.dashline2} />
          <Image source={require('../assets/dao3.jpg')} style={[styles.island, styles.island3]} />
          <Image source={require('../assets/Group 41834.png')} style={styles.dashline3} />
          <Image source={require('../assets/ruong.jpg')} style={[styles.island, styles.island4]} />
          <Image source={require('../assets/Group 41833.png')} style={styles.dashline4} />
          <Image source={require('../assets/caheohong.jpg')} style={[styles.island, styles.dolphin]} />

        </View>
      </Animated.ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fixedHeader: {
    backgroundColor: '#fff',
    paddingHorizontal: scaleWidth(10),
    paddingTop: scaleHeight(15),
    paddingBottom: scaleHeight(10),
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleHeight(10),
    paddingHorizontal: scaleWidth(20),
  },
  stat: {
    fontSize: normalizeFont(18),
    textAlign: 'center',
  },
  headerContainer: {
    backgroundColor: '#00B7FF',
    paddingVertical: scaleHeight(10),
    paddingHorizontal: scaleWidth(20),
    borderRadius: 10,
    marginHorizontal: scaleWidth(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 1,
  },
  verticalDivider: {
    width: 1,
    height: '140%',
    backgroundColor: '#FFFFFF',
    marginHorizontal: scaleWidth(18),
  },
  headerIcon: {
    width: scaleWidth(40),
    height: scaleWidth(40),
  },
  header: {
    fontSize: normalizeFont(18),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subHeader: {
    fontSize: normalizeFont(14),
    color: '#FFFFFF',
  },
  scrollContent: {
    paddingTop: scaleHeight(20),
    paddingHorizontal: scaleWidth(20),
    alignItems: 'center',
  },
  map: {
    alignItems: 'center',
    width: '100%',
  },
  circleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  circleBackground: {
    position: 'absolute',
    width: scaleWidth(140),
    height: scaleWidth(140),
  },
  island: {
    width: width * 0.25,
    height: width * 0.25,
    marginVertical: scaleHeight(15),
    borderRadius: 100,
  },
  island1: {
    width: scaleWidth(100),
    height: scaleHeight(90),
  },
  dashline1: {
    width: scaleWidth(200),
    height: scaleHeight(73),
    marginBottom: scaleHeight(10),
  },
  dashline2: {
    width: scaleWidth(102),
    height: scaleHeight(81),
    marginTop: scaleHeight(-40),
    marginLeft: scaleWidth(-30),
  },
  dashline3: {
    width: scaleWidth(183.08),
    height: scaleHeight(65),
    marginTop: scaleHeight(-10),
    marginRight: scaleWidth(-100),
  },
  dashline4: {
    marginLeft: scaleWidth(-70),
    marginTop: scaleHeight(-20),
  },
  island2: {
    width: scaleWidth(90),
    height: scaleHeight(81.81),
    marginTop: scaleHeight(-10),
    marginLeft: scaleWidth(-200),
  },
  island3: {
    width: scaleWidth(90),
    height: scaleHeight(81.81),
    marginTop: scaleHeight(-70),
    marginRight: scaleWidth(-160),
  },
  island4: {
    width: scaleWidth(90),
    height: scaleHeight(81.81),
    marginTop: scaleHeight(0),
    marginLeft: scaleWidth(-130),
  },
  dolphin: {
    width: scaleWidth(90),
    height: scaleHeight(81.81),
    marginTop: scaleHeight(-80),
    marginLeft: scaleWidth(50),
  },
  sectionDivider: {
    width: '80%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: scaleHeight(20),
  },
  sectionDivider: {
    width: '110%',              
    borderBottomWidth: 3,      
    borderColor: '#dddd',       
    borderStyle: 'dashed',     
    marginVertical: scaleHeight(40), 
  },
});

export default HomeScreen;
