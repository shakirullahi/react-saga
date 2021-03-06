import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducer";
import {composeWithDevTools} from "redux-devtools-extension"

const configureStore = ()=>{
      return createStore(combineReducers({
        entries:entriesReducer
      }),composeWithDevTools());
}

export default configureStore;

