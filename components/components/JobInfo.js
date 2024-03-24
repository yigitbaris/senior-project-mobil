import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const JobInfo = ({ icon, text }) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.jobIcon}>{icon}</Text>
      </View>
      <View>
        <Text style={styles.jobText}>{text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  jobIcon: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 20,
  },
  jobText: {
    textAlign: 'center',
    color: '#E0E0E0',
    letterSpacing: 1,
    fontSize: 13,
    marginTop: -20,
  },
})

export default JobInfo
