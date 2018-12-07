import { FETCH_TEMPLATES_BEGIN, FETCH_TEMPLATES_FAILURE, FETCH_TEMPLATES_SUCCESS } from '../types';

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
        templates: [...state.templates, action.payload.templates],
      };
    default:
      return state;
  }
};

export default fetchTemplatesReducer;
