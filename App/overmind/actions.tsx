import {MoviesListMapper} from '../services/mappers/movies-list.mapper';

//fetching movies

interface Fetching {
  state: any;
  effects: any;
  params: string;
}
export const fetchMovies = async (
  {state, effects}: Fetching,
  params: Fetching,
) => {
  state.movies.loading = true;
  const movies = await effects.api.fetchMovies(params);
  if (movies) {
    const mappedData = MoviesListMapper.mapToUiModel(movies);
    if (state.movies.list) {
      state.movies.list = [...state.movies.list, ...Object.values(mappedData)];
      state.movies.loading = false;
    } else {
      state.movies.list = mappedData;
    }
  }
  state.movies.loading = false;
};

//adding movies to fav list

interface FavList {
  state: any;
  params: [];
}
export const addToFavList = async ({state}: FavList, params: FavList) => {
  state.movies.favoriteList = [...state.movies.favoriteList, ...params];
};
