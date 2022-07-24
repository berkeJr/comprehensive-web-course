import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

// Burada reducer'larımızı obje şeklinde süslü parantez içerisinde veririz.

const reducers = combineReducers({
  counterReducer: counterReducer,
});

export default reducers;

