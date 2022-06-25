import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BuildScreen, CustomScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}>
      <Stack.Screen name="BUILD" component={BuildScreen} />
      <Stack.Screen name="CUSTOM" component={CustomScreen} />
    </Stack.Navigator>
  );
};
