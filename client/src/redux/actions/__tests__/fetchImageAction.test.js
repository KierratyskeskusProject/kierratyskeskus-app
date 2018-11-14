import {
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
  FETCH_IMAGE_BEGIN,
  fetchImageSuccess,
  fetchImageFailure,
  fetchImageBegin,
} from '../../types/index';

describe('fetchImageSuccess', () => {
  it('has the correct type of FETCH_IMAGE_SUCCESS', () => {
    const action = fetchImageSuccess();

    expect(action.type).toEqual(FETCH_IMAGE_SUCCESS);
  });

  it('has the correct payload', () => {
    const action = fetchImageSuccess('New Comment');

    expect(action.payload.image).toEqual('New Comment');
  });
});

describe('fetchImageFailure', () => {
  it('has the correct type of FETCH_IMAGE_FAILURE', () => {
    const action = fetchImageFailure();

    expect(action.type).toEqual(FETCH_IMAGE_FAILURE);
  });

  it('has the correct payload', () => {
    const action = fetchImageSuccess('New Comment');

    expect(action.payload.image).toEqual('New Comment');
  });
});

describe('fetchImaggeBegin', () => {
  it('has the correct type of FETCH_IMAGE_BEGIN', () => {
    const action = fetchImageBegin();

    expect(action.type).toEqual(FETCH_IMAGE_BEGIN);
  });
});
