/* eslint-disable import/prefer-default-export */
import { PRODUCT } from './types'; // type is imported.

// the function to update the product state.
// takes a type and payload.
// payload is the data send to the function.
// see how the payload is used in reducers
export function productInfo(payload) {
  return {
    type: PRODUCT,
    payload,
  };
}
