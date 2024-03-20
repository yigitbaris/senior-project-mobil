import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Toast } from 'toastify-react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('baris@gmail.com')
  const [password, setPassword] = useState('secret123')
  const navigation = useNavigation()

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://172.31.224.1:5100/api/v1/auth/login',
        {
          email: email,
          password: password,
        }
      )

      navigation.navigate('DashboardFlow', { screen: 'AddJob' })
    } catch (error) {
      // Handle login error, display toast message, etc.
      console.error('Login error:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login Screen</Text>

      <View style={styles.form}>
        <Text style={styles.formTitle}></Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => console.log('Explore button pressed')}
        >
          <Text style={styles.buttonText}>Explore the App</Text>
        </TouchableOpacity>

        {/* Register Link */}
        <Text style={styles.registerLink}>
          Not a member yet?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Text>
        </Text>
      </View>
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
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#FFFFFF', // White border color
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    fontSize: 16,
    color: '#FFFFFF', // White text color
  },
  submitButton: {
    backgroundColor: '#5DA8DC', // Blue accent color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  exploreButton: {
    backgroundColor: '#4CAF50', // Green accent color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontWeight: 'bold',
    fontSize: 18,
  },
  registerLink: {
    marginTop: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 17,
  },
  linkText: {
    color: '#5DA8DC', // Blue accent color
    fontWeight: 'bold',
  },
})

export default Login
