import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import ToastManager from 'toastify-react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useUserRole } from '../context/UserRoleContext'

const Login = () => {
  const [email, setEmail] = useState('baris@gmail.com')
  const [password, setPassword] = useState('secret123')
  const navigation = useNavigation()
  // const { denemelikData,  } = useUserRole()

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `http://192.168.244.1:5100/api/v1/auth/login`,
        {
          email: email,
          password: password,
        }
      )
      ToastManager.success('Logged in!')
      try {
        const user = await axios.get(
          `http://192.168.244.1:5100/api/v1/users/current-user`
        )
        {
          user.data.user.role === 'admin'
            ? navigation.navigate('DashboardFlow', { screen: 'AddJob' })
            : navigation.navigate('UserDashboardFlow', { screen: 'AllJob' })
        }
      } catch (error) {
        ToastManager.error('error!')
        console.error('Login error:', error)
      }
    } catch (error) {
      // Handle login error, display toast message, etc.
      console.error('Login error:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Giris Yap</Text>

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
          <Text style={styles.buttonText}>Giris</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => console.log('Explore button pressed')}
        >
          <Text style={styles.buttonText}>Explore the App</Text>
        </TouchableOpacity> */}

        {/* Register Link */}
        <Text style={styles.registerLink}>
          Henüz üye değil misin?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('Register')}
          >
            Kaydol
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
    backgroundColor: '#333', // Dark background color
    padding: 16,
  },
  logo: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text color
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  formTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 16,
    fontSize: 20,
    color: '#FFFFFF',
    backgroundColor: '#3f3f3f',
    paddingLeft: 20,
  },
  submitButton: {
    backgroundColor: '#36a4c0',
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
    color: '#36a4c0', // Blue accent color
    fontWeight: 'bold',
  },
})

export default Login
