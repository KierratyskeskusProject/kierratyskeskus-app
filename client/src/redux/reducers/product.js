import {PRODUCT} from '../actions/types'; // if more types are needed, import them from types

//define what the state should look like before interacting with it
const initialState = {
    id: null,
    title: 'no title',
    images: [],
    shelfNo: 0,
    date: null,
    description: 'no description',
    category: '',
}

export default function(state = initialState, action){ //sets state to the initialstate above to prevent state mutation
  switch(action.type){ //switch between different actions, if there is more than one.
    case PRODUCT: //take a type from types.js
      return Object.assign({}, state, { //Object.assign takes a copy of the state before updating it. Never directly update a state.
          id: action.payload.id, //id will be updated to whats in the payload.
          title: action.payload.title,
          images: action.payload.images,
          shelfNo: action.payload.shelfNo,
          date: new Date(),
          description: action.payload.description,
          category: action.payload.category,
      });

      default: return state // if non of the case/cases are called, then return the state as it is (initialstate).
  }
}
