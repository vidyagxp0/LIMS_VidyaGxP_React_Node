import { DELETE_ITEM } from './deleteConfirmationModalActions';

const initialState = {
  // Define initial state if needed
};

const deleteConfirmationModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      // Handle delete item logic if needed
      return state; // Update state as per your requirement
    default:
      return state;
  }
};

export default deleteConfirmationModalReducer;
