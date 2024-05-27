import { Text, View, StyleSheet } from 'react-native'
import StatBox from '../components/components/StatBox'
import { SIZES } from '../assets/constants'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa'

const Stats = () => {
  const [data, setData] = useState({ users: '0', jobs: '0' })
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `http://192.168.244.1:5100/api/v1/users/admin/app-stats`
        )
        setData(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Login error:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <View style={styles.mainView}>
      <View>
        <Text style={styles.header}>Istatistik</Text>
      </View>
      <StatBox
        title={'güncel kullanıcılar'}
        bcg={'#fcefc7'}
        count={data.users}
        icon={'users'}
        color={'#e9b949'}
        style={styles.statBox}
      />
      <View style={{ marginBottom: 30 }}></View>
      <StatBox
        title={'toplam işler'}
        bcg={'#e0e8f9'}
        count={data.jobs}
        icon={'calendar-check'}
        color={'#647acb'}
        style={styles.statBox}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#333',
    flexGrow: 1,
    paddingTop: SIZES.xxLarge,
  },
  statBox: {
    marginRight: 20,
    marginBottom: 30,
    marginTop: 30,
  },
  header: {
    color: 'white',
    fontSize: 20,
    marginBottom: 30,
    marginTop: 20,
    marginStart: 30,
  },
})
export default Stats
