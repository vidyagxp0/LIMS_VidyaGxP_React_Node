import { combineReducers } from 'redux';
import storageLocationReducer from './storageLocationReducer';
import viewModalReducer from './viewModalReducer';
import tableReducer from './tableReducer';
import deleteConfirmationModalReducer from './deleteConfirmationModalReducer';

const rootReducer = combineReducers({
  storageLocation: storageLocationReducer,
  viewModal: viewModalReducer,
  table: tableReducer,
  deleteConfirmationModal: deleteConfirmationModalReducer,
});

export default rootReducer;
