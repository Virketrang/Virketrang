import { createContext, useContext } from 'react'
import { User } from 'firebase/auth'

import UserContextProviderComponent from './user.context.types'

const UserContext = createContext<null | User>(null)

const UserContextProvider: UserContextProviderComponent = (props) => {
    return <UserContext.Provider value={null}>{props.children}</UserContext.Provider>
}

export const useUserContext = () => {
    return useContext(UserContext)
}

export default UserContextProvider
