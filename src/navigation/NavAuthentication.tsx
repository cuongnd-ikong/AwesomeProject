import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthenticationStackParamList} from './interface';
import {Routers} from './routers';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator<AuthenticationStackParamList>();

export const NavAuthentication = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        //
      }}>
      <Stack.Screen name={Routers.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={Routers.RegisterScreen} component={LoginScreen} />
      <Stack.Screen
        name={Routers.ForgotPasswordScreen}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
