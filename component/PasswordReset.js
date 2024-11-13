import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions, Platform } from 'react-native';
import emailIcon from '../assets/image 24.png';

const { width, height } = Dimensions.get('window');
const scale = width / 375;

const PasswordResetScreen = ({ route, navigation }) => {
    const { email, otp: initialOtp } = route.params;
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const [expectedOtp, setExpectedOtp] = useState(initialOtp);
    const [resendCounter, setResendCounter] = useState(60);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        let intervalId;
        if (!isResendEnabled) {
            intervalId = setInterval(() => {
                setResendCounter((prevCounter) => {
                    if (prevCounter <= 1) {
                        clearInterval(intervalId);
                        setIsResendEnabled(true);
                        return 60;
                    }
                    return prevCounter - 1;
                });
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isResendEnabled]);

    const handleConfirm = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp === expectedOtp) {
            Alert.alert("Thành công", "Xác minh mã OTP thành công.");
            navigation.navigate('NewPassword', { email });
        } else {
            Alert.alert("Lỗi", "Mã OTP không hợp lệ. Vui lòng thử lại.");
            clearOtpInputs();
        }
    };

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;

        if (text) {
            if (index < otp.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        } else {
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
                newOtp[index - 1] = '';
            }
        }
        setOtp(newOtp);
    };

    const handleOtpKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            const newOtp = [...otp];
            newOtp[index - 1] = '';
            setOtp(newOtp);
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleResendOtp = () => {
        if (isResendEnabled) {
            const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
            console.log(`Gửi lại mã OTP ${newOtp} đến email: ${email}`);
            setExpectedOtp(newOtp);
            clearOtpInputs();
            setIsResendEnabled(false);
            setResendCounter(60);
        }
    };

    const clearOtpInputs = () => {
        setOtp(new Array(4).fill(''));
        inputRefs.current[0]?.focus();
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Image source={emailIcon} style={styles.icon} />
                <Text style={styles.description}>
                    Chúng tôi đã gửi mã OTP đến email của bạn ({email}). Kiểm tra email và nhập mã bên dưới.
                </Text>

                <View style={styles.otpContainer}>
                    {otp.map((value, index) => (
                        <TextInput
                            key={index}
                            ref={(input) => { inputRefs.current[index] = input; }}
                            style={styles.otpInput}
                            keyboardType="numeric"
                            maxLength={1}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            onKeyPress={(e) => handleOtpKeyPress(e, index)}
                            value={otp[index]}
                        />
                    ))}
                </View>

                <Text style={styles.resendText}>Không nhận được mã?</Text>
                <TouchableOpacity disabled={!isResendEnabled} onPress={handleResendOtp}>
                    <Text style={[styles.resendLink, !isResendEnabled && { color: '#aaa' }]}>
                        {isResendEnabled ? "Gửi lại mã" : `Có thể gửi lại mã sau ${resendCounter}s`}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.buttonText}>XÁC NHẬN</Text>
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
        marginBottom: height * 0.02,
    },
    description: {
        fontSize: 16 * scale,
        color: '#000',
        textAlign: 'center',
        marginBottom: height * 0.05,
        paddingHorizontal: width * 0.1,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: height * 0.02,
    },
    otpInput: {
        height: height * 0.07,
        width: width * 0.15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 24 * scale,
        backgroundColor: '#f5f5f5',
    },
    resendText: {
        fontSize: 14 * scale,
        color: '#666',
        marginTop: height * 0.02,
    },
    resendLink: {
        fontSize: 14 * scale,
        color: '#4a90e2',
        marginBottom: height * 0.03,
    },
    confirmButton: {
        backgroundColor: '#4a90e2',
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.1,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18 * scale,
    },
});

export default PasswordResetScreen;
