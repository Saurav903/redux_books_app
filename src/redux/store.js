import {legacy_createStore,compose,applyMiddleware} from "redux";

import thunk from "redux-thunk";

import { bookReducer } from "./booksdetails/books.reducer";

const composeEnghancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(bookReducer,composeEnghancer(applyMiddleware(thunk)));