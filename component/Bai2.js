import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");

const Bai2 = ({ navigation, route }) => {
    // Get the current lives from the previous screen, default to 4 if not provided
    const initialLives = route.params?.lives ?? 4;
    const [selectedOption, setSelectedOption] = useState(null);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [lives, setLives] = useState(initialLives);

    const handleOptionSelect = (index) => {
        if (!checked) {  // Prevent selection if already checked
            setSelectedOption(index);
            setChecked(false); // Reset check status when selecting a new option
        }
    };

    const handleCheckPress = () => {
        const correct = selectedOption === 1; // Assuming "pretty" at index 1 is the correct answer
        setIsCorrect(correct);
        setChecked(true);

        // If the answer is incorrect, reduce the number of lives by 1
        if (!correct) {
            setLives((prevLives) => Math.max(prevLives - 1, 0));
        }
    };

    const handleContinuePress = () => {
        // Always navigate to the next screen, regardless of whether the answer is correct or incorrect
        navigation.navigate('Bai3', { lives });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="close" size={34} color="#A9A9A9" />
                <View style={styles.progressBar}>
                    <View style={styles.progress} />
                </View>
                <View style={styles.heartContainer}>
                    <Ionicons name="heart" size={24} color="red" />
                    <Text style={styles.heartText}>{lives}</Text>
                </View>
            </View>

            <Text style={styles.title}>Chọn bản dịch đúng</Text>

            <View style={styles.translationContainer}>
                <Image source={require('../assets/mascot.png')} style={styles.dolphinIcon} />
                <View style={styles.speechBubble}>
                    <Text style={styles.speechText}>xinh đẹp</Text>
                </View>
            </View>

            <View style={styles.optionsContainer}>
                {['zoo', 'pretty', 'look for'].map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[ 
                            styles.optionButton,
                            selectedOption === index && styles.selectedOptionButton,
                        ]}
                        onPress={() => handleOptionSelect(index)}
                        disabled={checked} // Disable selection after checking
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
    translationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dolphinIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    speechBubble: {
        backgroundColor: '#E0F7FA',
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#00C3FE',
    },
    speechText: {
        fontSize: 16,
        color: '#333',
    },
    optionsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: -20, // Moves optionsContainer slightly up
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

export default Bai2;
