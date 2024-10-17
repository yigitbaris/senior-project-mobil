import axios from 'axios'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ToastManager from 'toastify-react-native'

const Admin = () => {
  const handleAdminButton = async () => {
    try {
      const resp = await axios.get(
        `YOUR_IP_ADDRESS:5100/api/v1/users/admin/nobet-ata`
      )
      console.log(resp.data)
      ToastManager.success('Nöbetler Atandı!')
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
        <Text style={style.adminButtonText}>Nöbet Ata</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  adminButton: {
    backgroundColor: '#36a4c0',
    height: 60,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  adminButtonText: { color: 'white', padding: 20 },
})
export default Admin
