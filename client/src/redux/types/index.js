export const POST_FORM_BEGIN = 'POST_FORM_BEGIN';
export const POST_FORM_SUCCESS = 'POST_FORM_SUCCESS';
export const POST_FORM_FAILURE = 'POST_FORM_FAILURE';
export const FETCH_IMAGE_BEGIN = 'FETCH_IMAGE_BEGIN';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE';

export const postFormBegin = () => ({
  type: POST_FORM_BEGIN,
});

export const postFormSuccess = formData => ({
  type: POST_FORM_SUCCESS,
  payload: { formData },
});

export const postFormFailure = error => ({
  type: POST_FORM_FAILURE,
  payload: { error },
});

export const fetchImageBegin = () => ({
  type: FETCH_IMAGE_BEGIN,
});

export const fetchImageSuccess = image => ({
  type: FETCH_IMAGE_SUCCESS,
  payload: { image },
});

export const fetchImageFailure = error => ({
  type: FETCH_IMAGE_FAILURE,
  payload: { error },
});