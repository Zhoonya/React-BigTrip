import {applyMiddleware, combineReducers, createStore} from "redux";
import {tripReducer} from "./trip-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    trip: tripReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
