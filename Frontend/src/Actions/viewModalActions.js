// Define action types
export const UPDATE_STATUS = 'UPDATE_STATUS';

// Action creator
export const updateStatus = (item, status) => ({
  type: UPDATE_STATUS,
  payload: { item, status },
});
