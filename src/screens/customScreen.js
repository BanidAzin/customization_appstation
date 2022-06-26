import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Circle} from 'react-native-progress';

import {responsiveFontSize} from '../utilities/responsive';

export const CustomScreen = () => {
  const {colors} = useTheme();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const {height} = useWindowDimensions();

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
              CABANA SIZE
            </Text>
            <Text
              style={{
                color: colors.secondaryText,
                fontSize: responsiveFontSize(22),
              }}>
              Step 1/4
            </Text>
          </View>
          <Circle
            color={colors.indicator}
            unfilledColor="grey"
            size={height * 0.08}
            progress={1}
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
            formatText={progress => `${1 * 100}%`}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TitleView />
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
    paddingBottom: '5%',
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
});
