import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import mascotImage from '../assets/mascot.png';
import bubbleImage from '../assets/Group 8.png';
import backImage from '../assets/Arrow left.png';

const { width, height } = Dimensions.get('window');
const scale = width / 375; // Dựa trên iPhone 8 Plus

const GoalScreen = ({ navigation }) => {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const goals = [
        { label: '5 phút / ngày', level: 'Dễ' },
        { label: '10 phút / ngày', level: 'Vừa' },
        { label: '15 phút / ngày', level: 'Khó' },
        { label: '30 phút / ngày', level: 'Siêu khó' },
    ];

    const handleGoalSelect = (goal) => {
        setSelectedGoal(goal.label);
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
                    <Text style={styles.bubbleText}>Mục tiêu hàng ngày{"\n"}của bạn là gì?</Text>
                </ImageBackground>
            </View>

            {goals.map((goal) => (
                <TouchableOpacity 
                    key={goal.label} 
                    style={[
                        styles.optionButton,
                        selectedGoal === goal.label ? styles.selectedOption : styles.unselectedOption,
                    ]}
                    onPress={() => handleGoalSelect(goal)}
                >
                    <Text style={[styles.optionText, selectedGoal === goal.label && styles.boldText]}>
                        {goal.label}
                    </Text>
                    <Text style={styles.levelText}>{goal.level}</Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                style={[styles.nextButton, selectedGoal ? styles.enabledButton : styles.disabledButton]}
                onPress={() => selectedGoal && navigation.navigate('ProfileScreen')}
                disabled={!selectedGoal}
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: height * 0.05,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
    },
    backButton: {
        paddingRight: width * 0.03,
    },
    backIcon: {
        width: scale * 24,
        height: scale * 24,
        resizeMode: 'contain',
    },
    progressBarContainer: {
        flex: 1,
        height: height * 0.02,
        backgroundColor: '#C5C4C4',
        borderRadius: 10,
        marginLeft: width * 0.03,
        flexDirection: 'row',
        alignItems: 'center',
    },
    progressBar: {
        width: '75%',
        height: '100%',
        backgroundColor: '#00C3FF',
        borderRadius: 10,
    },
    mascotSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.05,
    },
    mascotImage: {
        width: width * 0.25,
        height: width * 0.25,
        resizeMode: 'contain',
    },
    bubble: {
        width: width * 0.6,
        height: width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        marginLeft: width * 0.03,
    },
    bubbleText: {
        fontSize: 19 * scale,
        color: '#000000',
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 28 * scale,
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
        justifyContent: 'space-between',
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
        fontSize: 22 * scale,
        fontWeight: 'bold',
        color: '#000000',
    },
    levelText: {
        fontSize: 14 * scale,
        color: '#4a90e2',
    },
    nextButton: {
        paddingVertical: height * 0.02,
        width: '90%',
        height: height * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: height * 0.05,
        backgroundColor: '#98B5BF',
    },
    enabledButton: {
        backgroundColor: '#00C3FF',
    },
    disabledButton: {
        backgroundColor: '#b0bec5',
    },
    buttonText: {
        fontSize: 22 * scale,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
});

export default GoalScreen;
