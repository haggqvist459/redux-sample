import { combineReducers } from "redux";
import visibilityFilter from "./visibilityReducers";
import items from "./itemReducers";

export default combineReducers({ items, visibilityFilter });
