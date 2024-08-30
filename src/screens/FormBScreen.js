import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormBScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:"black"}}>Form B Screen</Text>
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

export default FormBScreen;