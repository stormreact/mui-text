import { SELECT_KEY, ADD_KEY } from "../actions";

export function selectedKey(state = "repo1", action) {
  switch (action.type) {
    case SELECT_KEY:
      return action.key;
    default:
      return state;
  }
}

export const keys = (state = ["repo1", "repo2", "repo3"], action) => {
  switch (action.type) {
    case ADD_KEY:
      return [...state, action.key];
    default:
      return state;
  }
};
