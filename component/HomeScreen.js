// HomeScreen.js
import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, PixelRatio } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const normalizeFont = (size) => {
  const newSize = size * (width / 320);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const DashedLine1 = () => (
    <Svg height={height * 0.3} width={width * 0.6} style={styles.dashedLine1}>
      <Path
        d="M 125 40 C 150 60, 250 100, 10 150"
        stroke="#4169E1"
        strokeWidth="4"
        fill="none"
        strokeDasharray="8"
      />
    </Svg>
  );
  
  const DashedLine2 = () => (
    <Svg height={height * 0.3} width={width * 0.6} style={styles.dashedLine2}>
      <Path
        d="M 100 50 C -70 100, 350 250, 700 20"
        stroke="#4169E1"
        strokeWidth="4"
        fill="none"
        strokeDasharray="8"
      />
    </Svg>
  );
  
  const DashedLine3 = () => (
    <Svg height={height * 0.3} width={width * 0.6} style={styles.dashedLine3}>
      <Path
        d="M 130 50 C 170 50, 350 200, -200 110"
        stroke="#4169E1"
        strokeWidth="4"
        fill="none"
        strokeDasharray="8"
      />
    </Svg>
  );
  
  const DashedLine4 = () => (
    <Svg height={height * 0.3} width={width * 0.6} style={styles.dashedLine4}>
      <Path
        d="M 100 50 C -100 100, 200 220, 330 50"
        stroke="#4169E1"
        strokeWidth="4"
        fill="none"
        strokeDasharray="8"
      />
    </Svg>
  );
  

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        {/* Stats Section */}
        <View style={styles.stats}>
          <Text style={styles.stat}>🔥 1</Text>
          <Text style={styles.stat}>🛡️ 500</Text>
          <Text style={styles.stat}>❤️ 5</Text>
          <Text style={styles.stat}>👤 </Text>
        </View>

        {/* Header Section */}
        
        <View style={styles.headerContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>PHẦN 1, CỬA 1</Text>
            <Text style={styles.subHeader}>Gọi đồ uống</Text>
          </View>
          <View style={styles.headerDivider} />
          <Image source={require('../assets/list.jpg')} style={styles.headerIcon} />
        </View>

        {/* Map Section */}
        <View style={styles.map}>
          <Image source={require('../assets/island1.jpg')} style={[styles.island, styles.island1]} />
          <View style={styles.circleContainer} />
          <DashedLine1 />
          <Image source={require('../assets/island2.jpg')} style={[styles.island, styles.island2]} />
          <DashedLine2 />
          <Image source={require('../assets/island3.jpg')} style={[styles.island, styles.island3]} />
          <DashedLine3 />
          <Image source={require('../assets/chest.jpg')} style={[styles.island, styles.chest]} />
          <DashedLine4 />
          <Image source={require('../assets/dolphin.jpg')} style={[styles.island, styles.dolphin]} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 45,
        paddingHorizontal: 20,
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
      headerContainer: {
        backgroundColor: '#00B7FF',
        padding: 10,
        borderRadius: 20,
        width: '100%',
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginBottom: 25,
      },
      headerTextContainer: {
        flex: 1, 
        alignItems: 'flex-start', 
        justifyContent: 'center', 
      },
      headerDivider: {
        width: 1,
        height: "100%",
        backgroundColor: '#fff',
        marginLeft: 10, 
      },
      headerIcon: {
        width: 40,
        height: 40,
        marginLeft: 10, 
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
      map: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
      },
      circleContainer: {
        position: 'absolute',
        top: -15,
        left: '50%',
        marginLeft: -70,
        width: 135,
        height: 135,
        borderRadius: 100,
        borderWidth: 9,
        borderColor: '#C1E2F2',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
      },
      island: {
        width: width * 0.25,
        height: width * 0.25,
      },
      island1: {
        position: 'absolute',
        top: 0,
      },
      island2: {
        position: 'absolute',
        top: 125,
        left: '10%',
        borderRadius: 50,
      },
      island3: {
        position: 'absolute',
        top: 245,
        right: '15%',
      },
      chest: {
        position: 'absolute',
        top: 360,
        left: '18%',
      },
      dolphin: {
        position: 'absolute',
        bottom: 45,
        right: '25%',
      },
      dashedLine1: {
        position: 'absolute',
        left: width * 0.28,
        top: height * 0.06,
      },
      dashedLine2: {
        position: 'absolute',
        right: width * 0.4,
        top: height * 0.2,
      },
      dashedLine3: {
        position: 'absolute',
        left: width * 0.4,
        top: height * 0.35,
      },
      dashedLine4: {
        position: 'absolute',
        right: width * 0.35,
        top: height * 0.5,
      },
      icon: {
        fontSize: normalizeFont(25),
      }
});

export default HomeScreen;
