import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import ToastManager from 'toastify-react-native'
import axios from 'axios'

const Register = ({ navigation }) => {
  const [user, setUser] = useState({
    name: 'mobil',
    lastName: 'mobil',
    email: 'mobil@gmail.com',
    location: 'mobil',
    password: 'secret123',
  })

  const handleSubmit = async () => {
    try {
      console.log(user)
      const response = await axios.post(
        'YOUR_IP_ADDRESS:5100/api/v1/auth/register',
        user
      )
      ToastManager.success('Logged in!')

      navigation.navigate('Login')
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Hesabını olustur</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder='First name'
        placeholderTextColor='#A9A9A9'
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
      />

      {/* Last Name Input */}
      <TextInput
        style={styles.input}
        placeholder='Last name'
        placeholderTextColor='#A9A9A9'
        value={user.lastName}
        onChangeText={(text) => setUser({ ...user, lastName: text })}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='#A9A9A9'
        keyboardType='email-address'
        autoCapitalize='none'
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
      />

      {/* Location Input */}
      <TextInput
        style={styles.input}
        placeholder='Location'
        placeholderTextColor='#A9A9A9'
        value={user.location}
        onChangeText={(text) => setUser({ ...user, location: text })}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#A9A9A9'
        secureTextEntry
        value={user.password}
        onChangeText={(text) => setUser({ ...user, password: text })}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Kaydol</Text>
      </TouchableOpacity>

      <Text style={styles.registerLink}>
        Zaten üye misin?{' '}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('Login')}
        >
          Giris Yap
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
    backgroundColor: '#333', // Dark background color
    padding: 16,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#FFFFFF', // White text color
  },
  input: {
    height: 50,
    borderColor: '#FFFFFF', // White border color
    backgroundColor: '#3f3f3f',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 16,
    width: '100%',
    fontSize: 20,
    color: '#FFFFFF', // White text color
  },
  submitButton: {
    backgroundColor: '#36a4c0', // Blue accent color
    padding: 15,
    marginTop: 40,
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
    fontSize: 15,
  },
  linkText: {
    color: '#36a4c0', // Blue accent color
    fontWeight: 'bold',
  },
})

export default Register
