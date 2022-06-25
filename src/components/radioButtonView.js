import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const RadioButtonView = ({isSelected = false}) => {
  const {colors} = useTheme();
  const {height} = useWindowDimensions();

  return (
    <View
      style={[
        {
          height: height * 0.03,
          width: height * 0.03,
          borderRadius: height * 0.03,
          borderColor: colors.border,
        },
        styles.container,
      ]}>
      <View
        style={[
          {
            height: height * 0.015,
            width: height * 0.015,
            borderRadius: height * 0.015,
            backgroundColor: isSelected ? colors.button : colors.transparent,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});
