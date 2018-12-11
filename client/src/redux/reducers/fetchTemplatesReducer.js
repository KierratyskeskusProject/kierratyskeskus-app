import {
  FETCH_TEMPLATES_BEGIN,
  FETCH_TEMPLATES_FAILURE,
  FETCH_TEMPLATES_SUCCESS,
  SAVE_TEMPLATES_BEGIN,
  SAVE_TEMPLATES_FAILURE,
  SAVE_TEMPLATES_SUCCESS,
} from '../types';

const initialState = {
  templates: [],
  loading: false,
  error: null,
};

const fetchTemplatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEMPLATES_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_TEMPLATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_TEMPLATES_SUCCESS:
      return {
        ...state,
        loading: false,
        templates: action.payload.templates,
      };
    case SAVE_TEMPLATES_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SAVE_TEMPLATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SAVE_TEMPLATES_SUCCESS:
      return {
        ...state,
        loading: false,
        templates: [...state.templates, action.payload.templates],
      };
    default:
      return state;
  }
};

export default fetchTemplatesReducer;
