import {Dimensions, PixelRatio} from 'react-native';

const WIDTH = 356; //iPhone 11 Pro, X, Xs.
const HEIGHT = 812; //iPhone 11 Pro, X, Xs.

export const calcHeight = (size, enableResponsive = true) => {
  if (!enableResponsive) {
    return size;
  }
  var {height} = Dimensions.get('window');
  var percentage = (size / HEIGHT) * 100;
  var calculations = (percentage * height) / 100;
  calculations = Math.ceil(calculations);
  return PixelRatio.roundToNearestPixel(calculations);
};

export const calcWidth = (size, enableResponsive = true) => {
  if (!enableResponsive) {
    return size;
  }
  var {width} = Dimensions.get('window');
  var percentage = (size / WIDTH) * 100;
  var calculations = (percentage * width) / 100;
  calculations = Math.ceil(calculations);
  return PixelRatio.roundToNearestPixel(calculations);
};

export const calcFont = (size, enableResponsive = true) => {
  return calcWidth(size, enableResponsive);
};
