import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ModalStackParamList } from './interface';

const Stack = createNativeStackNavigator<ModalStackParamList>();

export const NavModal = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => null,
                //
            }}
        >
            <></>
        </Stack.Navigator>
    );
};
