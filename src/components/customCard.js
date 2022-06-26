import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const CustomCard = () => {
  const {colors} = useTheme();
  const {height} = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderBottomLeftRadius: height * 0.02,
          borderBottomRightRadius: height * 0.02,
        },
      ]}>
      <Text style={{color: colors.text}}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
});
