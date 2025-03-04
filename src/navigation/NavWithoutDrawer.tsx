import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { WithoutDrawerParamList } from './interface';
const Stack = createNativeStackNavigator<WithoutDrawerParamList>();

export interface IPropsNavWithoutDrawer {}
export const NavWithoutDrawer = () => {
    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <></>
        </Stack.Navigator>
    );
};
