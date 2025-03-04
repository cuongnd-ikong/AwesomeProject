import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TabHomeParamList} from './interface';
import {Routers} from './routers';
import {HomeScreen} from '../screens/HomeScreen';
const Stack = createNativeStackNavigator<TabHomeParamList>();

export const NavTabHome = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, animation: 'none'}}>
      <Stack.Screen name={Routers.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};
