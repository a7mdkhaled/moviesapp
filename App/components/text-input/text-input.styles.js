import {StyleSheet} from 'react-native';
import {
  calcHeight,
  calcWidth,
} from '../../services/helpers/responsive-helper.service';

export default StyleSheet.create({
  textInput: {
    color: 'black',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'gray',
    height: calcHeight(50),
    width: calcWidth(300),
    borderRadius: 12,
    paddingLeft: 12,
    marginBottom: calcHeight(10),
    marginTop: calcHeight(10),
  },
});
