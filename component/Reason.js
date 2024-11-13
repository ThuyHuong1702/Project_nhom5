import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import mascotImage from '../assets/mascot.png'; 
import bubbleImage from '../assets/Group 8.png'; 
import backImage from '../assets/Arrow left.png'; 

import entertainmentIcon from '../assets/entertainment.png';
import careerIcon from '../assets/career.png';
import studyIcon from '../assets/study.png';
import connectIcon from '../assets/connect.png';
import otherIcon from '../assets/other.png';

const { width, height } = Dimensions.get('window');

const ReasonScreen = ({ navigation }) => {
    const [selectedReasons, setSelectedReasons] = useState([]);

    const reasons = [
        { label: 'Giải trí', icon: entertainmentIcon },
        { label: 'Sự nghiệp', icon: careerIcon },
        { label: 'Học tập', icon: studyIcon },
        { label: 'Kết nối với mọi người', icon: connectIcon },
        { label: 'Khác', icon: otherIcon },
    ];

    const handleReasonSelect = (reason) => {
        setSelectedReasons((prevSelected) =>
            prevSelected.includes(reason.label)
                ? prevSelected.filter((r) => r !== reason.label)
                : [...prevSelected, reason.label]
        );
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
                    <Text style={styles.bubbleText}>Tại sao bạn học{"\n"}Tiếng Anh?</Text>
                </ImageBackground>
            </View>

            {reasons.map((reason) => (
                <TouchableOpacity
                    key={reason.label}
                    style={[
                        styles.optionButton,
                        selectedReasons.includes(reason.label) ? styles.selectedOption : styles.unselectedOption,
                    ]}
                    onPress={() => handleReasonSelect(reason)}
                >
                    <Image source={reason.icon} style={styles.reasonIcon} />
                    <Text style={[styles.optionText, selectedReasons.includes(reason.label) && styles.boldText]}>
                        {reason.label}
                    </Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                style={[styles.nextButton, selectedReasons.length > 0 ? styles.enabledButton : styles.disabledButton]}
                onPress={() => selectedReasons.length > 0 && navigation.navigate('GoalScreen')}
                disabled={selectedReasons.length === 0}
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
        paddingVertical: height * 0.04,
    },
    header: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.04,
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
        width: '75%',
        height: '100%',
        backgroundColor: '#00C3FF',
        borderRadius: 10,
    },
    mascotSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    mascotImage: {
        width: width * 0.25,
        height: width * 0.25,
        resizeMode: 'contain',
    },
    bubble: {
        width: width * 0.6,
        height: height * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width * 0.03,
    },
    bubbleText: {
        fontSize: width * 0.045,
        color: '#000000',
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: height * 0.04,
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
        marginLeft: width * 0.02,
    },
    reasonIcon: {
        width: width * 0.06,
        height: width * 0.06,
        marginRight: width * 0.03,
    },
    nextButton: {
        paddingVertical: height * 0.02,
        width: '90%',
        height: height * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: height * 0.02,
        backgroundColor: '#98B5BF',
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

export default ReasonScreen;
