import { combineReducers } from "redux";
import petReducer from "./petReducer";

const reducer = combineReducers({
    pet: petReducer
});

export default reducer;