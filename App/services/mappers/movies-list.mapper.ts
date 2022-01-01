/**
 * @param   data
 * @returns mapping movies list
 */

/** to map the list into any form and naming convetion */

type moviesModal = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  overview: string;
  data: {
    results: [];
  };
  results: [];
};

const mapToUiModel = (data: moviesModal) => {
  let moviesObject: object = {};
  if (data?.results) {
    const {results} = data;
    Object.values(results).map(element => {
      return (moviesObject[`p${element.id}`] = mapItemToUiModel(element));
    });
  }
  return moviesObject;
};

const mapItemToUiModel = (data: moviesModal) => {
  if (data) {
    const {title, poster_path, release_date, vote_average, overview, id} = data;
    return {
      id: id || '',
      title: title || '',
      poster_path: poster_path || '',
      release_date: release_date || '',
      vote_average: vote_average || '',
      overview: overview || '',
    };
  }
};

export const MoviesListMapper = {mapToUiModel};
