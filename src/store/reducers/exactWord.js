import { ADD_WORD } from '../actions/exactWord.js';

const initialStage = {
    word: null,
    isFetching: false
}


export const exactWordReducer = (state = initialStage, action) => {
    switch (action.type) {
        case ADD_WORD:
            return addExactWord(state, action.payload);
        default:
            return state;
    }
}

const addExactWord = (state, translations) => {
    return {
        ...state,
        word: [...translations.lingvoArticles,]
    }
}