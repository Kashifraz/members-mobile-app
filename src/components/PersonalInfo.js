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

const PersonalInfo = ({ formData, handleChange, gender, genderList, showGender, setShowGender, setGender, setGenderList, dob, showDatepickerDoB, showDoB, onChangeDob, membershipDate, showDatepickerMembership, showMembership, onChangeMDate }) => {
  return (
    <>
          <Text style={styles.heading}>{'(2/6)'} | Personal Information</Text>
        
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleChange('name', text)}
              value={formData.name}
              placeholder="Enter your name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Father's Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleChange('fatherName', text)}
              value={formData.fatherName}
              placeholder="Enter your father's name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Gender:</Text>
            <DropDownPicker
              open={showGender}
              value={gender}
              items={genderList}
              setOpen={setShowGender}
              setValue={setGender}
              setItems={setGenderList}
              listMode="SCROLLVIEW"
              placeholder="Select Gender"
              style={{borderColor: 'lightgray'}}
              dropDownContainerStyle={styles.dropDownContainer}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>CNIC:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleChange('cnic', text)}
              value={formData.cnic}
              placeholder="Enter your CNIC"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>DOB</Text>
            <TouchableOpacity onPress={showDatepickerDoB} style={styles.pickerInput}>
              <Text style={{color: 'black'}}>{dob.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDoB && (
              <DateTimePicker
                value={dob}
                mode="date"
                display="default"
                onChange={onChangeDob}
              />
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Membership Date:</Text>
            <TouchableOpacity
              onPress={showDatepickerMembership}
              style={styles.pickerInput}>
              <Text style={{color: 'black'}}>
                {membershipDate.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
            {showMembership && (
              <DateTimePicker
                value={membershipDate}
                mode="date"
                display="default"
                onChange={onChangeMDate}
              />
            )}
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
  pickerInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingVertical: 12,
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

export default PersonalInfo;