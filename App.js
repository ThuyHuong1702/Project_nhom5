import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// Import your screens
import HomeScreen from './component/HomeScreen';
import PlayScreen from './component/PlayScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let notificationBadge = null;

            // Determine icon name based on screen name
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Video') {
              iconName = 'play-circle';
            } else if (route.name === 'Q') {
              // Return a view with "Q" and handle navigation to Home
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>Q</Text>
                  </View>
                </TouchableOpacity>
              );
            } else if (route.name === 'Rank') {
              iconName = 'trophy';
            } else if (route.name === 'Notification') {
              iconName = 'bell';
              // Show notification badge
              notificationBadge = (
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationText}>10</Text>
                </View>
              );
            }

            // Adjust color based on focus state
            color = focused ? '#00B7FF' : 'gray';

            // Return icon with the chosen color
            return (
              <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name={iconName} size={size} color={color} />
                {notificationBadge}
              </View>
            );
          },
          tabBarActiveTintColor: '#00B7FF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,  // Hide the header on all screens
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Video" component={PlayScreen} />
        <Tab.Screen name="Q" component={HomeScreen} options={{ tabBarLabel: '' }} />
        <Tab.Screen name="Rank" component={PlayScreen} />
        <Tab.Screen name="Notification" component={HomeScreen} />
      </Tab.Navigator>
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
  notificationBadge: {
    position: 'absolute',
    right: -2,
    top: 0,
    backgroundColor: '#FF3D00',
    borderRadius: 100,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: 'bold',
  }
});
