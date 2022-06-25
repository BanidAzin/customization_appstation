import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BuildScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Build" component={BuildScreen} />
    </Stack.Navigator>
  );
};
