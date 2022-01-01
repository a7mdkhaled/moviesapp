import {API, uriSwitcher, domain} from './config.service';

/**
 * @param  {} url
 * @param  {} method="GET"
 * @param  {} data=null
 * @param  {} json=null
 * @param  {} encoded=false
 * @returns response json
 */

//a wrapper to handle our api calls
function requestWrapper(
  url,
  method = 'GET',
  json = null,
  data = null,
  encoded = false,
) {
  try {
    let type = 'multipart/form-data';

    if (json) type = 'application/json';

    if (encoded) type = 'application/x-www-form-urlencoded';

    // HEADERS

    const headers = {
      Accept: 'application/json',

      'Content-Type': type,
    };

    const args = {method, headers};

    if (data && method == 'POST' && !json) {
      const formData = new FormData();

      Object.keys(data).forEach(e => {
        if (data[e] instanceof Array || data[e] instanceof Object) {
          formData.append(e, JSON.stringify(data[e]));
        } else {
          formData.append(e, data[e]);
        }
      });

      args.body = formData;
    } else {
      args.body = data;
    }

    return fetch(url, args)
      .then(response => response.text())
      .then(text => text)
      .then(response => JSON.parse(response))
      .catch(error => {
        return error;
      });
  } catch (error) {}
}

// Movies apis
export const movies = {
  fetchMovies: params =>
    requestWrapper(
      uriSwitcher({
        apiKey: 'fetchMovies',
        urlParams: params ? params : '1',
      }),
      'GET',
      true,
    ),
};
