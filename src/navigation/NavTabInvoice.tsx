import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TabInvoiceParamList} from './interface';
import {Routers} from './routers';
import {InvoiceScreen} from '../screens/InvoiceScreen';
const Stack = createNativeStackNavigator<TabInvoiceParamList>();

export const NavTabInvoice = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name={Routers.InvoiceScreen} component={InvoiceScreen} />
    </Stack.Navigator>
  );
};
