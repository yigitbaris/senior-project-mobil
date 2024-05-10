import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'
import axios from 'axios'
import ToastManager from 'toastify-react-native'
import { Context as AuthContext } from '../context/AuthContext'
import { API_IP } from '@env'

const Stats = () => {
  const [user, setUser] = useState({})
  const { signOut } = useContext(AuthContext)

  useEffect(() => {
    const currentUser = async () => {
      try {
        const response = await axios.get(
          `http://192.168.244.1:5100/api/v1/users/current-user`
        )
        setUser(response.data.user)
      } catch (error) {
        ToastManager.error('error!')
        console.error('Login error:', error)
      }
    }
    currentUser()
  }, [])

  const handleSaveProfile = async () => {
    try {
      await axios.patch(
        'http://192.168.244.1:5100/api/v1/users/update-user',
        user
      )
      ToastManager.success('User Updated!')
    } catch (error) {
      ToastManager.error('error!')
      console.error('Login error:', error)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={{ uri: user.avatar }} style={styles.profileImage} />
        <View style={styles.addJob}>
          <Text style={styles.addText}>Profil</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>İsim</Text>
            <TextInput
              style={styles.input}
              value={user.name}
              onChangeText={(text) => setUser({ ...user, name: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Soy İsim</Text>
            <TextInput
              style={styles.input}
              value={user.lastName}
              onChangeText={(text) => setUser({ ...user, lastName: text })}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={user.email}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Lokasyon</Text>
            <TextInput
              style={styles.input}
              value={user.location}
              onChangeText={(text) => setUser({ ...user, location: text })}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Profili Kaydet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuit} onPress={signOut}>
          <Text style={styles.buttonText}>Çıkıs</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    paddingBottom: 20,
  },
  addJob: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  addText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15,
    color: '#f0f0f0',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#3f3f3f',
    backgroundColor: '#3f3f3f',
    padding: 10,
    borderRadius: 20,
    color: '#f0f0f0',
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#36a4c0',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonQuit: {
    backgroundColor: '#c0364b',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    minWidth: 90,
  },
  profileImage: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 100,
    marginBottom: 20,
  },
})

export default Stats
