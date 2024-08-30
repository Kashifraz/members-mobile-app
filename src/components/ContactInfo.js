import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ContactInfo = ({ formData, handleChange }) => {
  return (
    <>
    <Text style={styles.heading}>{'(6/6)'} | Contact Information</Text>
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Home Phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => handleChange('home_phone', text)}
        value={formData.home_phone}
        placeholder="Enter your Home Phone"
      />
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Office Phone </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => handleChange('office_phone', text)}
        value={formData.office_phone}
        placeholder="Enter your Office Phone"
      />
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Mobile</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => handleChange('mobile', text)}
        value={formData.mobile}
        placeholder="Enter your mobile"
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  inputText: {
    color: 'black',
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
    color: 'black',
  },
});

export default ContactInfo;