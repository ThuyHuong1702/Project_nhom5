import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure this is installed

const Lesson3Screen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="close" size={24} color="gray" />
                <View style={styles.progressBar}>
                    <View style={styles.progress} />
                </View>
                <View style={styles.heartContainer}>
                    <Ionicons name="heart" size={24} color="red" />
                    <Text style={styles.heartText}>4</Text>
                </View>
            </View>

            <Text style={styles.title}>Đọc câu này</Text>

            <View style={styles.speechBubbleContainer}>
                <Image
                    source={require('../assets/mascot.png')} // Replace with your image
                    style={styles.dolphinImage}
                />
                <View style={styles.speechBubble}>
                    <Ionicons name="volume-high" size={20} color="#4a90e2" />
                    <Text style={styles.speechText}>Our parents don’t want us to come home late.</Text>
                </View>
            </View>

            <View style={styles.linesContainer}>
                {[...Array(4)].map((_, i) => (
                    <View key={i} style={styles.line} />
                ))}
            </View>

            <View style={styles.wordsContainer}>
                {['chúng', 'ơn', 'phòng', 'muộn', 'Bố', 'xe buýt', 'mẹ', 'muốn', 'không', 'tôi', 'chúng', 'tôi', 'về', 'nhà'].map((word, index) => (
                    <TouchableOpacity key={index} style={styles.wordButton}>
                        <Text style={styles.wordText}>{word}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('MainScreen')}>
                <Text style={styles.continueButtonText}>TIẾP TỤC</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progressBar: {
        flex: 1,
        height: 6,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 10,
        borderRadius: 3,
    },
    progress: {
        width: '50%', // Adjust progress width
        height: '100%',
        backgroundColor: '#4a90e2',
        borderRadius: 3,
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
    },
    speechBubbleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dolphinImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    speechBubble: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f8ff',
        borderRadius: 15,
        flex: 1,
    },
    speechText: {
        marginLeft: 10,
        fontSize: 16,
        flex: 1,
    },
    linesContainer: {
        marginVertical: 20,
    },
    line: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 5,
    },
    wordsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    wordButton: {
        padding: 10,
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    wordText: {
        fontSize: 14,
    },
    continueButton: {
        backgroundColor: '#d3d3d3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Lesson3Screen;