import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import mascotImage from './mascot.png'; // Path to your mascot image

const CreateProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Indicator Dots */}
            <View style={styles.indicatorContainer}>
                <View style={[styles.dot, styles.activeDot]} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
            </View>

            {/* Bubble above Mascot */}
            <View style={styles.bubble}>
                <Text style={styles.bubbleText}>Awesome!</Text>
            </View>

            {/* Mascot Image */}
            <Image source={mascotImage} style={styles.mascotImage} />

            {/* Heading */}
            <Text style={styles.heading}>DOLPHINDASH</Text>

            {/* Subtitle Text */}
            <Text style={styles.subtitle}>
                Create a profile now, so you can save progress and connect with friends. Or you can skip it.
            </Text>

            {/* Primary Button */}
            <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('ProfileCreation')}>
                <Text style={styles.primaryButtonText}>CREATE A PROFILE</Text>
            </TouchableOpacity>

            {/* Skip Button */}
            <TouchableOpacity onPress={() => navigation.navigate('Skip')} style={styles.skipButton}>
                <Text style={styles.skipButtonText}>SKIP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#d3d3d3',
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: '#007BFF',
    },
    bubble: {
        backgroundColor: '#E0F0FF',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginBottom: -20,
        zIndex: 1,
    },
    bubbleText: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    mascotImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4A4A4A',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#7E7E7E',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 30,
    },
    primaryButton: {
        width: '80%',
        backgroundColor: '#A0CFFF',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 10,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    skipButton: {
        width: '80%',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#A0CFFF',
    },
    skipButtonText: {
        color: '#A0CFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreateProfileScreen;
