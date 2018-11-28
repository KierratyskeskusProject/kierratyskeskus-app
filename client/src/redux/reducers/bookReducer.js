import { BOOK_SUCCESS, BOOK_FAILURE } from '../types';

const initialState = {
  authors: [],
  title: '',
  description: '',
  pageCount: null,
  publisher: '',
  publishedDate: null,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_SUCCESS:
      console.log('book success');
      return {
        // ...state,
        // book: action.payload.book,
        book: null,
      };
    case BOOK_FAILURE:
      console.log('book error');
      return {
        // ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default bookReducer;
