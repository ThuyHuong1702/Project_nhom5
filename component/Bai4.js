import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

const { width } = Dimensions.get("window");

const Bai4 = ({ navigation, route }) => {
    const initialLives = route.params?.lives ?? 4;
    const [selectedOption, setSelectedOption] = useState(null);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [lives, setLives] = useState(initialLives);

    const handleOptionSelect = (index) => {
        if (!checked) {
            setSelectedOption(index);
            setChecked(false);
        }
    };

    const handleCheckPress = () => {
        const correct = selectedOption === 2; // Assuming "không thích John" is the correct answer
        setIsCorrect(correct);
        setChecked(true);

        if (!correct) {
            setLives((prevLives) => Math.max(prevLives - 1, 0));
        }
    };

    const handleContinuePress = () => {
        // Always navigate to the next screen, regardless of whether the answer is correct or incorrect
        navigation.navigate('CustomHome', { lives });
    };

    // Function to trigger speech
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

            <Text style={styles.title}>Đọc và trả lời</Text>

            <View style={styles.audioContainer}>
                <TouchableOpacity onPress={() => handleSpeech("Why do you want to marry John? He isn’t a good boyfriend. He isn’t friendly. And he watches too much TV!")}>
                    <Image source={require('../assets/Group 41902.png')} style={styles.audioIcon} />
                </TouchableOpacity>
                <View style={styles.audioTextContainer}>
                    <Text style={styles.audioText}>Why do you want to marry John? He isn’t a good boyfriend. He isn’t friendly. And he watches too much TV!</Text>
                    <View style={styles.dashedLine} />
                </View>
            </View>
            <Text style={styles.subtitle}>Người nói.....</Text>

            <View style={styles.optionsContainer}>
                {["không quen John", "muốn cưới John", "không thích John"].map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            selectedOption === index && styles.selectedOptionButton,
                        ]}
                        onPress={() => handleOptionSelect(index)}
                        disabled={checked}
                    >
                        <Text style={[styles.optionText, selectedOption === index && styles.selectedOptionText]}>
                            {option}
                        </Text>
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
                    <Text style={isCorrect ? styles.correctText : styles.incorrectText}>
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
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
        marginVertical: 10,
    },
    audioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
        width: '100%',
        paddingLeft: 5,

    },
    audioIcon: {
        width: 35,
        height: 35,
        marginRight: 10,
    },
    audioTextContainer: {
        flex: 1,
    },
    audioText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        paddingVertical: 10,
        width: '100%',
        height: 47,
        marginLeft: 5,
        marginTop: 20,

    },
    optionsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: -100,
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
        borderColor: '#00C3FE',
        borderWidth: 2,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    selectedOptionText: {
        color: '#00C3FE',
    },
    checkButton: {
        width: 345,
        height: 51,
        backgroundColor: '#BEBEBE',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
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
    correctText: {
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
    continueButton: {
        marginTop: 10,
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
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
        backgroundColor: '#FF0000',
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Bai4;
