import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/product-reducer";
import { orderReducer } from "./reducers/order-reduser";



export const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const enhancer = composeEnhancers(applyMiddleware(thunk));

export const rootReducer = combineReducers({
    productReducer,
    orderReducer
});

export const store = createStore(rootReducer, enhancer);