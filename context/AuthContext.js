import { Toast } from 'toastify-react-native'
import CreateDataContext from './CreateDataContext'
import * as RootNavigation from './NavigationRef'
import axios from 'axios'

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signIn':
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return {
        ...state,
        errorMessage: '',
      }
    case 'signOut':
      return { token: null, errorMessage: '' }

    default:
      return state
  }
}

const getUserData = (dispatch) => async () => {
  const data = await axios.get(
    'http://192.168.169.1:5100/api/v1/users/current-user'
  )
  user = data.data.user
  console.log('auth context get user data', user)
  return user
}

const clearErrorMessage = (dispatch) => () => {}

const signUp = (dispatch) => async () => {}

const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        'http://192.168.169.1:5100/api/v1/auth/login',
        { email, password }
      )
      const token = response.data.token
      dispatch({ type: 'signIn', payload: token })
      ToastAndroid.show('You successfully logged in', ToastAndroid.SHORT)
      RootNavigation.navigate('MainFlow') // Navigate to the main screen after successful login
    } catch (error) {
      dispatch({ type: 'add_error', payload: 'Invalid credentials' })
    }
  }

const signOut = (dispatch) => () => {
  Toast.success('You successfully logged out')
  RootNavigation.navigate('LoginFlow')
}

export const { Provider, Context } = CreateDataContext(AuthReducer, {
  signUp,
  signIn,
  signOut,
  clearErrorMessage,
  getUserData,
})
