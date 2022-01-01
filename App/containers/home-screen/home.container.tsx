/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, FC, memo} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useOvermind, useActions} from '../../overmind';
import {
  calcHeight,
  calcWidth,
} from '../../services/helpers/responsive-helper.service';
import FloatButton from './components/float-button/float-button.component';
import HeaderButtons from './components/header-buttons/header-buttons.component';
import styles from './home.styles';
import AddMovieModal from './components/add-movie-modal/add-movie-modal.component';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const Home: FC = () => {
  const [activeContent, setActiveContent] = useState<string>('All');
  const [pageNumber, setPageNumber] = useState(1);
  const [AddToListModal, setAddToListModal] = useState<boolean>(false);
  const [fileUri, setFileUri] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [overview, setOverview] = useState<string>('');
  const [releaseDate, setReleaseDate] = useState<string>('');
  const [rating, setRating] = useState<string>('');

  const {fetchMovies, addToFavList} = useActions();
  const {movies} = useOvermind();
  const {list, loading, favoriteList} = movies;

  useEffect(() => {
    fetchMoreMovies();
  }, []);

  const fetchMoreMovies = async () => {
    await setPageNumber(pageNumber + 1);
    fetchMovies(pageNumber);
  };

  const addToFavMoviesList = () => {
    const data = {
      title: title,
      overview: overview,
      release_date: releaseDate,
      vote_average: rating,
      localImage: fileUri,
    };
    addToFavList([data]);
    setAddToListModal(false);
  };
  const renderItem = ({item}) => {
    const favorited = favoriteList.filter(mov => mov.id === item.id);

    return (
      <View style={styles.renderedItemContainer}>
        {/**Favorite */}
        <TouchableOpacity
          onPress={() => addToFavList([item])}
          hitSlop={{top: 30, bottom: 30, right: 30, left: 30}}
          style={styles.heartIconButton}>
          <Image
            style={[
              styles.heartIcon,
              {
                tintColor: favorited.length ? 'red' : 'white',
              },
            ]}
            resizeMode="contain"
            source={
              favorited.length
                ? require('../../assets/filledheart.png')
                : require('../../assets/heart.png')
            }
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          {/** in case we're using this feature we should upload the images to the backend but since I'm not uploading to the backend here
           * item.localImage is just a naming to know the difference between the images that's coming from the backend and the local saved ones
           */}
          {item.localImage ? (
            <Image
              resizeMode="contain"
              style={{width: calcWidth(100), height: calcHeight(130)}}
              source={{
                uri: item.localImage,
              }}
            />
          ) : null}
          {item.poster_path ? (
            <Image
              resizeMode="contain"
              style={{width: calcWidth(100), height: calcHeight(130)}}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
            />
          ) : null}
          <View style={{width: '60%'}}>
            <Text style={styles.title}>{item.title}</Text>

            <Text numberOfLines={2} style={styles.overview}>
              {item.overview}
            </Text>
            <Text style={styles.releasedate}>Released {item.release_date}</Text>
          </View>
        </View>
        <View style={styles.voteaverage}>
          <Text style={styles.vote_average_text}>{item.vote_average}</Text>
        </View>
      </View>
    );
  };

  //to pick from the gallery
  const LaunchImageGallery = async () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setFileUri(response?.assets[0].uri);
      }
    });
  };

  //to take a picture

  const takePicture = async () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        setFileUri(response?.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.Container}>
      {/**Header */}
      <View style={styles.HeaderContainer}>
        <HeaderButtons
          active={activeContent === 'All'}
          onPress={() => setActiveContent('All')}
          title="All Movies"
        />
        <HeaderButtons
          active={activeContent === 'My'}
          onPress={() => setActiveContent('My')}
          title="My Movies"
        />
      </View>

      {/**Content */}
      {activeContent === 'All' && (
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id + String(index)}
          onEndReached={fetchMoreMovies}
          ListFooterComponent={() => !loading && <ActivityIndicator />}
        />
      )}

      {/**Fav List */}
      {favoriteList && activeContent === 'My' && (
        <FlatList
          data={favoriteList}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id + String(index)}
        />
      )}

      {/**Modal To Add Movie */}
      <AddMovieModal
        setAddToListModal={() => setAddToListModal(false)}
        visible={AddToListModal}
        LaunchImageGallery={LaunchImageGallery}
        takePicture={takePicture}
        fileuri={fileUri}
        setTitle={setTitle}
        setOverview={setOverview}
        setReleaseDate={setReleaseDate}
        setRating={setRating}
        addToFavMoviesList={addToFavMoviesList}
        title={title}
      />

      {/**The Floating button to open the add movies modal */}
      <FloatButton
        setAddToListModal={() => setAddToListModal(!AddToListModal)}
      />
    </View>
  );
};

export default memo(Home);
