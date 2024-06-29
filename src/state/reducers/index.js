import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers =  combineReducers({
    amount : amountReducer,
    // .. other reducers
});

export default reducers;