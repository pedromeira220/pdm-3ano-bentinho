import { User } from "firebase/auth";
import React, { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children}) => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <AuthContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}