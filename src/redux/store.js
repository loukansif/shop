import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducerPhone from "./phone/reducerPhone";
import reducerTv from "./tv/reducerTv";
import reducerComment from "./comments/reducerComments";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  phone: reducerPhone,
  television: reducerTv,
  comments: reducerComment,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
