import React from 'react';
import {
  TouchableOpacity,
  Text,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {responsiveFontSize} from '../utilities/responsive';

export const MyButton = ({
  title,
  onPress,
  disabled = true,
  style = {},
  children,
}) => {
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
        style,
      ]}
      onPress={onPress}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
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
