import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';

const RegistrationInfo = ({ formData, handleChange, gender, genderList, showGender, setShowGender, setGender, setGenderList, dob, showDatepickerDoB, showDoB, onChangeDob, membershipDate, showDatepickerMembership, showMembership, onChangeMDate }) => {
  return (
    <>
          <Text style={styles.heading}>{'(1/6)'} | Profile Information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleChange('email', text)}
              value={formData.email}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Enter your email"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleChange('password', text)}
              value={formData.password}
              secureTextEntry={true}
              placeholder="Enter your password"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Confirm Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleChange('confirmPassword', text)}
              value={formData.confirmPassword}
              secureTextEntry={true}
              placeholder="Confirm your password"
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

export default RegistrationInfo;