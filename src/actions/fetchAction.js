import store from '../store';
export const fetch_post = () => {
  return {
    type: 'FETCH_GIF',
  };
};
export const receive_post = post => {
  return {
    type: 'FETCHED_GIF',
    data: post,
  };
};
export const receive_error = () => {
  return {
    type: 'RECEIVE_ERROR',
  };
};
export const thunk_action_creator = gif => {
  const api_key = 'rH6iOk2mnPTQlMypGV2SNgh3Qqdf2cdr';
  store.dispatch(fetch_post());
  return function(dispatch, getState) {
    return fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${gif}&limit=100`,
    )
      .then(data => data.json())
      .then(data => {
        if (data.meta.msg === 'Not Found') {
          throw new Error('no such error');
        }
        dispatch(receive_post(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};
