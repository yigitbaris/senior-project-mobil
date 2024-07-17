import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import JobInfo from './JobInfo'
import * as RootNavigation from '../../context/NavigationRef'
import axios from 'axios'

const Nöbet = ({ item, deleteJob, userRole }) => {
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
      await axios.delete(`http://192.168.244.1:5100/api/v1/jobs/${_id}`)
      deleteJob(_id)
      // RootNavigation.navigate('AllJobs')
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
          {userRole === 'admin' && (
            <View style={styles.status}>
              <Text style={styles.statusText}>
                {jobStatus === 'pending'
                  ? 'Beklemede'
                  : jobStatus === 'interview'
                  ? 'Atandı'
                  : jobStatus === 'declined'
                  ? 'Reddedildi'
                  : 'Bilinmeyen Durum'}
              </Text>
            </View>
          )}
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
        {userRole === 'admin' && (
          <View style={styles.btn}>
            <TouchableOpacity style={styles.editBtn} onPress={handleEditBtn}>
              <Text style={styles.buttonText}>Düzenle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={handleDeleteBtn}
            >
              <Text style={styles.buttonText}>Sil</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#3f3f3f',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#36a4c0',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 60,
    color: '#FFFFFF',
    marginRight: 20,
  },
  headerSpace: {
    flexDirection: 'row',
    display: 'flex',
  },
  position: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e1d6d6',
  },
  company: {
    fontSize: 16,
    color: '#e1d6d6',
  },
  status: {
    width: 100,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginStart: 50,
  },
  statusText: {
    textTransform: 'capitalize',
    color: '#FFFFFF',
  },
  content: {
    padding: 10,
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
  contentCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
  },
  btn: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
  },
  editBtn: {
    height: 40,
    width: 60,
    backgroundColor: '#36a4c0',
    borderRadius: 10,
  },
  deleteBtn: {
    height: 40,
    width: 60,
    backgroundColor: '#36a4c0',
    borderRadius: 10,
    marginLeft: 10,
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
    color: 'white',
  },
})
export default Nöbet
