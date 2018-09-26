import { POST_FORM } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case POST_FORM:
      console.log(action.payload.data);
      break;
    default:
      return state;
    }
}