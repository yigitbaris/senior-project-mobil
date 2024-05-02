import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import JobInfo from '../JobInfo'
import * as RootNavigation from '../../../context/NavigationRef'
import axios from 'axios'
import styles from './nöbet.style'
import { API_IP } from '@env'

const Nöbet = ({ item }) => {
  const {
    company,
    position,
    jobLocation,
    jobDate,
    jobType,
    jobStatus,
    role,
    _id,
  } = item

  const handleEditBtn = () => {
    RootNavigation.navigate('EditJobFlow', { id: _id })
  }

  const handleDeleteBtn = async () => {
    try {
      const response = await axios.delete(
        `http://192.168.244.1:5100/api/v1/jobs/${_id}`
      )
      RootNavigation.navigate('AllJobs')
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View>
          <Text style={styles.mainIcon}>{company.charAt(0)}</Text>
        </View>
        <View style={styles.headerSpace}>
          <View>
            <Text style={styles.position}>{position}</Text>
            <Text style={styles.company}>{company}</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.statusText}>{jobStatus}</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentCenter}>
          <JobInfo
            icon={
              <FontAwesome5 name='location-arrow' size={24} color='#B3AEC6' />
            }
            text={jobLocation}
          />
          <JobInfo
            icon={<FontAwesome5 name='briefcase' size={24} color='#B3AEC6' />}
            text={jobType}
          />
          <JobInfo
            icon={
              <FontAwesome5 name='calendar-alt' size={24} color='#B3AEC6' />
            }
            text={jobDate}
          />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.editBtn} onPress={handleEditBtn}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn} onPress={handleDeleteBtn}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Nöbet
