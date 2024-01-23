import React, {createContext, useEffect, useState} from "react";
import { IUser } from "../types/UserInterface";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserContext{
    user?:IUser;
    goal: number;
    
    getData:()=>Promise<number>;
    storeData:(value:number)=> Promise<void>
}

const GOAL = 2000;
const  USER = {
   
        name:'Diovane Rodrigues',
        photo:'DR'
  
}
export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    user:USER,
    getData: ()=> Promise.resolve(GOAL),
    storeData: ()=> Promise.resolve(),
});

interface UserProviderProps{
    children:React.ReactNode;
}
const STORE_KEY = "@GOAL" 

export const UserProvider: React.FC<UserProviderProps> = ({children}) =>{

    const [ user] = useState<IUser>(USER);
    const [goal, setGoal] = useState<number>(GOAL);

    useEffect(()=>{
        getData().then((data)=>setGoal(data));
    },[]);

    const storeData = async (value: number) => {
        try {
            setGoal(value)
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(STORE_KEY, jsonValue);
        } catch (e) {
          // saving error
          console.error("Saving error",e);
          
        }
      };

      async function getData(): Promise<number>{
        try {
          const jsonValue = await AsyncStorage.getItem(STORE_KEY);
          return jsonValue != null ? JSON.parse(jsonValue) : GOAL;
        } catch (e) {
          // error reading value
          console.error("error reading value",e);
          return GOAL
        }
      };

    return(
        <UserContext.Provider value={{goal, user,getData, storeData}}>
            {children}
        </UserContext.Provider>
    )
}