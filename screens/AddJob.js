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
import { Picker } from '@react-native-picker/picker'

const AddJob = () => {
  // Function to generate current week days
  const getCurrentWeekDays = () => {
    const today = new Date()
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    const currentWeekDays = []

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000)
      const formattedDate = currentDate.toLocaleDateString('tr-TR', options)
      currentWeekDays.push(formattedDate)
    }

    return currentWeekDays
  }
  const [job, setJob] = useState({
    company: 'silinecek',
    position: 'silinecek',
    jobStatus: 'pending',
    jobType: 'full-time',
    jobLocation: 'Gaziosmanpaşa',
    jobDate: getCurrentWeekDays()[0],
    jobAssignTo: 'none',
  })
  const handleSaveJob = async () => {
    try {
      await axios.post(`YOUR_IP_ADDRESS:5100/api/v1/jobs`, job)
      setJob({ ...job, jobDate: getCurrentWeekDays()[0] })
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
        <View style={styles.addJob}>
          <Text style={styles.addText}>İş Ekle</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Şirket</Text>
            <TextInput
              style={styles.input}
              placeholder='Şirket'
              value={job.company}
              onChangeText={(text) => setJob({ ...job, company: text })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Pozisyon</Text>
            <TextInput
              style={styles.input}
              placeholder='Pozisyon'
              value={job.position}
              onChangeText={(text) => setJob({ ...job, position: text })}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>İş Statüsü</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={job.jobStatus}
                onValueChange={(value) => setJob({ ...job, jobStatus: value })}
                style={styles.pickerList}
              >
                <Picker.Item
                  label={'beklemede'}
                  value={'pending'}
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label={'görüşmede'}
                  value={'interview'}
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label={'reddedildi'}
                  value={'declined'}
                  style={styles.pickerItem}
                />
              </Picker>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>İş Tipi</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={job.jobType}
                onValueChange={(value) => setJob({ ...job, jobType: value })}
                style={styles.pickerList}
              >
                <Picker.Item
                  label={'tam-zamanlı'}
                  value={'full-time'}
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label={'yarı-zamanlı'}
                  value={'part-time'}
                  style={styles.pickerItem}
                />
                <Picker.Item
                  label={'stajyer'}
                  value={'internship'}
                  style={styles.pickerItem}
                />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>İş Lokasyonu</Text>
            <TextInput
              style={styles.input}
              placeholder='İş Lokasyonu'
              value={job.jobLocation}
              onChangeText={(text) => setJob({ ...job, jobLocation: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.header}>İş Tarihi</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={job.jobDate}
                onValueChange={(value) => setJob({ ...job, jobDate: value })}
                style={styles.pickerList}
              >
                {getCurrentWeekDays().map((day, index) => (
                  <Picker.Item
                    key={index}
                    label={day}
                    value={day}
                    style={styles.pickerItem}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSaveJob}>
          <Text style={styles.buttonText}>Kaydet</Text>
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
  addJob: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  addText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
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
    marginTop: 15,
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
    borderColor: '#3f3f3f',
    backgroundColor: '#3f3f3f',
    padding: 10,
    paddingLeft: 20,
    borderRadius: 20,
    color: '#f0f0f0',
    marginLeft: 5,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#36a4c0',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    minWidth: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#3f3f3f',
    backgroundColor: '#3f3f3f',
    borderRadius: 20,
    overflow: 'hidden',
    paddingStart: 10,
  },
  pickerList: { flexGrow: 1 },
  pickerItem: {
    color: 'white',
    fontSize: 15,
    backgroundColor: '#3f3f3f',
  },
})

export default AddJob
