import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TabListBookingParamList} from './interface';
import {Routers} from './routers';
const Stack = createNativeStackNavigator<TabListBookingParamList>();

export const NavTabListBooking = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <></>
    </Stack.Navigator>
  );
};
