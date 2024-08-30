import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const OccupationEducation = ({ formData, handleChange }) => {
  return (
    <>
    <Text style={styles.heading}>{'(5/6)'} | Occupation / Education</Text>
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Occupation</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => handleChange('occupation', text)}
        value={formData.occupation}
        placeholder="Enter your Occupation"
      />
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>Education</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => handleChange('education', text)}
        value={formData.education}
        placeholder="Enter your Education"
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({

  buttonContainer: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
  },

  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    color: 'black',
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
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
  date: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dateText: {
    fontSize: 16,
    color: 'black',
  },
  dropDownContainer: {
    backgroundColor: '#fafafa',
    borderColor: '#ddd',
  },
});

export default OccupationEducation;