import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { AccountScreen } from '../screens';
import React from 'react';
import {TabProfileParamList} from './interface';
import {Routers} from './routers';
import LoginScreen from '../../src/screens/LoginScreen';
// import {HomeScreen} from '@src/screens/HomeScreen';
const Stack = createNativeStackNavigator<TabProfileParamList>();

export const NavTabAccount = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <></>
      <Stack.Screen name={Routers.AccountScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
};
