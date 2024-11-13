import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import lockIcon from '../assets/image 23.png';
import emailIcon from '../assets/Message_fill.png';

const { width, height } = Dimensions.get('window');
const scale = width / 375; // Scale based on iPhone 8 Plus screen size

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [resendCooldown, setResendCooldown] = useState(60);

    const handleGetCode = () => {
        if (!email) {
            Alert.alert("Error", "Please enter a valid email address.");
            return;
        }

        const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
        console.log(`Sending OTP ${generatedOtp} to email: ${email}`);
        Alert.alert("OTP Sent", `An OTP code was sent to ${email}`);

        setOtpSent(true);
        setResendCooldown(60);
        navigation.navigate('PasswordReset', { otp: generatedOtp, email });
    };

    useEffect(() => {
        let timer;
        if (otpSent && resendCooldown > 0) {
            timer = setInterval(() => {
                setResendCooldown((prev) => prev - 1);
            }, 1000);
        } else if (resendCooldown === 0) {
            setOtpSent(false);
        }
        return () => clearInterval(timer);
    }, [otpSent, resendCooldown]);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Image source={lockIcon} style={styles.icon} />
                <Text style={styles.description}>
                    Enter the email address to get an OTP code to reset your password
                </Text>

                <View style={styles.inputContainer}>
                    <Image source={emailIcon} style={styles.emailIcon} />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        placeholderTextColor="#aaa"
                        value={email} 
                        onChangeText={setEmail} 
                        keyboardType="email-address" 
                    />
                </View>

                <TouchableOpacity
                    style={[styles.getCodeButton, otpSent && resendCooldown > 0 && styles.disabledButton]}
                    onPress={handleGetCode}
                    disabled={otpSent && resendCooldown > 0}
                >
                    <Text style={styles.buttonText}>
                        {otpSent && resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "GET CODE"}
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: width * 0.05,
    },
    icon: {
        width: width * 0.3,
        height: width * 0.3,
        marginBottom: height * 0.03,
    },
    description: {
        fontSize: 16 * scale,
        color: '#000',
        textAlign: 'center',
        marginBottom: height * 0.05,
        paddingHorizontal: width * 0.1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#4a90e2',
        borderWidth: 1,
        borderRadius: 25,
        width: '90%',
        height: height * 0.07,
        marginBottom: height * 0.04,
        paddingLeft: width * 0.03,
    },
    emailIcon: {
        width: width * 0.06,
        height: width * 0.06,
        marginRight: width * 0.03,
    },
    input: {
        flex: 1,
        height: '100%',
        paddingLeft: width * 0.02,
        fontSize: 16 * scale,
    },
    getCodeButton: {
        backgroundColor: '#4a90e2',
        borderRadius: 25,
        paddingVertical: height * 0.02,
        alignItems: 'center',
        width: '90%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18 * scale,
        fontWeight: '500',
    },
    disabledButton: {
        backgroundColor: '#b0bec5',
    },
});

export default ForgotPasswordScreen;
