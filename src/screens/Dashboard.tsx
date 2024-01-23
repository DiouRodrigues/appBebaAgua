import React, { useContext, useEffect, useState } from "react";
import {HStack, Text,Button,Box, VStack} from 'native-base';
import { useToast } from "native-base";
import { UserContext } from "../Contexts/UserContext";

interface IDashboardProps{

};

export const Dashboard: React.FC<IDashboardProps> = () => {
    const { goal} = useContext(UserContext)
    const [cupSize, setSize] = useState<number>(200);
    const [water,setWater]  = useState<number>(0);
    

    const toast = useToast();

    const handleWater =() =>{
        setWater(water + cupSize)
        toast.show({
            description:`Voce bebeu ${cupSize} de agua parabens`,
        })
    };

    const handleChangeCupSize = (size:number) =>{
        setSize(size)
    }
    useEffect(()=>{
        if(water >= goal){
            toast.show({
                description:"Voce atingiu a sua meta diaria  de agua parabens",
                placement:"top",
        })
    }
    },[water]);

    return (
        <VStack  flex={1} width='100%' justifyContent='space-between' alignItems='center' p={4} mt={10}>

<Text fontSize="sm">
            {' '} copo de {cupSize} ml

        </Text>
        <VStack>
        <HStack alignItems="center" justifyContent="center">
        <Text fontSize="6xl">
            {water}
        </Text>

        <Text  fontSize="xl">
           {'   '} /{goal} ml
            </Text>
           
        </HStack>
        
        
        <Button
        mt={5}
                colorScheme="primary"
                onPress={handleWater}
            
            >
                +Add Água
            </Button>
        </VStack>

           <Box mt={10}>
           <Button.Group >
                <Button onPress={()=>handleChangeCupSize(250)} colorScheme="teal">Copo americano</Button>
                <Button onPress={()=>handleChangeCupSize(350)} colorScheme="teal">xicara</Button>
                <Button onPress={()=>handleChangeCupSize(500)} colorScheme="teal">garrafa</Button>    
            </Button.Group>
           </Box >
            

        </VStack>
    );
};