import axios from 'axios'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Admin = () => {
  const handleAdminButton = async () => {
    console.log('admin button pressed')
    try {
      const resp = await axios.get(
        `http://192.168.244.1:5100/api/v1/users/admin/nobet-ata`
      )
      console.log(resp.data)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <View
      style={{
        backgroundColor: '#333',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 25 }}>
        Nöbet atamak için lütfen tıklayın
      </Text>
      <View style={{ padding: 20 }}></View>
      <TouchableOpacity style={style.adminButton} onPress={handleAdminButton}>
        <Text style={style.adminButtonText}>denemelik tuş</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  adminButton: {
    backgroundColor: '#36a4c0',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  adminButtonText: { color: 'white', padding: 20 },
})
export default Admin
