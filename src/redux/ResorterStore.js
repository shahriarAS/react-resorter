import { createStore } from "redux"
import ResorterReducer from "./ResorterReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(ResorterReducer, composeWithDevTools())

export default store