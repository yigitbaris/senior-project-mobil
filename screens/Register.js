import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Toast } from 'toastify-react-native'

const Register = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    location: '',
    password: '',
  })

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    // Handle form submission logic using formData object
    console.log('Form submitted with:', formData)
    Toast.success('Successfully registered')
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Create your account</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder='First name'
        placeholderTextColor='#A9A9A9'
        onChangeText={(text) => handleChange('name', text)}
        value={formData.name}
      />

      {/* Last Name Input */}
      <TextInput
        style={styles.input}
        placeholder='Last name'
        placeholderTextColor='#A9A9A9'
        onChangeText={(text) => handleChange('lastName', text)}
        value={formData.lastName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='#A9A9A9'
        keyboardType='email-address'
        autoCapitalize='none'
        onChangeText={(text) => handleChange('email', text)}
        value={formData.email}
      />

      {/* Location Input */}
      <TextInput
        style={styles.input}
        placeholder='Location'
        placeholderTextColor='#A9A9A9'
        onChangeText={(text) => handleChange('location', text)}
        value={formData.location}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#A9A9A9'
        secureTextEntry
        onChangeText={(text) => handleChange('password', text)}
        value={formData.password}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.registerLink}>
        Already have an account?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Login')}
        >
          Log in
        </Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E', // Dark background color
    padding: 16,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', // White text color
  },
  input: {
    height: 40,
    borderColor: '#FFFFFF', // White border color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    width: '100%',
    fontSize: 16,
    color: '#FFFFFF', // White text color
  },
  submitButton: {
    backgroundColor: '#5DA8DC', // Blue accent color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontWeight: 'bold',
    fontSize: 18,
  },
  registerLink: {
    marginTop: 16,
    textAlign: 'center',
    color: '#FFFFFF', // White text color
  },
  linkText: {
    color: '#5DA8DC', // Blue accent color
    fontWeight: 'bold',
  },
})

export default Register
