import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetchUser } from '../../services/user'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  // inital value should match the data type of end value
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) throw new Error(`"you're cookies are undefined" -granny`)

  return context
}

export { UserProvider, useUser }
