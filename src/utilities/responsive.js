import {Dimensions, PixelRatio} from 'react-native';

export const responsiveFontSize = (size, multiplier = 2) => {
  const {width, height} = Dimensions.get('window');

  const scale = (width / height) * multiplier;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
