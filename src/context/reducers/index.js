import { combineReducers } from "redux";
import userAuthReduce from "./userAuthReducer";

const myReducer = combineReducers({
    user : userAuthReduce
})

export default myReducer;