import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import axios from 'axios'
import styless from '../assets/css/welcome.style'

const AddJob = () => {
  const [data, setData] = useState([])

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
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.company}</Text>
      <Text style={styles.subtitle}>{item.position}</Text>
      <Text style={styles.subtitle}>{item.jobDate}</Text>
      <Text style={styles.subtitle}>{item.jobStatus}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styless.welcomeMessage}>denemeeeeeee</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
})

export default AddJob
