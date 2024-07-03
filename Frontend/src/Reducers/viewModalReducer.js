import { UPDATE_STATUS } from '../Actions/viewModalActions';

const initialState = {
    currentItem: null, // Assume current item being viewed
  };
  const viewModalReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_STATUS:
        return {
          ...state,
          currentItem: {
            ...state.currentItem,
            status: action.payload.status, // Update status based on action payload
          },
        };
      default:
        return state;
    }
  };

export default viewModalReducer;
