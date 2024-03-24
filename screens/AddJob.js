import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native'
import axios from 'axios'
import ToastManager from 'toastify-react-native'
import * as RootNavigation from '../context/NavigationRef'

const AddJob = () => {
  const today = new Date()
  const [job, setJob] = useState({
    company: 'silinecek',
    position: 'silinecek',
    jobStatus: 'pending',
    jobType: 'full-time',
    jobLocation: 'silinecek',
    jobDate: 'Monday, March 25',
  })

  const handleSaveJob = async () => {
    try {
      console.log(job)
      await axios.post('http://172.31.224.1:5100/api/v1/jobs', job)
      ToastManager.success('Job saved!')
      RootNavigation.navigate('AllJobs')
    } catch (error) {
      ToastManager.error('error!')
      console.error('Login error:', error)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Company</Text>
            <TextInput
              style={styles.input}
              placeholder='Company'
              value={job.company}
              onChangeText={(text) => setJob({ ...job, company: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Position</Text>
            <TextInput
              style={styles.input}
              placeholder='Position'
              value={job.position}
              onChangeText={(text) => setJob({ ...job, position: text })}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Job Status</Text>
            <TextInput
              style={styles.input}
              placeholder='Job Status'
              value={job.jobStatus}
              onChangeText={(text) => setJob({ ...job, jobStatus: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Job Type</Text>
            <TextInput
              style={styles.input}
              placeholder='Job Type'
              value={job.jobType}
              onChangeText={(text) => setJob({ ...job, jobType: text })}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Job Location</Text>
            <TextInput
              style={styles.input}
              placeholder='Job Location'
              value={job.jobLocation}
              onChangeText={(text) => setJob({ ...job, jobLocation: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Job Date</Text>
            <TextInput
              style={styles.input}
              placeholder='Job Date'
              value={job.jobDate}
              onChangeText={(text) => setJob({ ...job, jobDate: text })}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSaveJob}>
          <Text style={styles.buttonText}>Save Job</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    paddingBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15,
    color: '#f0f0f0',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    color: '#f0f0f0',
    marginLeft: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default AddJob
