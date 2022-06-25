import React from 'react';
import {View, Text, Button} from 'react-native';

export const BuildScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Build Screen</Text>
      <Button
        title="Go to custom"
        onPress={() => navigation.navigate('CUSTOM')}
      />
    </View>
  );
};
