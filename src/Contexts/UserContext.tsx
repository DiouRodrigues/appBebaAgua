import React, {createContext, useEffect, useState} from "react";
import { IUser } from "../types/UserInterface";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePersistState } from "../routes/Hooks/usePersistState";

interface IUserContext{
    user?:IUser;
    goal: number;
    setGoal: (value:number)=>Promise<void>;
    setUser: (value:IUser)=>Promise<void>;
}
    

const GOAL = 2000;
const  USER = {
   
        name:'Diovane Rodrigues',
        photo:'DR'
  
}
export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    user:USER,
    setUser:() =>Promise.resolve(),
    setGoal:() =>Promise.resolve(),
});

interface UserProviderProps{
    children:React.ReactNode;
}


export const UserProvider: React.FC<UserProviderProps> = ({children}) =>{

    const [ user,setUser] = usePersistState<IUser>(USER,'@user');
    const [goal, setGoal] = usePersistState<number>(GOAL,'goal1');

  

    return(
        <UserContext.Provider value={{goal, user,setGoal,setUser}}>
            {children}
        </UserContext.Provider>
    )
}