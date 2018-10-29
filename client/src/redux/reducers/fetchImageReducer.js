import {
  FETCH_IMAGE_BEGIN,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
  DELETE_IMAGE_BEGIN,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAILURE,
} from '../types';

const initialState = {
  images: [],
  loading: false,
  error: null,
};

const fetchImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        images: [...state.images, action.payload.image],
      };
    case DELETE_IMAGE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        images: [...state.images.filter(({ imageName }) => imageName !== action.payload.image)],
      };

    default:
      return state;
  }
};

export default fetchImageReducer;
