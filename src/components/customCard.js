import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {responsiveFontSize} from '../utilities/responsive';

export const CustomCard = ({step, title, description, children}) => {
  const {colors} = useTheme();
  const {height} = useWindowDimensions();

  const getImage = () => {
    switch (step) {
      case 1:
        return require('../assets/Cabana_Size.png');
      case 2:
        return require('../assets/Bathroom_Size.png');
      case 3:
        return require('../assets/Window_Shutters.png');
      case 4:
        return require('../assets/Condition.png');

      default:
        return;
    }
  };

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
      <View style={styles.topContainer}>
        <Image source={getImage()} />
        <Text
          style={[
            styles.topContainerTitleText,
            {
              color: colors.text,
              fontSize: responsiveFontSize(24),
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.topContainerDescriptionText,
            {
              color: colors.text,
              fontSize: responsiveFontSize(20),
            },
          ]}>
          {description}
        </Text>
      </View>
      <View style={styles.optionsContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    paddingHorizontal: '3%',
    paddingTop: '5%',
  },
  topContainer: {
    flexGrow: 1,
    maxHeight: '45%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  topContainerTitleText: {
    fontWeight: 'bold',
  },
  topContainerDescriptionText: {
    textAlign: 'center',
  },
  optionsContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: '5%',
  },
});
