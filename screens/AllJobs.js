import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import axios from 'axios'
import Nöbet from '../components/components/nöbet/Nöbet'
import { COLORS, SIZES } from '../assets/constants'
import styles from '../assets/css/allJobs'
import { useIsFocused } from '@react-navigation/native'

const AllJobs = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [selectedJob, setSelectedJob] = useState([])
  const isLoading = false
  const isFocused = useIsFocused()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.31.224.1:5100/api/v1/jobs')
        setData(response.data.jobs)
      } catch (error) {
        console.error('Login error:', error)
      }
    }
    fetchData()
    //her focus değiştiğinde tekrardan fetch edecek
  }, [isFocused])

  const handleCardPress = (item) => {
    if (item._id === selectedJob) {
      setSelectedJob('')
      return
    }
    console.log(item._id + 'pressed')
    setSelectedJob(item._id)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nöbetler</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Nöbet
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item._id}
            ItemSeparatorComponent={() => (
              <View style={{ height: SIZES.medium }} />
            )}
          />
        )}
      </View>
    </View>
  )
}

export default AllJobs
