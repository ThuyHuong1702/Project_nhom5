import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import mascotImage from '../assets/mascot.png';
import emailIcon from '../assets/User_alt_fill.png';
import passwordIcon from '../assets/Group.png';
import checkedIcon from '../assets/Check_fill.png';
import uncheckedIcon from '../assets/Check_ring.png';

const { width, height } = Dimensions.get('window');

// Sample users for initial storage
const sampleUsers = [
    { email: 'dothuyhuong90@gmail.com', password: '123' },
    { email: 'user2@example.com', password: 'mypassword' },
    { email: 'user3@example.com', password: 'securepass' }
];

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (userData) {
                const parsedData = JSON.parse(userData);
                setUsername(parsedData.username);
                setPassword(parsedData.password);
                setRememberMe(parsedData.rememberMe);
            }
            // Store sample users in AsyncStorage if not already stored
            const existingUsers = await AsyncStorage.getItem('registeredUsers');
            if (!existingUsers) {
                await AsyncStorage.setItem('registeredUsers', JSON.stringify(sampleUsers));
            }
        };
        fetchUserData();
    }, []);

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert("Error", "Please enter both username and password.");
            return;
        }

        const registeredUsers = JSON.parse(await AsyncStorage.getItem('registeredUsers')) || [];
        const userExists = registeredUsers.some(user => user.email === username && user.password === password);

        if (userExists) {
            Alert.alert("Success", "Login successful!");
            if (rememberMe) {
                await AsyncStorage.setItem('userData', JSON.stringify({ username, password, rememberMe }));
            } else {
                await AsyncStorage.removeItem('userData');
            }
            navigation.navigate('TabNavigator');
        } else {
            Alert.alert("Error", "Invalid username or password.");
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Image source={mascotImage} style={styles.mascotImage} />
                <Text style={styles.title}>WELCOME!</Text>

                <View style={styles.inputContainer}>
                    <Image source={emailIcon} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Username or email"
                        placeholderTextColor="#B0B0B0"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image source={passwordIcon} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#B0B0B0"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisibility(!isPasswordVisible)}>
                        <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="#B0B0B0" style={styles.eyeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.rememberMeContainer}>
                    <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                        <Image source={rememberMe ? checkedIcon : uncheckedIcon} style={styles.checkboxIcon} />
                    </TouchableOpacity>
                    <Text style={styles.rememberMeText}>Remember me</Text>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotPasswordText}>Forgot password</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '5%',
    },
    mascotImage: {
        width: '40%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginBottom: '5%',
    },
    title: {
        fontSize: width * 0.065,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginBottom: '5%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#18B3F6',
        borderWidth: 2,
        borderRadius: 30,
        marginBottom: '4%',
        width: '90%',
        height: height * 0.08,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: '5%',
    },
    input: {
        flex: 1,
        height: '100%',
        paddingLeft: '3%',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        fontSize: width * 0.04,
    },
    icon: {
        width: '8%',
        height: undefined,
        aspectRatio: 1,
    },
    eyeIcon: {
        marginLeft: '3%',
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: '5%',
    },
    checkboxIcon: {
        width: width * 0.06,
        height: undefined,
        aspectRatio: 1,
        marginRight: '3%',
    },
    rememberMeText: {
        fontSize: width * 0.04,
        color: '#4a90e2',
        marginRight: 'auto',
    },
    forgotPasswordText: {
        fontSize: width * 0.04,
        color: '#4a90e2',
    },
    loginButton: {
        backgroundColor: '#4a90e2',
        paddingVertical: '4%',
        borderRadius: 30,
        width: '90%',
        alignItems: 'center',
        marginBottom: '5%',
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.05,
        fontWeight: '500',
    },
});

export default LoginScreen;
