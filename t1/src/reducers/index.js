import { combineReducers } from "redux";
import { keys, selectedKey } from "./key";

import { routerReducer } from "./../rrr/reducer";

const rootReducer = combineReducers({
  keys,
  selectedKey,
  router: routerReducer
});

export default rootReducer;
