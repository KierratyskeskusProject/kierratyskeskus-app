export const PRODUCT = 'PRODUCT';

export function product(payload){
  return {
    type: PRODUCT,
    payload,
  }
}

const initialState = {
    id: null,
    title: '',
    images: [],
    shelf_no: null,
    date: null,
    description: '',
}

export default function(state = initialState, action){
  switch(action.type){
    case PRODUCT:
    return Object.assign({}, state, {
          id: action.payload.name,
          title: action.payload.title,
          images: action.payload.images,
          shelf_no: action.payload.shelf_no,
          date: action.payload.date,
          description: action.payload.description,
      })

      default: return state
  }
}
