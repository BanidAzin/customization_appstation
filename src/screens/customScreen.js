import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Circle} from 'react-native-progress';

import ArrowLeft from '../assets/Arrow_Left.png';
import ArrowRight from '../assets/Arrow_Right.png';
import {
  CustomCard,
  MyButton,
  RenderSingleColumnList,
  RenderMultipleColumnList,
} from '../components';
import {responsiveFontSize} from '../utilities/responsive';
import Data from '../utilities/localData.json';

export const CustomScreen = () => {
  const {colors} = useTheme();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const {height} = useWindowDimensions();

  const [step, setStep] = useState(1);
  const [customisation, setCustomization] = useState();

  const TitleView = () => {
    return (
      <View
        style={[
          styles.titleContainer,
          {
            paddingTop: headerHeight + height * 0.025,
          },
        ]}>
        <View style={styles.titleChildrensContainer}>
          <View style={styles.titleTextContainer}>
            <Text
              style={[
                styles.titleText,
                {
                  color: colors.text,
                  fontSize: responsiveFontSize(22),
                },
              ]}>
              {Data[step].title}
            </Text>
            <Text
              style={{
                color: colors.secondaryText,
                fontSize: responsiveFontSize(22),
              }}>
              {`Step ${step}/4`}
            </Text>
          </View>
          <Circle
            color={colors.indicator}
            unfilledColor="grey"
            size={height * 0.08}
            progress={step / 4}
            showsText={true}
            borderWidth={0}
            thickness={5}
            textStyle={[
              styles.titleprogressText,
              {
                color: colors.text,
                fontSize: responsiveFontSize(16),
              },
            ]}
            formatText={() => `${(step / 4) * 100}%`}
          />
        </View>
      </View>
    );
  };

  const MyButtonTitle = () => {
    return (
      <View style={styles.myButtonTitleContainer}>
        <Image source={ArrowRight} />
        <Text
          style={[
            styles.myButtonTitleText,
            {
              fontSize: responsiveFontSize(23),
            },
          ]}>
          NEXT
        </Text>
        <Image source={ArrowLeft} />
      </View>
    );
  };

  const onMyButtonPress = () => {
    if (step <= 3) {
      setStep(step + 1);
    }
  };

  const chooseListComponent = () => {
    if (step === 1 || step === 2) {
      return (
        <RenderSingleColumnList
          step={step}
          data={Data[step].options}
          customisationState={customisation}
          onPress={newState => setCustomization(newState)}
        />
      );
    } else {
      return <RenderMultipleColumnList step={step} data={Data[step].options} />;
    }
  };

  return (
    <View style={styles.container}>
      <TitleView />
      <CustomCard
        step={step}
        title={Data[step].title}
        description={Data[step].description}>
        {chooseListComponent()}
      </CustomCard>
      <MyButton
        onPress={onMyButtonPress}
        disabled={false}
        style={[
          styles.myButtonStyle,
          {
            paddingBottom: insets.bottom,
            height: height * 0.11,
          },
        ]}>
        <MyButtonTitle />
      </MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: '5%',
    justifyContent: 'center',
    paddingBottom: '10%',
  },
  titleChildrensContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTextContainer: {
    justifyContent: 'center',
  },
  titleText: {
    paddingBottom: '1%',
  },
  titleprogressText: {
    fontWeight: '500',
  },
  myButtonStyle: {
    marginTop: -15,
    justifyContent: 'flex-end',
    borderRadius: 0,
  },
  myButtonTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  myButtonTitleText: {
    fontWeight: 'bold',
    paddingHorizontal: '4%',
  },
});
