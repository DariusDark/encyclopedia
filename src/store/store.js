import { createStore, combineReducers } from 'redux';
import { wordsReducer } from './reducers/words';
import {exactWordReducer} from './reducers/exactWord';

const rootReducers = combineReducers({
    wordsReducer,
    exactWordReducer
})

export const store = createStore(rootReducers);