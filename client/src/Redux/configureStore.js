import Users from "./users";
import Transactions from "./transactions";
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users : Users,
            transactions : Transactions
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}