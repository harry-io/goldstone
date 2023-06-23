import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./users/users.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ userReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
