import React, {FC, memo} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './add-movie-modal.styles';

import TextInputCustom from '../../../../components/text-input/text-input.component';

type Props = {
  visible: boolean;
  setAddToListModal: () => null;
  takePicture: () => null;
  LaunchImageGallery: () => null;
  fileuri: string;
  addToFavMoviesList: () => null;
  setTitle: () => null;
  setOverview: () => null;
  setReleaseDate: () => null;
  setRating: () => null;
};

/** modal to add the movies to the favorite list */

const AddMovieModal: FC<Props> = props => {
  const {
    visible,
    setAddToListModal,
    takePicture,
    LaunchImageGallery,
    fileuri,
    addToFavMoviesList,
    setTitle,
    setOverview,
    setReleaseDate,
    setRating,
  } = props;
  return (
    <Modal transparent={true} visible={visible} style={styles.modalStyles}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={setAddToListModal}>
          <Text style={styles.closeIcon}>X</Text>
        </TouchableOpacity>
        <Text>Add Movie</Text>

        <TextInputCustom onChange={setTitle} placeholder="Title" />
        <TextInputCustom onChange={setOverview} placeholder="overview" />
        <TextInputCustom onChange={setReleaseDate} placeholder="release_date" />
        <TextInputCustom onChange={setRating} placeholder="rating" />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={LaunchImageGallery}
            style={styles.galleryButton}>
            <Text style={styles.galleryText}> Gallery </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture} style={styles.cameraButton}>
            <Text style={styles.cameraText}> Camera </Text>
          </TouchableOpacity>
        </View>
        <Text>Uploaded file: {fileuri}</Text>

        <TouchableOpacity onPress={addToFavMoviesList}>
          <Text style={styles.addToMoviesText}> Add To My Movies </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default memo(AddMovieModal);
