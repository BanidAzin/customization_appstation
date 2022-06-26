import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {responsiveFontSize} from '../utilities/responsive';
import {RadioButtonView} from './radioButtonView';

export const RenderMultipleColumnList = ({step, data}) => {
  const {colors} = useTheme();
  const {height} = useWindowDimensions();

  const ShuttersOptions = ({item}) => {
    return (
      <View
        style={[
          styles.shutterOptionsContainer,
          {
            backgroundColor: colors.background,
            height: height * 0.2,
          },
        ]}>
        <RadioButtonView />
        <View>
          <Text
            style={[
              styles.shutterOptionsText,
              {
                color: colors.text,
                fontSize: responsiveFontSize(24),
              },
            ]}>
            {item.value}
          </Text>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: responsiveFontSize(20),
            }}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const ConditionOptions = ({item}) => {
    return (
      <View
        key={item.id}
        style={[
          styles.conditionOptionsContainer,
          {
            backgroundColor: colors.background,
            height: height * 0.08,
          },
        ]}>
        <Text
          style={{
            color: colors.text,
            fontSize: responsiveFontSize(22),
          }}>
          {item.value}
        </Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    switch (step) {
      case 3:
        return <ShuttersOptions item={item} />;
      case 4:
        return <ConditionOptions item={item} />;
      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        columnWrapperStyle={styles.columnWrapperStyle}
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
  conditionOptionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    marginVertical: '2%',
  },
  shutterOptionsContainer: {
    width: '48%',
    padding: '5%',
    justifyContent: 'space-between',
  },
  shutterOptionsText: {
    paddingBottom: '15%',
  },
});
