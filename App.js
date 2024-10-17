import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  AddJob,
  Admin,
  AllJobs,
  Login,
  Profile,
  Register,
  Stats,
  EditJob,
} from './screens'
import ToastManager from 'toastify-react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Provider as AuthProvider } from './context/AuthContext'
import { navigationRef } from './context/NavigationRef'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { SafeAreaView } from 'react-native'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { UserRoleProvider, useUserRole } from './context/UserRoleContext'

// const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const TabMaterial = createMaterialBottomTabNavigator()

const LoginFlow = () => (
  <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
  </Stack.Navigator>
)
const DashboardFlow = () => (
  <TabMaterial.Navigator
    barStyle={{ backgroundColor: '#3f3f3f' }}
    activeColor='#36a4c0'
    inactiveColor='white'
    shifting={true}
  >
    <TabMaterial.Screen
      name='AddJob'
      component={AddJob}
      options={{
        tabBarColor: '#36a4c0',
        // tabBarBadge: 10,
        tabBarLabel: 'İş Ekle',
        tabBarIcon: ({ focused }) => (
          <Icon name='add' color={focused ? '#36a4c0' : 'white'} size={25} />
        ),
      }}
    />
    <TabMaterial.Screen
      name='AllJobs'
      component={AllJobs}
      options={{
        tabBarLabel: 'Tüm İşler',
        tabBarIcon: ({ focused }) => (
          <Icon name='list' color={focused ? '#36a4c0' : 'white'} size={25} />
        ),
      }}
    />
    <TabMaterial.Screen
      name='Stats'
      component={Stats}
      options={{
        tabBarLabel: 'Istatistik',
        tabBarIcon: ({ focused }) => (
          <Icon
            name='bar-chart'
            color={focused ? '#36a4c0' : 'white'}
            size={25}
          />
        ),
      }}
    />
    <TabMaterial.Screen
      name='Profile'
      component={Profile}
      options={{
        tabBarLabel: 'Profil',
        tabBarIcon: ({ focused }) => (
          <Icon name='person' color={focused ? '#36a4c0' : 'white'} size={25} />
        ),
      }}
    />
    <TabMaterial.Screen
      name='Admin'
      component={Admin}
      options={{
        tabBarLabel: 'Admin',
        tabBarIcon: ({ focused }) => (
          <Icon
            name='settings'
            color={focused ? '#36a4c0' : 'white'}
            size={25}
          />
        ),
      }}
    />
  </TabMaterial.Navigator>
)
const UserDashboardFlow = () => (
  <TabMaterial.Navigator
    barStyle={{ backgroundColor: '#3f3f3f' }}
    activeColor='#36a4c0'
    inactiveColor='white'
    shifting={true}
  >
    <TabMaterial.Screen
      name='AllJobs'
      component={AllJobs}
      options={{
        tabBarLabel: 'Tüm İşler',
        tabBarIcon: ({ focused }) => (
          <Icon name='list' color={focused ? '#36a4c0' : 'white'} size={25} />
        ),
      }}
    />

    <TabMaterial.Screen
      name='Profile'
      component={Profile}
      options={{
        tabBarLabel: 'Profil',
        tabBarIcon: ({ focused }) => (
          <Icon name='person' color={focused ? '#36a4c0' : 'white'} size={25} />
        ),
      }}
    />
  </TabMaterial.Navigator>
)

const App = () => {
  // const [userRole, setUserRole] = useState('')

  // const adminCheck = async () => {
  //   try {
  //     const user = await axios.get(
  //       `YOUR_IP_ADDRESS:5100/api/v1/users/current-user`
  //     )
  //     setUserRole(user.data.user.role)
  //   } catch (error) {
  //     ToastManager.error('error!')
  //     console.error('Login error:', error)
  //   }
  // }
  // adminCheck()

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='LoginFlow' component={LoginFlow} />

        <Stack.Screen name='DashboardFlow' component={DashboardFlow} />

        <Stack.Screen name='UserDashboardFlow' component={UserDashboardFlow} />

        <Stack.Screen name='EditJobFlow' component={EditJob} />
      </Stack.Navigator>
      <ToastManager />
    </NavigationContainer>
  )
}

export default () => {
  return (
    <UserRoleProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SafeAreaView>
    </UserRoleProvider>
  )
}
