import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Intersection_25 from '../assets/Intersection_25.png';
import Group_12648 from '../assets/Group_12648.png';
import {RadioButtonView} from './radioButtonView';
import {responsiveFontSize} from '../utilities/responsive';

export const BuildTypeCard = ({iconSource, name, onPress, isSelected}) => {
  const {colors} = useTheme();
  const {height} = useWindowDimensions();

  const AbsoluteImages = () => {
    return (
      <>
        <View style={styles.intersectionImage}>
          <Image
            source={Intersection_25}
            style={{height: height * 0.15}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.group_12648Image}>
          <Image source={Group_12648} resizeMode="contain" />
        </View>
      </>
    );
  };

  const IconAndName = () => {
    return (
      <>
        <RadioButtonView isSelected={isSelected} />
        <View
          style={[
            styles.iconAndTextContainer,
            {
              height: height * 0.23,
            },
          ]}>
          <Image
            source={iconSource}
            style={{height: height * 0.09, width: height * 0.09}}
          />
          <Text
            style={[
              styles.text,
              {
                color: colors.text,
              },
            ]}>
            {name}
          </Text>
        </View>
      </>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.card,
            height: height * 0.28,
            shadowColor: colors.shadow,
          },
        ]}>
        <View
          style={[
            styles.childrenContainer,
            {
              backgroundColor: colors.card,
              height: height * 0.28,
            },
          ]}>
          <AbsoluteImages />
          <IconAndName />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  childrenContainer: {
    borderRadius: 2,
    overflow: 'hidden',
    padding: '5%',
  },
  intersectionImage: {
    position: 'absolute',
    right: 0,
    top: '5%',
    marginRight: -45,
  },
  group_12648Image: {
    position: 'absolute',
    bottom: 0,
  },
  iconAndTextContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: responsiveFontSize(24),
    fontWeight: 'bold',
    paddingBottom: '10%',
  },
});
