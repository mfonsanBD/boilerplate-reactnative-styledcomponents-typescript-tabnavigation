import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProps{
  children: ReactNode;
}

interface User{
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData{
  user: User;
  signOut(): Promise<void>;
  userStorageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProps){
  const [user, setUser] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);
  const userStorageKey = '@app:user';

  async function signOut(){
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
  }

  useEffect(()=>{
    async function loadUserStorageData(){
      const userStorage = await AsyncStorage.getItem(userStorageKey);

      if(userStorage){
        const userLogged = JSON.parse(userStorage) as User;
        setUser(userLogged);
      }
      setUserStorageLoading(false);
    }
    loadUserStorageData();
  },[]);

  return(
    <AuthContext.Provider value={{ user, signOut, userStorageLoading }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth}