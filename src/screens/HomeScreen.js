import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://raw.githubusercontent.com/sneiko/Android-BackgroundChart/master/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202019-03-08%20%D0%B2%2019.32.03.png',
        }} // Use the local image
        style={styles.background}>
        <View style={styles.header}>
          <Image source={require('../assets/logo.png')} style={{width: 160, height: 160, marginBottom:10}} />
          <Text style={styles.title}>Members App</Text>
          <Text style={styles.tagline}>
            Members records, locations, stats and much more!
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Register Member Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop:20}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    position: 'absolute',
    top: '12%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 45,
  },
  footer: {
    position: 'absolute',
    bottom: '15%',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
