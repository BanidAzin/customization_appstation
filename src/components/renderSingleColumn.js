import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
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

  const LengthInputRef = useRef();
  const WidthInputRef = useRef();

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

  const CabanaSizeOptions = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          item.value === 'Length'
            ? LengthInputRef.current.focus()
            : WidthInputRef.current.focus()
        }>
        <View
          style={[
            styles.cabanaSizeOptionsContainer,
            {
              backgroundColor: colors.background,
              borderColor: colors.selctedItemBorder,
            },
          ]}>
          <Text
            style={[
              styles.cabanaSizeText,
              {
                color: colors.secondaryText,
                fontSize: responsiveFontSize(18),
              },
            ]}>
            {item.value}
          </Text>
          <TextInput
            ref={item.value === 'Length' ? LengthInputRef : WidthInputRef}
            defaultValue={item.value === 'Length' ? '3.5' : '6'}
            value={customisationState?.cabana?.[item.value]}
            onChangeText={text => {
              console.log(text);
              // onPress({
              //   ...customisationState,
              //   cabana: {
              //     ...customisationState.cabana,
              //     [item.value]: text,
              //   },
              // })
            }}
            style={[
              styles.cabanaSizeTextInput,
              {
                color: colors.text,
                fontSize: responsiveFontSize(20),
              },
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      {step === 1 &&
        data.map(item => {
          return <CabanaSizeOptions key={item.id} item={item} />;
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
  cabanaSizeOptionsContainer: {
    marginVertical: '3%',
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderWidth: 1,
  },
  cabanaSizeText: {
    paddingBottom: '2%',
  },
  cabanaSizeTextInput: {
    flexGrow: 1,
    fontWeight: '500',
    width: '80%',
  },
});
