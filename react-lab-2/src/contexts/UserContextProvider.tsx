import { useState, type ReactNode } from "react"
import { UserContext } from "./UserContext"
import type { User } from "../types/user.types"

const UserContextProvider = ({ children }: { children: ReactNode}) => {
  const [user, setUser] = useState<User>(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
      { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider