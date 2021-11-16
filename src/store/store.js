import { createStore, combineReducers } from 'redux';
import { wordsReducer } from './reducers/words';

const rootReducers = combineReducers({
    wordsReducer
})

export const store = createStore(rootReducers);