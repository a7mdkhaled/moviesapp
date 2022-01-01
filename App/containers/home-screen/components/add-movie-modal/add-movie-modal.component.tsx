import React, {FC} from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput} from 'react-native';
import styles from './add-movie-modal.styles';

import {RNCamera} from 'react-native-camera';

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

type TextInputComponentProps = {
  placeholder: string;
  onChange: () => null;
};

export const TextInputComponent = ({
  placeholder,
  onChange,
}: TextInputComponentProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={text => onChange(text)}
      style={styles.textInput}
    />
  );
};

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

        <TextInputComponent onChange={setTitle} placeholder="Title" />
        <TextInputComponent onChange={setOverview} placeholder="overview" />
        <TextInputComponent
          onChange={setReleaseDate}
          placeholder="release_date"
        />
        <TextInputComponent onChange={setRating} placeholder="rating" />
        <RNCamera
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
        />
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

export default AddMovieModal;
