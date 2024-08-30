import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MainScreen from "./src/screens/MainScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import Toast from 'react-native-toast-message';
import LoginForm from "./src/screens/LoginScreen";
import { Button } from 'react-native';



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginForm} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} 
        options={{ 
          headerShown: false,
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Profile')}
              title="Profile"
              color="#000"
            />
          ),
         }} />
      </Stack.Navigator>
    </NavigationContainer>
    <Toast position='bottom' swipeable/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
