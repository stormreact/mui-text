export const ADD_KEY = "ADD_KEY";
export const SELECT_KEY = "SELECT_KEY";

export const addKey = key => ({
  type: ADD_KEY,
  key
});

export const selectKey = key => ({
  type: SELECT_KEY,
  key
});
