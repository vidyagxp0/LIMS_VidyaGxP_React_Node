import { DELETE_ITEM } from './tableActions';

const initialState = {
  // Define initial state for your table data if needed
  data: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload.id), // Update based on your data structure
      };
    default:
      return state;
  }
};

export default tableReducer;
