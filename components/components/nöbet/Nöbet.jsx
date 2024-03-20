import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import styles from './nöbet.style'

const Nöbet = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Text style={styles.mainIcon}>{item.company.charAt(0)}</Text>
        {/* <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.position}
        </Text> */}
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.company}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.position}
        </Text>
        <FontAwesome5 name='location-arrow' size={24} color='black' />
        <FontAwesome5 name='briefcase' size={24} color='black' />
        <FontAwesome5 name='calendar-alt' size={24} color='black' />
        <Text style={styles.location}> {item.jobLocation}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Nöbet
