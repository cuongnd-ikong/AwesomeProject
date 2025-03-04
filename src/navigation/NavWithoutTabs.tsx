import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import {WithoutTabStackParamList} from './interface';
//
const Stack = true
  ? createStackNavigator<WithoutTabStackParamList>()
  : createNativeStackNavigator<WithoutTabStackParamList>();

export const NavWithoutTabs = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, animation: 'fade'}}
      initialRouteName={undefined}>
      {/* <Stack.Screen
        name={Routers.DocumentViewerScreen}
        component={DocumentViewerScreen}
      /> */}
      <></>
    </Stack.Navigator>
  );
};
