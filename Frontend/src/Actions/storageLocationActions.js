// Define action types
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_STATUS = 'UPDATE_STATUS';

// Action creators
export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});

export const updateStatus = (item, status) => ({
  type: UPDATE_STATUS,
  payload: { item, status },
});
