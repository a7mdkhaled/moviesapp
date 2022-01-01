import {StyleSheet} from 'react-native';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../services/helpers/responsive-helper.service';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: calcHeight(16),
    paddingTop: calcHeight(20),
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: calcHeight(30),
  },
  renderedItemContainer: {
    height: calcHeight(150),
    marginBottom: calcHeight(30),
    backgroundColor: '#0a3640',
    justifyContent: 'center',
    borderRadius: 12,
  },
  heartIconButton: {
    position: 'absolute',
    right: 5,
    top: 0,
    zIndex: 1,
  },
  heartIcon: {
    width: calcWidth(25),
    height: calcHeight(25),
  },
  title: {
    fontSize: calcFont(16),
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'left',
  },
  overview: {
    fontSize: calcFont(12),
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'left',
    marginTop: calcHeight(16),
  },
  releasedate: {
    fontSize: calcFont(12),
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'left',
    marginTop: calcHeight(16),
  },
  voteaverage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'yellow',
  },
  vote_average_text: {
    fontSize: calcFont(20),
    color: 'black',
  },
});
