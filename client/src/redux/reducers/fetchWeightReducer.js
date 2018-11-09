import {
  FETCH_WEIGHT_BEGIN,
  FETCH_WEIGHT_SUCCESS,
  FETCH_WEIGHT_FAILURE,
} from '../types';

const initialState = {
  weight: { value: '0' },
  error: null,
};

const fetchWeightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEIGHT_BEGIN:
      return {
        ...state,
        error: null,
      };
    case FETCH_WEIGHT_SUCCESS:
      return {
        ...state,
        weight: action.payload.weight,
      };
    case FETCH_WEIGHT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default fetchWeightReducer;
