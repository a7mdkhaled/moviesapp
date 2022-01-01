import {StyleSheet} from 'react-native';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../../../services/helpers/responsive-helper.service';

export default StyleSheet.create({
  ButtonStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 60,
    height: calcHeight(60),
    backgroundColor: '#0a6000',
    justifyContent: 'center',
    borderRadius: 100 / 2,
  },
  plusText: {fontSize: calcFont(30), textAlign: 'center'},

  modalContainer: {
    height: '80%',
    marginTop: 'auto',
    backgroundColor: 'white',
    opacity: 0.9,
    alignItems: 'center',
    paddingTop: 20,
  },
  addToMoviesText: {
    marginBottom: calcHeight(40),
    backgroundColor: 'green',
    borderRadius: 12,
    padding: 20,
    marginTop: calcHeight(20),
  },
  addMovieButton: {
    textAlign: 'center',
    fontSize: calcFont(20),
    fontWeight: 'bold',
  },
  closeIcon: {
    color: 'red',
    marginBottom: calcHeight(20),
    fontSize: calcFont(20),
  },
  galleryButton: {marginBottom: 10, marginRight: 30},
  galleryText: {fontSize: calcFont(20)},
  cameraText: {fontSize: calcFont(20)},
  cameraButton: {marginBottom: 20},
  modalStyles: {maxHeight: 300, alignSelf: 'flex-end'},
});
