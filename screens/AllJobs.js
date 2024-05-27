import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import axios from 'axios'
import Nöbet from '../components/components/Nöbet'
import { COLORS, SIZES } from '../assets/constants'
import { useIsFocused } from '@react-navigation/native'

const AllJobs = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const isFocused = useIsFocused()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `http://192.168.244.1:5100/api/v1/jobs`
        )
        setData(response.data.jobs)
        setLoading(false)
      } catch (error) {
        console.error('Login error:', error)
      }
    }
    fetchData()
    //her focus değiştiğinde tekrardan fetch edecek
  }, [isFocused])
  const deleteJob = (id) => {
    setData(data.filter((job) => job._id !== id))
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nöbetler</Text>
      </View>

      {loading ? (
        <ActivityIndicator size='large' style={styles.loadingBar} />
      ) : (
        <>
          {data.length === 0 ? (
            <View style={styles.noJobsContainer}>
              <Text style={styles.noJobsText}>Gösterilecek iş yok...</Text>
            </View>
          ) : (
            <View style={styles.cardsContainer}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Nöbet item={item} deleteJob={deleteJob} />
                )}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => (
                  <View style={{ height: SIZES.medium }} />
                )}
              />
            </View>
          )}
        </>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: SIZES.xxLarge,
    backgroundColor: '#333',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontWeight: '500',
    marginLeft: 25,
    color: '#f0f0f0',
  },
  headerBtn: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    marginBottom: 70,
    marginLeft: 20,
    marginRight: 20,
  },
  loadingBar: {
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#36a4c0',
  },
  noJobsText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 25,
  },
})

export default AllJobs
