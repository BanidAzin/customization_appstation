import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {responsiveFontSize} from '../utilities/responsive';
import {RadioButtonView} from './radioButtonView';

export const RenderSingleColumnList = ({
  step,
  data,
  customisationState = {},
  onPress,
}) => {
  const {colors} = useTheme();

  const BathroomSizeOptions = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          onPress({
            ...customisationState,
            bathroomSize: item.name,
          })
        }>
        <View
          style={[
            styles.bathroomSizeOptionsContainer,
            {
              backgroundColor: colors.background,
            },
          ]}>
          <View>
            <Text
              style={[
                styles.bathroomSizeOptionsText,
                {
                  color: colors.text,
                  fontSize: responsiveFontSize(24),
                },
              ]}>
              {item.name}
            </Text>
            <Text
              style={{
                color: colors.secondaryText,
                fontSize: responsiveFontSize(20),
              }}>
              {item.value}
            </Text>
          </View>
          <View style={styles.bathroomSizeOptionsRadioContainer}>
            <RadioButtonView
              isSelected={customisationState.bathroomSize === item.name}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      {step === 1 &&
        data.map(item => {
          return <BathroomSizeOptions key={item.id} item={item} />;
        })}
      {step === 2 &&
        data.map(item => {
          return <BathroomSizeOptions key={item.id} item={item} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  bathroomSizeOptionsContainer: {
    marginVertical: '2%',
    paddingVertical: '4%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bathroomSizeOptionsText: {
    paddingBottom: '2%',
  },
  bathroomSizeOptionsRadioContainer: {
    alignSelf: 'center',
  },
});
