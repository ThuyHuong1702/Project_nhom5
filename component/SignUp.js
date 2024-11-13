import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function SignUpScreen({ navigation }) {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (name && age && email && password) {
      try {
        // Retrieve existing users or initialize as an empty array
        const usersData = await AsyncStorage.getItem('registeredUsers');
        const registeredUsers = usersData ? JSON.parse(usersData) : [];

        // Check if the email is already registered
        const emailExists = registeredUsers.some((user) => user.email === email);
        if (emailExists) {
          Alert.alert('Lỗi', 'Email đã được đăng ký!');
          return;
        }

        // Add the new user to the list and save
        const newUser = { name, age, email, password };
        registeredUsers.push(newUser);
        await AsyncStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        Alert.alert('Đăng ký thành công', 'Bạn có thể đăng nhập ngay bây giờ!');
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Lỗi', 'Có lỗi xảy ra, vui lòng thử lại!');
      }
    } else {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin!');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image source={require('../assets/mascot.png')} style={styles.logo} />

        <View style={styles.inputContainer}>
          <Image source={require('../assets/Name.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#b0b0b0"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../assets/Date_range_fill.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="#b0b0b0"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../assets/email.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#b0b0b0"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../assets/pass.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#b0b0b0"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setPasswordVisibility(!isPasswordVisible)}>
            <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="#b0b0b0" style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require('../assets/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '7%',
    backgroundColor: '#fff',
  },
  logo: {
    width: '35%',
    height: undefined,
    aspectRatio: 1.1,
    marginBottom: '5%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 30,
    paddingHorizontal: '4%',
    marginVertical: '2.5%',
    width: '100%',
    height: height * 0.08,
  },
  icon: {
    width: '8%',
    height: undefined,
    aspectRatio: 1,
    marginRight: '4%',
  },
  input: {
    flex: 1,
    paddingLeft: '2%',
    color: '#000',
    fontSize: width * 0.042,
    lineHeight: height * 0.03,
  },
  eyeIcon: {
    marginLeft: '3%',
  },
  signUpButton: {
    backgroundColor: '#007aff',
    borderRadius: 30,
    paddingVertical: '3%',
    width: '100%',
    alignItems: 'center',
    marginVertical: '2.5%',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: width * 0.06,
  },
  orText: {
    fontSize: width * 0.053,
    color: '#18BDF6',
    marginVertical: '2.5%',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: '3%',
  },
  iconContainer: {
    width: '25%',
    height: height * 0.08,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  socialIcon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
});
