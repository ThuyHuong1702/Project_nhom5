import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import MainScreen from './component/Main';
import LanguageScreen from './component/Language';
import LevelScreen from './component/Level';
import ReasonScreen from './component/Reason';
import GoalScreen from './component/Goal';
import ProfileScreen from './component/Profile';
import LoginScreen from './component/Login';
import ForgotPasswordScreen from './component/ForgotPassword';
import PasswordResetScreen from './component/PasswordReset';
import NewPasswordScreen from './component/NewPassword';
import CustomHomeScreen from './component/CustomHome';
import Lesson1Screen from './component/Lesson1';
import Lesson2Screen from './component/Lesson2';
import Lesson3Screen from './component/Lesson3';
import HosoScreen from './component/Hoso';
import NotificationScreen from './component/Notification';
import SettingScreen from './component/Setting';
import PrivateSettingsScreen from './component/PrivateSettings';
import ProfilesScreen from './component/Profiles';
import NotificationsScreen from './component/Notifications';
import CoursesScreen from './component/Courses';
import DolphinDash from './component/DolphinDash';
import Network from './component/Network';
import Private from './component/Private';
import SubscriptionScreen from './component/Subscription';
import Bai1 from './component/Bai1';
import Bai2 from './component/Bai2';
import Bai3 from './component/Bai3';
import Bai4 from './component/Bai4';
import Screen1 from './component/1';
import Screen2 from './component/2';
import Screen3 from './component/3';
import Screen4 from './component/4';
import Screen5 from './component/5';
import Screen6 from './component/6';
import Screen7 from './component/7';
import Screen8 from './component/8';
import Screen9 from './component/9';
import Screen10 from './component/10';
import Screen11 from './component/11';
import Screen12 from './component/12';
import Screen13 from './component/13';
import Screen14 from './component/14';
import Screen15 from './component/15';
import Screen16 from './component/16';
import Screen17 from './component/17';
import SignUp from './component/SignUp';
import PlayScreen from './component/PlayScreen';
import LearningScreen from './component/LearningScreen';
import PaymentScreen from './component/PaymentScreen';
import FireScreen from './component/FireScreen';
import RankingScreen from './component/RankingScreen';
import TournamentScreen from './component/TournamentScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let notificationBadge = null;

                    if (route.name === 'CustomHome') {
                        iconName = 'home';
                    } else if (route.name === 'Video') {
                        iconName = 'play-circle';
                    } else if (route.name === 'Q') {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('CustomHome')}>
                                <View style={styles.circle}>
                                    <Text style={styles.circleText}>Q</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    } else if (route.name === 'Rank' || route.name === 'Tournament' || route.name === 'Ranking') {
                        iconName = 'trophy';
                    } else if (route.name === 'Notification') {
                        iconName = 'bell';
                        notificationBadge = (
                            <View style={styles.notificationBadge}>
                                <Text style={styles.notificationText}>10</Text>
                            </View>
                        );
                    }

                    color = focused ? '#00B7FF' : 'gray';

                    return (
                        <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name={iconName} size={size} color={color} />
                            {notificationBadge}
                        </View>
                    );
                },
                tabBarActiveTintColor: '#00B7FF',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
        <Tab.Screen name="CustomHome" component={CustomHomeScreen} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Video" component={PlayScreen} options={{ tabBarLabel: 'Video' }} />
            <Tab.Screen name="Q" component={CustomHomeScreen} options={{ tabBarLabel: '' }} />
            <Tab.Screen 
              name="Rank" 
              component={RankingScreen} 
              options={({ navigation }) => ({
                tabBarStyle: { display: 'none' },  
                headerShown: false, 
              })} 
            />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            {/* LearningScreen - Hide Tab Bar */}
            <Tab.Screen 
              name="LearningScreen" 
              component={LearningScreen} 
              options={({ navigation }) => ({
                tabBarButton: () => null,  
                tabBarStyle: { display: 'none' },  
                headerShown: true,  
                headerTitle: '',  
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('Video')} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#00B7FF" />
                  </TouchableOpacity>
                ),
              })} 
            />
            {/* FireScreen - Hide Tab Bar */}
            <Tab.Screen 
              name="FireScreen" 
              component={FireScreen} 
              options={({ navigation }) => ({
                tabBarButton: () => null,  
                tabBarStyle: { display: 'none' },  
                headerShown: false, 
              })} 
            />
            <Tab.Screen
              name="Tournament"
              component={TournamentScreen}
              options={({ navigation }) => ({
                tabBarButton: () => null, 
                tabBarStyle: { display: 'none' },  
                headerShown: false,
              })} 
            />
            <Tab.Screen
              name="Ranking"
              component={RankingScreen}
              options={({ navigation }) => ({
                tabBarButton: () => null, 
                tabBarStyle: { display: 'none' },  
                headerShown: false,  
              })}  
            />
            <Tab.Screen
              name="Payment"
              component={PaymentScreen}
              options={({ navigation }) => ({
                tabBarButton: () => null,  
                tabBarStyle: { display: 'none' },  
                headerShown: true,  
                headerTitle: '',  
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('LearningScreen')} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#00B7FF" />
                  </TouchableOpacity>
                ), 
              })}  
            />
        </Tab.Navigator>
    );
}

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <View style={styles.splashContainer}>
                <Image 
                    source={require('./assets/logoapp.jpg')} 
                    style={styles.splashImage} 
                    resizeMode="contain" 
                />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LevelScreen" component={LevelScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ReasonScreen" component={ReasonScreen} options={{ headerShown: false }} />
                <Stack.Screen name="GoalScreen" component={GoalScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PasswordReset" component={PasswordResetScreen} options={{ headerShown: false }} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PrivateSettings" component={PrivateSettingsScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Profiles" component={ProfilesScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Courses" component={CoursesScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="DolphinDash" component={DolphinDash} options={{ headerShown: false }}/>
                <Stack.Screen name="Network" component={Network} options={{ headerShown: false }}/>
                <Stack.Screen name="Private" component={Private} options={{ headerShown: false }}/>
                <Stack.Screen name="Subscription" component={SubscriptionScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Bai1" component={Bai1} options={{ headerShown: false }}/>
                <Stack.Screen name="Bai2" component={Bai2} options={{ headerShown: false }}/>
                <Stack.Screen name="Bai3" component={Bai3} options={{ headerShown: false }}/>
                <Stack.Screen name="Bai4" component={Bai4} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen4" component={Screen4} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen5" component={Screen5} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen6" component={Screen6} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen7" component={Screen7} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen8" component={Screen8} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen9" component={Screen9} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen10" component={Screen10} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen11" component={Screen11} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen12" component={Screen12} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen13" component={Screen13} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen14" component={Screen14} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen15" component={Screen15} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen16" component={Screen16} options={{ headerShown: false }}/>
                <Stack.Screen name="Screen17" component={Screen17} options={{ headerShown: false }}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>

                {/* Điều hướng vào TabNavigator từ LoginScreen */}
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Lesson1Screen" component={Lesson1Screen} options={{ headerShown: false }} />
                <Stack.Screen name="Lesson2Screen" component={Lesson2Screen} options={{ headerShown: false }} />
                <Stack.Screen name="Lesson3Screen" component={Lesson3Screen} options={{ headerShown: false }} />
                <Stack.Screen name="HosoScreen" component={HosoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
            <StatusBar style="light" hidden />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    circle: {
        width: 65,
        height: 65,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#00B7FF',
        elevation: 2,
        position: 'relative',
        top: -15,
    },
    circleText: {
        fontSize: 24,
        color: '#00B7FF',
        fontWeight: 'bold',
    },
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#31ADE8',
    },
    splashText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    notificationBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        top: -4,
        right: -4,
        borderRadius: 10,
        paddingHorizontal: 4,
        paddingVertical: 1,
    },
    notificationText: {
        color: '#fff',
        fontSize: 10,
    },
    splashImage: {
        width: 300,  
        height: 300, 
      },
});
