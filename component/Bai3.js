import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

const { width } = Dimensions.get("window");

const Bai3 = ({ navigation, route }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [lives, setLives] = useState(route.params?.lives || 4);

    const handleOptionSelect = (index) => {
        if (!checked) {
            setSelectedOption(index);
        }
    };

    const handleCheckPress = () => {
        const correct = selectedOption === 1;
        setIsCorrect(correct);
        setChecked(true);

        if (!correct) {
            setLives((prevLives) => Math.max(prevLives - 1, 0));
        }
    };

    const handleContinuePress = () => {
        navigation.navigate('Bai4', { lives });
    };

    const handleSpeech = (text) => {
        Speech.speak(text, { language: 'en', rate: 0.75 });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons
                    name="close"
                    size={34}
                    color="#A9A9A9"
                    onPress={() => navigation.navigate('CustomHome')} 
                />
                <View style={styles.progressBar}>
                    <View style={styles.progress} />
                </View>
                <View style={styles.heartContainer}>
                    <Ionicons name="heart" size={28} color="red" />
                    <Text style={styles.heartText}>{lives}</Text>
                </View>
            </View>

            <Text style={styles.title}>Hoàn thành hội thoại</Text>

            <View style={styles.dialogContainer}>
                <ImageBackground source={require('../assets/Group 8.png')} style={styles.speechBubble} resizeMode="contain">
                    <TouchableOpacity onPress={() => handleSpeech("Who is that tall man?")}>
                        <Ionicons name="volume-high" size={20} color="#00C3FE" style={styles.audioIcon} />
                    </TouchableOpacity>
                    <Text style={styles.speechText}>Who is that tall man?</Text>
                </ImageBackground>

                <ImageBackground source={require('../assets/hội thoại 2.png')} style={styles.responseBubble} resizeMode="contain">
                    <Text style={styles.responseText}>____________________</Text>
                </ImageBackground>
            </View>

            <View style={styles.optionsContainer}>
                {["It starts at three o'clock.", "That's my older brother."].map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            selectedOption === index && styles.selectedOptionButton,
                        ]}
                        onPress={() => handleOptionSelect(index)}
                        disabled={checked}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                style={[styles.checkButton, selectedOption !== null && styles.activeCheckButton]}
                onPress={handleCheckPress}
                disabled={selectedOption === null}
            >
                <Text style={styles.buttonText}>KIỂM TRA</Text>
            </TouchableOpacity>

            {checked && (
                <View style={[styles.resultOverlay, isCorrect ? styles.correctOverlay : styles.incorrectOverlay]}>
                    <Ionicons
                        name={isCorrect ? "checkmark-circle" : "close-circle"}
                        size={24}
                        color="#FFFFFF"
                        style={styles.resultIcon}
                    />
                    <Text style={[styles.resultText, !isCorrect && styles.incorrectText]}>
                        {isCorrect ? "Tuyệt vời!" : "Rất tiếc"}
                    </Text>
                    {!isCorrect && <Text style={styles.tryAgainText}>Thử lại lần nữa nhé</Text>}
                    <TouchableOpacity
                        style={[styles.continueButton, isCorrect ? styles.correctContinueButton : styles.incorrectContinueButton]}
                        onPress={handleContinuePress}
                    >
                        <Text style={styles.continueButtonText}>TIẾP TỤC</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
        justifyContent: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    progressBar: {
        width: width * 0.65,
        height: 15,
        backgroundColor: '#C5C4C4',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    progress: {
        width: '50%',
        height: '100%',
        backgroundColor: '#00C3FE',
        borderRadius: 10,
    },
    heartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heartText: {
        marginLeft: 5,
        fontSize: 16,
        color: 'red',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        paddingVertical: 10,
        marginBottom: 20, // Add some space between title and dialog
    },
    dialogContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    speechBubble: {
        width: 250,
        height: 80,
        paddingHorizontal: 15,
        flexDirection: 'row', // Đặt biểu tượng và văn bản trong một hàng ngang
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 100,
    },
    audioIcon: {
        marginRight: 0,
        marginLeft: 20,
    },
    speechText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 20,
    },
    responseBubble: {
        width: 250, // Same width as speechBubble
        height: 50, // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginLeft: 100,
    },
    responseText: {
        fontSize: 16,
        color: '#9D9D9D',
    },
    optionsContainer: {
        justifyContent: 'center',
        marginVertical: 20, // Add space before options
    },
    optionButton: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#A2A2A2',
        marginVertical: 5,
        alignItems: 'center',
    },
    selectedOptionButton: {
        backgroundColor: '#D0EFFF',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    resultOverlay: {
        position: 'absolute',
        bottom: 0,
        width: 415,
        padding: 20,
        alignItems: 'center',
    },
    correctOverlay: {
        backgroundColor: '#3CD2FF',
    },
    incorrectOverlay: {
        backgroundColor: '#FFC8C8',
    },
    resultIcon: {
        marginBottom: 5,
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    incorrectText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF4D4D',
    },
    tryAgainText: {
        fontSize: 14,
        color: '#FF4D4D',
    },
    checkButton: {
        width: 345,
        height: 51,
        backgroundColor: '#BEBEBE',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 190,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    activeCheckButton: {
        backgroundColor: '#00C3FE',
    },
    continueButton: {
        marginTop: 10,
        width: 200,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    correctContinueButton: {
        backgroundColor: '#5F9AEA',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 345,
        height: 51, // Adjust height if necessary
    },
    incorrectContinueButton: {
        backgroundColor: '#FF0000', // Red background color
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 345,
        height: 51, // Adjust height if necessary
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Bai3;
