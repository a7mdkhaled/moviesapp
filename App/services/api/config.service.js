// ---------------------- CONFIG ----------------------
const domain = '';

// ---------------------- APIS ----------------------

// we can use react native config to handle the envs keys of course..

const API = {
  fetchMovies: `https://api.themoviedb.org/3/discover/movie?api_key=2af133461cc649b3d75d39cd9801f77d&page=`,
};

/**
 * @param  {} apiKey
 * @param  {} =>params
 * @returns returndomain
 */
const uriSwitcher = ({apiKey, urlParams}) => {
  if (apiKey && API[apiKey] && urlParams) {
    return domain + API[apiKey] + urlParams;
  } else if (apiKey && API[apiKey]) {
    return domain + API[apiKey];
  }
  return 'not valid url';
};

export {API, uriSwitcher, domain};
