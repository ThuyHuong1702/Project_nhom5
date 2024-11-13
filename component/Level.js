import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import mascotImage from '../assets/mascot.png';
import bubbleImage from '../assets/Group 8.png';
import backImage from '../assets/Arrow left.png';

const { width, height } = Dimensions.get('window');

const LevelScreen = ({ navigation }) => {
    const [selectedLevel, setSelectedLevel] = useState(null);

    const handleLevelSelect = (level) => {
        setSelectedLevel(level);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={backImage} style={styles.backIcon} />
                </TouchableOpacity>
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar} />
                </View>
            </View>

            <View style={styles.mascotSection}>
                <Image source={mascotImage} style={styles.mascotImage} />
                <ImageBackground source={bubbleImage} style={styles.bubble} resizeMode="contain">
                    <Text style={styles.bubbleText}>Trình độ của bạn?</Text>
                </ImageBackground>
            </View>

            {[
                { label: 'Beginner', value: 'Tôi mới học Tiếng Anh' },
                { label: 'Elementary', value: 'Tôi biết một vài từ thông dụng' },
                { label: 'Intermediate', value: 'Tôi có thể giao tiếp cơ bản' },
                { label: 'Upper Intermediate', value: 'Tôi có thể nói về nhiều chủ để' },
                { label: 'Advanced', value: 'Tôi có thể thảo luận về tất cả các chủ đề' },
            ].map((level, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.optionButton,
                        selectedLevel === level.value ? styles.selectedOption : styles.unselectedOption
                    ]}
                    onPress={() => handleLevelSelect(level.value)}
                >
                    <Text style={[styles.optionText, selectedLevel === level.value && styles.boldText]}>
                        {level.label}
                    </Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                style={[styles.nextButton, selectedLevel ? styles.enabledButton : styles.disabledButton]}
                onPress={() => selectedLevel && navigation.navigate('ReasonScreen')}
                disabled={!selectedLevel}
            >
                <Text style={styles.buttonText}>TIẾP TỤC</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: height * 0.05,
    },
    header: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.04,
        marginBottom: height * 0.015,
    },
    backButton: {
        paddingRight: width * 0.02,
    },
    backIcon: {
        width: width * 0.08,
        height: width * 0.08,
        resizeMode: 'contain',
    },
    progressBarContainer: {
        flex: 1,
        height: height * 0.02,
        backgroundColor: '#C5C4C4',
        borderRadius: 10,
        marginLeft: width * 0.02,
        flexDirection: 'row',
        alignItems: 'center',
    },
    progressBar: {
        width: '25%',
        height: '100%',
        backgroundColor: '#00C3FF',
        borderRadius: 10,
    },
    mascotSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.02,
        width: '90%',
    },
    mascotImage: {
        width: width * 0.25,
        height: width * 0.25,
        resizeMode: 'contain',
    },
    bubble: {
        width: width * 0.5,
        height: height * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.04,
        marginLeft: width * 0.02,
    },
    bubbleText: {
        fontSize: width * 0.045,
        color: '#000000',
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: height * 0.06,
    },
    optionButton: {
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
        width: '90%',
        height: height * 0.08,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: height * 0.01,
    },
    unselectedOption: {
        backgroundColor: '#FFFFFF',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    selectedOption: {
        backgroundColor: '#E0F7FA', 
        borderColor: '#007ACC',    
        borderWidth: 1,
    },
    optionText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    nextButton: {
        paddingVertical: height * 0.02,
        width: '90%',
        height: height * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: height * 0.02,
    },
    enabledButton: {
        backgroundColor: '#00C3FF',
    },
    disabledButton: {
        backgroundColor: '#b0bec5',
    },
    buttonText: {
        fontSize: width * 0.055,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
});

export default LevelScreen;
