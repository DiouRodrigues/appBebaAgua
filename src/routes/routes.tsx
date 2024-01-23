import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View,Text } from 'native-base';
import { Dashboard } from '../screens/Dashboard';
import { ProfileScreen } from '../screens/profile';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

type ITabRoutes ={
        Settings: undefined;
        DashBoard:undefined;
        profile:undefined;
}

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

const Screen = ()=>{
    return(
        <View style={{flex:1, backgroundColor:'red' , justifyContent:'center', alignItems:'center'}}>
        <Text>Screen1</Text>
        </View>
        
    );
};
interface IMyTabs{}

export const Routes:React.FunctionComponent<IMyTabs> =() =>{
    const [goal,seGoal]  = useState<number>(2000);
  return (
    <NavigationContainer>
        <Tab.Navigator>
      <Tab.Screen name="Settings" component={Screen} options={{
          title:'Configuração',
          tabBarIcon:()=><Icon name='setting'size={20} color="purple"/>,
        }} />
        <Tab.Screen name="DashBoard" component={Dashboard} options={{
            title:'DashBoard',
            
          tabBarIcon:()=><Icon name='dashboard'size={20} color="purple"/>
        }} />
      <Tab.Screen name="profile" component={ProfileScreen} options={{
        title:'Perfil',
        tabBarIcon:()=><Icon name='user'size={20} color="purple"/>
      }} />
      
    </Tab.Navigator> 

    </NavigationContainer>
    
  );
}