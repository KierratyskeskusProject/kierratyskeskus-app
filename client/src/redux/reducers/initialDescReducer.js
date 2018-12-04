const LOAD = 'LOAD';

const initialState = {
  title: null,
  description: null,
  category: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data,
      };
    default:
      return state;
  }
};

export const load = data => ({ type: LOAD, data });

export default reducer;
