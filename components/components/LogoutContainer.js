import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Context as AuthContext } from '../../context/AuthContext'

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false)
  const user = { name: 'Nova' }
  const [userAvatar, setUserAvatar] = useState(null)
  const { signOut, getUserData } = useContext(AuthContext)

  return (
    <View
      style={{
        margin: 2,
        padding: 2,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', padding: 3 }}
        onPress={() => setShowLogout(!showLogout)}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>
          {user?.name}
        </Text>
        <Icon
          name='caret-down'
          size={20}
          color='black'
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
      {showLogout && (
        <View
          style={{
            position: 'absolute',
            top: 60,
            right: 10,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 8,
            elevation: 5, // For Android elevation
            shadowColor: '#000', // For iOS shadow
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <TouchableOpacity onPress={signOut}>
            <Text style={{ fontSize: 16, color: 'red' }}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default LogoutContainer
