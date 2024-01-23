import { Box,Text,Avatar,Slider, Divider, Button,Input} from 'native-base';
import React, { useContext,useEffect,useState } from "react";
import { SafeAreaView } from "react-native";
import { UserContext } from '../Contexts/UserContext';
import { usePersistState } from '../routes/Hooks/usePersistState';


interface ProfileScreenProps{
    
}

export const ProfileScreen: React.FC<ProfileScreenProps> =({

}) => {
    const [goal2,setGoal2] = usePersistState(2,'@goal2')
    const { goal, user ,setGoal,setUser} = useContext(UserContext);

    

    
    return(
        <Box mt={50}>
            <Avatar bg="green.500" alignSelf="center" size="2xl" source={{
        uri:user?.photo || undefined
      }}>
          {user?.name.substring(0,1)}
        </Avatar>
        <Text fontSize="2xl" textAlign="center">
        {user?.name}
        </Text>
        <Input defaultValue={user?.name}onChangeText={(value)=>{
          setUser({
            name: value,
            photo: String(user?.photo),
          });
        }} placeholder="Default Input"  />
        
        
        {/* <Text fontSize="2xl" textAlign="center">
        Goal:{local}
        </Text> */}
       
        <Divider my={20}/>
        <Box mx={20}>
            <Text fontSize="xl" textAlign="center" mt={4}>Meta de água</Text>
            <Text fontSize="xl" textAlign="center" mt={4}>{goal}ml</Text>

            <Text fontSize="xl" textAlign="center" mt={4}>Goal2:{goal2}ml</Text>
           <Button
           onPress={()=>{
            setGoal2(Number(goal2)+1);
          }}>

           add+1</Button>
        <Slider  
            defaultValue={goal}
            value={goal}
            minValue={0}
            maxValue={4000} 
            onChange={(value) => setGoal(value)}
            step={50}
             >
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
        </Box>
        </Box>
        
        
    );
};