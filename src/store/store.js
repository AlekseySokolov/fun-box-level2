import { createStore , combineReducers } from 'redux';
import {cardStateReducer} from "../reducers/cardStateReducer";

const reducers = {
    cardState : cardStateReducer
};

const rootReducer = combineReducers(reducers);

export let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));