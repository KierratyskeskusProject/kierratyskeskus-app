import { PERSON } from './types';

export function personInfo(payload) {
  return {
    type: PERSON,
    payload,
  };
}
