import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {responsiveFontSize} from '../utilities/responsive';
import Intersection_25 from '../assets/Intersection_25.png';

export const BuildScreen = ({navigation}) => {
  const {colors} = useTheme();
  const {height} = useWindowDimensions();

  const HeaderCard = () => {
    return (
      <View
        style={[
          styles.headerCard,
          {
            backgroundColor: colors.card,
          },
        ]}>
        <View style={styles.headerImageContainer}>
          <Image
            source={Intersection_25}
            style={{
              height: height * 0.3,
            }}
          />
        </View>
        <View style={styles.headerCardTextContainer}>
          <Text
            style={{
              color: colors.text,
              fontSize: responsiveFontSize(24),
              ...styles.headerCardHeadingText,
            }}>
            CHOOSE TYPE
          </Text>
          <Text
            style={[{color: colors.text}, styles.headerCardDescriptionText]}>
            Please Choose The Build Type,{'\n'} Standard or Custom
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderCard />
      <Text>Build Screen</Text>
      <Button
        title="Go to custom"
        onPress={() => navigation.navigate('CUSTOM')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerCard: {
    height: '40%',
    justifyContent: 'flex-end',
  },
  headerImageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  headerCardTextContainer: {
    paddingBottom: '10%',
    alignItems: 'center',
  },
  headerCardHeadingText: {
    fontSize: responsiveFontSize(24),
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingBottom: '10%',
  },
  headerCardDescriptionText: {
    fontSize: responsiveFontSize(16),
    textAlign: 'center',
  },
});
