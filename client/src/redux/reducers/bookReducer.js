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
      return {
        ...state,
        book: action.payload.book,
      };
    case BOOK_FAILURE:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default bookReducer;
