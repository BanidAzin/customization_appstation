import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {responsiveFontSize} from '../utilities/responsive';
import {BuildTypeCard, MyButton} from '../components';
import Intersection_25 from '../assets/Intersection_25.png';
import BuildTypeBlueIcon from '../assets/BuildTypeBlueIcon.png';
import BuildTypeRedIcon from '../assets/BuildTypeRedIcon.png';
import {BUILDTYPES} from '../utilities/contstants';

export const BuildScreen = ({navigation}) => {
  const {colors} = useTheme();
  const {height} = useWindowDimensions();

  const [selectBuildType, setSelectBuildType] = useState();

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
      <View style={styles.typeCardContainer}>
        <View style={styles.buildTypeCardContainer}>
          <BuildTypeCard
            iconSource={BuildTypeBlueIcon}
            name={BUILDTYPES.standard}
            onPress={() => setSelectBuildType(BUILDTYPES.standard)}
            isSelected={selectBuildType === BUILDTYPES.standard}
          />
          <BuildTypeCard
            iconSource={BuildTypeRedIcon}
            name={BUILDTYPES.custom}
            onPress={() => setSelectBuildType(BUILDTYPES.custom)}
            isSelected={selectBuildType === BUILDTYPES.custom}
          />
        </View>
        <MyButton
          disabled={!selectBuildType}
          title="VIEW CABANAS"
          onPress={() =>
            navigation.navigate('CUSTOM', {title: selectBuildType})
          }
        />
      </View>
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
    paddingBottom: '8%',
  },
  headerCardDescriptionText: {
    fontSize: responsiveFontSize(20),
    textAlign: 'center',
  },
  typeCardContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: '4%',
  },
  buildTypeCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
