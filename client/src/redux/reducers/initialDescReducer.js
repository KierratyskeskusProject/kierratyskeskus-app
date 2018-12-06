const LOAD = 'LOAD';
const CLEAR = 'CLEAR';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export const load = data => ({ type: LOAD, data });
export const clear = () => ({ type: CLEAR });

export default reducer;
