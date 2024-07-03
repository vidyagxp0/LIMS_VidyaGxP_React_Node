import { OPEN_MODAL, CLOSE_MODAL, DELETE_ITEM, UPDATE_STATUS } from '../Actions/storageLocationActions';

const initialState = {
  modalOpen: false,
  data: [], // Initial state for your storage location data
};

const storageLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload.id), // Update based on your data structure
      };
    case UPDATE_STATUS:
      return {
        ...state,
        data: state.data.map(item =>
          item.id === action.payload.item.id ? { ...item, status: action.payload.status } : item
        ),
      };
    default:
      return state;
  }
};

export default storageLocationReducer;
