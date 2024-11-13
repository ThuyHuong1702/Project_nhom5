import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import mascotImage from '../assets/mascot.png'; // Path to your mascot image
import bubbleTextImage from '../assets/bubbleTextImage.png'; // Path to your bubble text image

const { width, height } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Progress dots at the top */}
            <View style={styles.progressDots}>
                {Array(5).fill().map((_, index) => (
                    <View key={index} style={index === 2 ? styles.activeDot : styles.inactiveDot} />
                ))}
            </View>

            {/* Bubble text image above mascot */}
            <View style={styles.bubbleContainer}>
                <ImageBackground source={bubbleTextImage} style={styles.bubble} resizeMode="contain">
                    <Text style={styles.bubbleText}>Awesome!</Text>
                </ImageBackground>
            </View>

            {/* Mascot image */}
            <Image source={mascotImage} style={styles.mascotImage} />

            {/* Text container for the app title and description */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>DOLPHINDASH</Text>
                <Text style={styles.description}>
                    Create a profile now, so you can save progress and connect with friends. Or you can skip it.
                </Text>
            </View>

            {/* Create profile button */}
            <TouchableOpacity style={styles.createProfileButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>CREATE A PROFILE</Text>
            </TouchableOpacity>

            {/* Skip button */}
            <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.skipText}>SKIP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: height * 0.02,
    },
    progressDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.02,
    },
    activeDot: {
        width: width * 0.08,
        height: height * 0.01,
        borderRadius: height * 0.005,
        backgroundColor: '#28AFF0',
        marginHorizontal: width * 0.01,
    },
    inactiveDot: {
        width: width * 0.02,
        height: width * 0.02,
        borderRadius: width * 0.01,
        backgroundColor: '#D9D9D9',
        marginHorizontal: width * 0.01,
    },
    bubbleContainer: {
        alignItems: 'center',
        position: 'relative',
        marginBottom: height * -0.01,
    },
    bubble: {
        width: width * 0.5,
        height: height * 0.07,
        alignItems: 'center',
    },
    bubbleText: {
        fontSize: width * 0.04,
        color: '#4A90E2',
        top: '15%',
    },
    mascotImage: {
        width: width * 0.6,
        height: height * 0.25,
        resizeMode: 'contain',
        marginTop: height * -0.02,
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: width * 0.08,
    },
    title: {
        fontSize: width * 0.075,
        fontWeight: 'bold',
        color: '#4a3e99',
        marginBottom: height * 0.01,
        textAlign: 'center',
    },
    description: {
        fontSize: width * 0.05,
        fontWeight: '400',
        color: '#4a3e99',
        textAlign: 'center',
        marginBottom: height * 0.01,
    },
    createProfileButton: {
        backgroundColor: '#4A90E2',
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.1,
        borderRadius: width * 0.07,
        width: '80%',
        marginBottom: height * -0.02,
    },
    skipButton: {
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.1,
        borderColor: '#4A90E2',
        borderWidth: 2,
        borderRadius: width * 0.07,
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.05,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    skipText: {
        color: '#4A90E2',
        fontSize: width * 0.05,
        textAlign: 'center',
    },
});

export default ProfileScreen;
