export const POST_FORM_SUCCESS = 'POST_FORM_SUCCESS';
export const FETCH_IMAGE_BEGIN = 'FETCH_IMAGE_BEGIN';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE';
export const DELETE_IMAGE_BEGIN = 'DELETE_IMAGE_BEGIN';
export const DELETE_IMAGE_SUCCESS = 'DELETE_IMAGE_SUCCESS';
export const DELETE_IMAGE_FAILURE = 'DELETE_IMAGE_FAILURE';
export const FETCH_WEIGHT_BEGIN = 'FETCH_WEIGTH_BEGIN';
export const FETCH_WEIGHT_SUCCESS = 'FETCH_WEIGHT_SUCCESS';
export const FETCH_WEIGHT_FAILURE = 'FETCH_WEIGHT_FAILURE';
export const FETCH_TEMPLATES_BEGIN = 'FETCH_TEMPLATES_BEGIN';
export const FETCH_TEMPLATES_SUCCESS = 'FETCH_TEMPLATES_SUCCESS';
export const FETCH_TEMPLATES_FAILURE = 'FETCH_TEMPLATES_FAILURE';
export const CLEAR_IMAGES = 'CLEAR_IMAGES';
export const CLEAR_WEIGHT = 'CLEAR_WEIGHT';


export const fetchWeightBegin = () => ({
  type: FETCH_WEIGHT_BEGIN,
});

export const fetchWeightSuccess = weight => ({
  type: FETCH_WEIGHT_SUCCESS,
  payload: { weight },
});

export const fetchWeightFailure = error => ({
  type: FETCH_WEIGHT_FAILURE,
  payload: { error },
});

export const clearWeight = () => ({
  type: CLEAR_WEIGHT,
});

export const postFormSuccess = formData => ({
  type: POST_FORM_SUCCESS,
  payload: { formData },
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

export const deleteImageBegin = () => ({
  type: DELETE_IMAGE_BEGIN,
});

export const deleteImageSuccess = (response, image) => ({
  type: DELETE_IMAGE_SUCCESS,
  payload: { response, image },
});

export const deleteImageFailure = error => ({
  type: DELETE_IMAGE_FAILURE,
  payload: { error },
});

export const clearImages = () => ({
  type: CLEAR_IMAGES,

});

export const fetchTemplatesBegin = () => ({
  type: FETCH_TEMPLATES_BEGIN,
});

export const fetchTemplatesSuccess = templates => ({
  type: FETCH_TEMPLATES_SUCCESS,
  payload: { templates },
});

export const fetchTemplatesFailure = error => ({
  type: FETCH_TEMPLATES_FAILURE,
  payload: { error },
});
