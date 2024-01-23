
//const [state, setState] = useState <type>(initialState);

import AsyncStorage from "@react-native-async-storage/async-storage";
import{useEffect, useState} from "react"


interface IUsePersistReturn{
    localState:number;
    setLocalState: React.Dispatch<React.SetStateAction<number>>;
}
interface IUsePersistState{}

export function usePersistState<T> (
    defaultValue: T,
    key: string 
    ):[T,(value:T)=>Promise<void>]{
    const [localState, setLocalState] = useState <T>(defaultValue);

    useEffect(()=>{
        getData().then((data)=>setLocalState(data));
    },[]);

    const storeData = async (value: T) => {
        try {
        setLocalState(value)
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
          // saving error
          console.error("Saving error",e);
          
        }
      };

      async function getData(): Promise<T>{
        try {
          const jsonValue = await AsyncStorage.getItem(key);
          return jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
        } catch (e) {
          // error reading value
          console.error("error reading value",e);
          return defaultValue
        }
      };

    return [localState, storeData];
}