import { StyleSheet } from 'react-native'

import { COLORS, FONT, SHADOWS, SIZES } from '../../../assets/constants'

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

export default styles
