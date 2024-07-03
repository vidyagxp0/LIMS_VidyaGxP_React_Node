// Define action types
export const DELETE_ITEM = 'DELETE_ITEM';

// Action creator
export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});
