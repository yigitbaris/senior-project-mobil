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
} from './screens'
import LogoutContainer from './components/components/LogoutContainer'
import ToastManager from 'toastify-react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Provider as AuthProvider } from './context/AuthContext'
import { navigationRef } from './context/NavigationRef'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const TabMaterial = createMaterialBottomTabNavigator()

const LoginFlow = () => (
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
  </Stack.Navigator>
)
const DashboardFlow = () => (
  <TabMaterial.Navigator>
    <TabMaterial.Screen
      name='AddJob'
      component={AddJob}
      options={{
        tabBarLabel: 'Add Job',
        tabBarIcon: ({ color, size }) => (
          <Icon name='add' color={color} size={25} />
        ),
      }}
    />
    <TabMaterial.Screen
      name='AllJobs'
      component={AllJobs}
      options={{
        tabBarLabel: 'AllJobs',
        tabBarIcon: ({ color, size }) => (
          <Icon name='list' color={color} size={25} />
        ),
      }}
    />
    <TabMaterial.Screen
      name='Stats'
      component={Stats}
      options={{
        tabBarLabel: 'Stats',
        tabBarIcon: ({ color, size }) => (
          <Icon name='bar-chart' color={color} size={25} />
        ),
      }}
    />
    <TabMaterial.Screen
      name='Profile'
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Icon name='person' color={color} size={25} />
        ),
      }}
    />
    <TabMaterial.Screen
      name='Admin'
      component={Admin}
      options={{
        tabBarLabel: 'Admin',
        tabBarIcon: ({ color, size }) => (
          <Icon name='settings' color={color} size={25} />
        ),
      }}
    />
  </TabMaterial.Navigator>
)

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => null,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name='LoginFlow'
          component={LoginFlow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='DashboardFlow'
          component={DashboardFlow}
          options={{
            headerRight: () => <LogoutContainer />,
          }}
        />
      </Stack.Navigator>
      <ToastManager />
    </NavigationContainer>
  )
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
