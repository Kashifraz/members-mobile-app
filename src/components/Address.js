import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Address = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <Text style={styles.heading}>{'(4/6)'} | Address Information </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Geographical Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => handleChange('geographical_address', text)}
          value={formData.geographical_address}
          placeholder="Enter your Geographical Address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Name of Local Jamat</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => handleChange('local_jamat', text)}
          value={formData.local_jamat}
          placeholder="Enter Name of Local Jamat"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>City</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => handleChange('city', text)}
          value={formData.city}
          placeholder="Enter your city"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Village</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => handleChange('village', text)}
          value={formData.village}
          placeholder="Enter your village"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Postal Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => handleChange('mailing_address', text)}
          value={formData.mailing_address}
          placeholder="Enter your Postal Address"
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

export default Address;
