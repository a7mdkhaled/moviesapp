import {StyleSheet} from 'react-native';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../../../services/helpers/responsive-helper.service';

export default StyleSheet.create({
  ButtonStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: calcWidth(60),
    height: calcHeight(60),
    backgroundColor: '#0a6000',
    justifyContent: 'center',
    borderRadius: calcHeight(60) / 2,
  },
  plusText: {fontSize: calcFont(30), textAlign: 'center'},
});
