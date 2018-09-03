export const SIMPLE_ACTION = 'SIMPLE_ACTION';

export function getInfo(payload){
  return {
    type: SIMPLE_ACTION,
    payload,
  }
}

const initialState = {
    name: '',
    age: '',
}

export default function(state = initialState, action){
  switch(action.type){
    case SIMPLE_ACTION:
    return Object.assign({}, state, {
          name: action.payload.name,
          age: action.payload.image
      })

      default: return state
  }
}
