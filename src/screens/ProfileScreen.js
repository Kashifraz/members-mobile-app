import React, {useState} from 'react';
import { View, Text,  TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon6 from 'react-native-vector-icons/FontAwesome6';

const ProfileScreen = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    current_password:"",
    new_password:"",
    confirm_password:"",
  })

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputWrapper}>
            <Icon6 name="user" size={24} color="black" style={styles.icon} />
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#888"
              value={formData.name}
              onChangeText={text => handleChange('name', text)}
              style={styles.input}
              autoCapitalize="none"
              keyboardType="default"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Icon name="email" size={24} color="black" style={styles.icon} />
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#888"
              value={formData.email}
              onChangeText={text => handleChange('email', text)}
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={24} color="black" style={styles.icon} />
            <TextInput
              placeholder="Enter your current password"
              placeholderTextColor="#888"
              value={formData.current_password}
              onChangeText={text => handleChange('current_password', text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={24} color="black" style={styles.icon} />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#888"
              value={formData.new_password}
              onChangeText={text => handleChange('new_password', text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={24} color="black" style={styles.icon} />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#888"
              value={formData.confirm_password}
              onChangeText={text => handleChange('confirm_password', text)}
              style={styles.input}
              secureTextEntry
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1, 
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:30,
    padding: 16,
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;