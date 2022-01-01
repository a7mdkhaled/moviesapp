import {Alert} from 'react-native';
import {movies} from '../services/api/api.service';

export const api = {
  async fetchMovies(data: string) {
    try {
      const response = await movies.fetchMovies(data);
      if (response.results) {
        return response;
      } else {
        Alert.alert(response?.error);
        return [];
      }
    } catch (error: any) {
      Alert.alert(error);
      return [];
    }
  },
};
