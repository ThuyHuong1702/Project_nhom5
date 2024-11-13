import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, Alert, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BackIcon from '../assets/image 25.png';
import LockIcon from '../assets/Group.png';

const { width, height } = Dimensions.get('window');
const scale = width / 375;

const NewPasswordScreen = ({ route, navigation }) => {
    const email = route?.params?.email; // Ensure email is safely accessed
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = async () => {
        if (!email) {
            Alert.alert("Lỗi", "Không tìm thấy địa chỉ email. Vui lòng thử lại.");
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert("Lỗi", "Mật khẩu không khớp.");
            return;
        }

        try {
            const registeredUsers = JSON.parse(await AsyncStorage.getItem('registeredUsers')) || [];
            const userIndex = registeredUsers.findIndex(user => user.email === email);

            if (userIndex > -1) {
                registeredUsers[userIndex].password = newPassword;
                await AsyncStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
                Alert.alert("Thành công", "Mật khẩu đã được cập nhật.");
                navigation.navigate('Login');
            } else {
                Alert.alert("Lỗi", "Không tìm thấy người dùng với email này.");
            }
        } catch (error) {
            Alert.alert("Lỗi", "Không thể cập nhật mật khẩu.");
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Image source={BackIcon} style={styles.icon} />
                <Text style={styles.description}>
                    Lưu mật khẩu mới ở nơi an toàn. Nếu quên, bạn sẽ cần đặt lại mật khẩu lần nữa.
                </Text>
                
                <View style={styles.inputContainer}>
                    <Image source={LockIcon} style={styles.inputIcon} />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Mật khẩu mới" 
                        value={newPassword} 
                        onChangeText={setNewPassword} 
                        secureTextEntry 
                        placeholderTextColor="#999" 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image source={LockIcon} style={styles.inputIcon} />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Xác nhận mật khẩu" 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword} 
                        secureTextEntry 
                        placeholderTextColor="#999" 
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.buttonText}>LƯU</Text>
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
        fontSize: 14 * scale,
        color: '#333',
        textAlign: 'center',
        marginBottom: height * 0.05,
        paddingHorizontal: width * 0.1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#4a90e2',
        borderRadius: 25,
        width: '90%',
        height: height * 0.07,
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.03,
    },
    inputIcon: {
        width: width * 0.06,
        height: width * 0.06,
        tintColor: '#4a90e2',
        marginRight: width * 0.02,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16 * scale,
    },
    saveButton: {
        backgroundColor: '#4a90e2',
        borderRadius: 25,
        paddingVertical: height * 0.02,
        alignItems: 'center',
        width: '90%',
        marginTop: height * 0.03,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18 * scale,
        fontWeight: 'bold',
    },
});

export default NewPasswordScreen;
