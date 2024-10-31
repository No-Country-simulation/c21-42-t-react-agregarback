import { legacy_createStore } from "redux";
import reducer from "../reducers";

const store = legacy_createStore(reducer)

store.subscribe(() => console.log(store));

export default store;