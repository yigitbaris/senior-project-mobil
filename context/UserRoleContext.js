import React, { createContext, useState, useContext, useEffect } from 'react'

const UserRoleContext = createContext()

export const useUserRole = () => useContext(UserRoleContext)

export const UserRoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('')
  const denemelikData = 'userRoleContext Data'

  const adminCheck = async () => {
    try {
      const user = await axios.get(
        `http://192.168.244.1:5100/api/v1/users/current-user`
      )
      setUserRole(user.data.user.role)
    } catch (error) {
      ToastManager.error('error!')
      console.error('Login error:', error)
    }
  }

  useEffect(() => {
    adminCheck()
  }, [])

  return (
    <UserRoleContext.Provider value={{ userRole, denemelikData }}>
      {children}
    </UserRoleContext.Provider>
  )
}
