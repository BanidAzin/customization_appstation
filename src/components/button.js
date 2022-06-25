import React from 'react';
import {
  TouchableOpacity,
  Text,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {responsiveFontSize} from '../utilities/responsive';

export const MyButton = ({title, onPress, disabled = true}) => {
  const {colors} = useTheme();
  const {height} = useWindowDimensions();

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: disabled ? colors.disabledButton : colors.button,
          height: height * 0.07,
          borderRadius: height * 0.01,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: responsiveFontSize(22),
    fontWeight: 'bold',
  },
});
