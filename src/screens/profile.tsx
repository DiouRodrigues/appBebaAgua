import { Box,Text,Avatar,Slider, Divider, Button} from 'native-base';
import React, { useContext,useEffect,useState } from "react";
import { SafeAreaView } from "react-native";
import { UserContext } from '../Contexts/UserContext';


interface ProfileScreenProps{
    
}

export const ProfileScreen: React.FC<ProfileScreenProps> =({

}) => {
    
    const { goal, user ,getData , storeData} = useContext(UserContext);

    

    
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
        
        {/* <Text fontSize="2xl" textAlign="center">
        Goal:{local}
        </Text> */}
       
        <Divider my={20}/>
        <Box mx={20}>
            <Text fontSize="xl" textAlign="center" mt={4}>Meta de água</Text>
            <Text fontSize="xl" textAlign="center" mt={4}>{goal}ml</Text>
        <Slider  
            defaultValue={goal}
            value={goal}
            minValue={0}
            maxValue={4000} 
            onChange={(value) => storeData(value)}
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