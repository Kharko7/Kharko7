import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reduce"
import dialogsReducer from "./dialogs-reduce"
import trainingRedux from "./training-reduce"
import { composeWithDevTools } from "redux-devtools-extension";

let rootReducer = combineReducers({
  profileReducer,
  trainingRedux,
  dialogsPage: dialogsReducer,
});

let store = createStore(rootReducer, composeWithDevTools())



export default store;

