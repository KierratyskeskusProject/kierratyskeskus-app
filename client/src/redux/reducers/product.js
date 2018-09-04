import {PRODUCT} from '../actions/types';


const initialState = {
    id: null,
    title: 'no title',
    images: [],
    shelfNo: 0,
    date: null,
    description: 'no description',
    category: '',
}

export default function(state = initialState, action){
  switch(action.type){
    case PRODUCT:
      return Object.assign({}, state, {
          id: action.payload.id,
          title: action.payload.title,
          images: action.payload.images,
          shelfNo: action.payload.shelfNo,
          date: new Date(),
          description: action.payload.description,
          category: action.payload.category,
      });

      default: return state
  }
}
