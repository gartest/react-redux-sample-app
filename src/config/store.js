import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";

//states
import categoriasState from "../Components/Categorias/state";
import productosState from "../Components/Productos/state";

//reducers
import categoriasReducer from "../Components/Categorias/reducer";
import productosReducer from "../Components/Productos/reducer";

const rootState = {
    categorias: categoriasState,
    productos: productosState,
};
const rootReducer = combineReducers({
    categorias: categoriasReducer,
    productos: productosReducer
});

let middlewares = [
    thunkMiddleware,
    logger
];

let store = createStore(rootReducer,rootState, applyMiddleware(...middlewares));

export default store;