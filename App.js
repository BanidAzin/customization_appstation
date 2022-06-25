/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Router} from './src/navigation/router';
import {MyTheme} from './src/utilities/themes';

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Router />
    </NavigationContainer>
  );
};

export default App;
