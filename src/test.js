import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"

const store = createStore(reducers, applyMiddleware(thunk))