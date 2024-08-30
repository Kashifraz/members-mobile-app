import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormAScreen = () => {
  const [token, setToken] = useState(null);

  const getToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      } else {
        console.log('No token found');
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
      Alert.alert('Error', 'Failed to retrieve token');
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color:"black"}}>Form A Screen</Text>
      <Text style={{color:"black"}}>Under Development</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormAScreen;