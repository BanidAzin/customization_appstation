import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {responsiveFontSize} from '../utilities/responsive';
import {RadioButtonView} from './radioButtonView';

export const RenderSingleColumnList = ({step, data}) => {
  const {colors} = useTheme();

  const BathroomSizeOptions = ({item}) => {
    return (
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
          <RadioButtonView />
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    switch (step) {
      case 1:
        return <BathroomSizeOptions item={item} />;
      case 2:
        return <BathroomSizeOptions item={item} />;
      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
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
