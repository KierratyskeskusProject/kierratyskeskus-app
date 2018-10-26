import fetchImageReducer from '../fetchImageReducer';
import { FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAILURE, FETCH_IMAGE_BEGIN } from '../../types';

const initialState = {
  images: [],
  loading: false,
  error: null,
};

it('handles action of type FETCH_IMAGE_SUCCESS', () => {
  const action = {
    type: FETCH_IMAGE_SUCCESS,
    payload: { image: 'new image' },
  };
  const newState = fetchImageReducer(initialState, action);

  expect(newState.images).toEqual(['new image']);
});

it('handles action of type FETCH_IMAGE_FAILURE', () => {
  const action = {
    type: FETCH_IMAGE_FAILURE,
    payload: { error: 'error' },
  };
  const newState = fetchImageReducer(initialState, action);

  expect(newState.error).toEqual('error');
});

it('handles action of type FETCH_IMAGE_BEGIN', () => {
  const action = {
    type: FETCH_IMAGE_BEGIN,
  };
  const newState = fetchImageReducer(initialState, action);
  expect(newState.loading).toEqual(true);
});

it('Handles action with unknown type', () => {
  const newState = fetchImageReducer(initialState, {});

  expect(newState).toEqual(initialState);
});
