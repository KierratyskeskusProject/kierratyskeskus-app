import {PRODUCT} from './types';
export function productInfo(payload){
  return {
    type: PRODUCT,
    payload,
  }
}
