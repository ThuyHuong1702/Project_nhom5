import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import mascotImage from '../assets/mascot.png'; // Ensure that the path to your image is correct
import bubbleTextImage from '../assets/bubbleTextImage.png';

const { width, height } = Dimensions.get('window');

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.dotsContainer}>
                <View style={[styles.dot, styles.activeDot]} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
            </View>

            <View style={styles.mascotSection}>
                <View style={styles.bubbleContainer}>
                    <ImageBackground source={bubbleTextImage} style={styles.bubble} resizeMode="contain">
                        <Text style={styles.bubbleText}>Hi, I'm Dolphindash!</Text>
                    </ImageBackground>
                </View>
                <Image source={mascotImage} style={styles.mascotImage} />
            </View>

            <Text style={styles.title}>DOLPHINDASH</Text>
            <Text style={styles.description}>
                Learn Languages whenever and wherever you want. It's free forever.
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('LanguageScreen')}>
                    <Text style={styles.buttonText}>GET STARTED</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.loginButton} 
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={[styles.buttonText, styles.loginButtonText]}>LOG IN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: height * 0.05,
    },
    dotsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: height * 0.07,
        alignSelf: 'center',
    },
    dot: {
        height: height * 0.012,
        width: height * 0.012,
        backgroundColor: '#dcdcdc',
        borderRadius: height * 0.006,
        marginHorizontal: width * 0.01,
    },
    activeDot: {
        width: height * 0.02,
        backgroundColor: '#4a90e2',
    },
    mascotSection: {
        alignItems: 'center',
        position: 'relative',
        marginTop: height * 0.02,
    },
    bubbleContainer: {
        alignItems: 'center',
        position: 'relative',
        marginTop: height * -0.13,
        marginBottom: height * 0.04,
    },
    bubble: {
        width: width * 0.6, 
        height: height * 0.1, 
        alignItems: 'center',
    },
    bubbleText: {
        fontSize: width * 0.043,
        color: '#4A90E2',
        textAlign: 'center',
        top: '15%',
    },
    mascotImage: {
        width: width * 0.55,
        height: height * 0.25,
        resizeMode: 'contain',
        marginTop: height * -0.02,
    },
    title: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
        color: '#4a3e99',
        marginTop: height * 0.02,
        textAlign: 'center',
    },
    description: {
        fontSize: width * 0.045,
        color: '#5f5b99',
        textAlign: 'center',
        marginHorizontal: width * 0.1,
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: height * 0.05,
        width: '100%',
        alignItems: 'center',
    },
    getStartedButton: {
        backgroundColor: '#4a90e2',
        borderRadius: width * 0.06,
        width: '80%',
        paddingVertical: height * 0.02,
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    loginButton: {
        backgroundColor: '#fff',
        borderRadius: width * 0.06,
        borderWidth: 1,
        borderColor: '#4a90e2',
        width: '80%',
        paddingVertical: height * 0.02,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: width * 0.045,
        fontWeight: 'bold',
    },
    loginButtonText: {
        color: '#4a90e2',
    },
});

export default MainScreen;
