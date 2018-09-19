import { PERSON } from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PERSON:
      return Object.assign({}, state, {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      });
    default: return state;
  }
}
