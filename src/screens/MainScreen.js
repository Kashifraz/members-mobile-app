import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import FormAScreen from './FormAScreen';
import FormBScreen from './FormBScreen';
import WelcomeScreen from './WeclomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (route.name === 'Form A') {
            iconName = focused ? 'form-textbox' : 'form-textbox';
          } else if (route.name === 'Form B') {
            iconName = focused ? 'form-select' : 'form-select';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'darkblue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Form A" component={FormAScreen} />
      <Tab.Screen name="Form B" component={FormBScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          title: 'Home',
          headerRight: () => (
            <Button
              // onPress={() => navigation.navigate('Profile')}
              title="Profile"
              color="#000"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}


export default MainScreen;