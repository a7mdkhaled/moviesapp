import {Dimensions, StyleSheet} from 'react-native';
import {calcHeight} from '../../../../services/helpers/responsive-helper.service';

export default StyleSheet.create({
  Container: {
    width: Dimensions.get('window').width / 2.5,
    marginRight: 10,
    height: calcHeight(60),
    borderColor: 'gray',
    borderWidth: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
