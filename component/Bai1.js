import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

const { width } = Dimensions.get("window");

const Bai1 = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [lives, setLives] = useState(4);

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
        // Always navigate to the next screen, regardless of whether the answer is correct or incorrect
        navigation.navigate('Bai2', { lives });
    };

    const handleSpeech = () => {
        Speech.speak("library");
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

            <Text style={styles.title}>Chọn hình ảnh đúng</Text>

            <View style={styles.audioContainer}>
                <TouchableOpacity onPress={handleSpeech}>
                    <Image source={require('../assets/Group 41902.png')} style={styles.audioIcon} />
                </TouchableOpacity>
                <View style={styles.audioTextContainer}>
                    <Text style={styles.audioText}>library</Text>
                    <View style={styles.dashedLine} />
                </View>
            </View>

            <View style={styles.optionsContainer}>
                {[
                    { image: require('../assets/bicycle.png'), label: 'xe đạp' },
                    { image: require('../assets/library.png'), label: 'thư viện' },
                    { image: require('../assets/theatre.png'), label: 'nhà hát' },
                    { image: require('../assets/piano.png'), label: 'đàn piano' },
                ].map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            selectedOption === index && styles.selectedOptionButton,
                        ]}
                        onPress={() => handleOptionSelect(index)}
                        disabled={checked}
                    >
                        <Image source={option.image} style={styles.optionImage} />
                        <Text style={styles.optionText}>{option.label}</Text>
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
                        color={isCorrect ? "blue" : "red"} // Green for correct, red for incorrect
                        style={styles.resultIcon}
                    />
                    <Text style={isCorrect ? styles.correctText : styles.incorrectText}>
                        {isCorrect ? "Tuyệt vời!" : "Rất tiếc"}
                    </Text>
                    {!isCorrect && <Text style={styles.tryAgainText}>Thử lại lần sau nhé</Text>}
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
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
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
        fontSize: 18,
        color: 'red',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        paddingVertical: 10,
        width: '100%',
        height: 47,
        marginLeft: 5,
        marginBottom: 5,
        marginTop: -80,
    },
    audioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
        width: '100%',
        paddingLeft: 5,
        marginTop: -60,
    },
    audioIcon: {
        width: 45,
        height: 45,
        marginRight: 10,
    },
    audioTextContainer: {
        alignItems: 'center',
    },
    audioText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000000',
        width: 123,
        height: 24,
    },
    dashedLine: {
        width: 50,
        height: 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#A2A2A2',
        marginTop: 5,
        marginLeft: -70,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 10,
        alignSelf: 'center',
        marginTop: -70,
    },
    optionButton: {
        width: 150,
        height: 170,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        margin: 8,
        borderWidth: 1,
        borderColor: '#A2A2A2',
    },
    selectedOptionButton: {
        backgroundColor: '#D0EFFF',
    },
    optionImage: {
        width: 115,
        height: 115,
        resizeMode: 'contain',
    },
    optionText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000000',
        textAlign: 'center',
        width: 148,
        height: 30,
        marginTop: 15,
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
    activeCheckButton: {
        backgroundColor: '#00C3FE',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    resultOverlay: {
        position: 'absolute',
        bottom: 0,
        width: 415,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
        color: '#FFFFFF', // White text color
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Bai1;
