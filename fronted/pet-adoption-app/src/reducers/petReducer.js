import { PET } from "../types";

const initialState = {};

export default function petReducer(state = initialState, action) {
    switch(action.type) {
        case PET:
            return action.payload;
        default:
            return state;
    }
}