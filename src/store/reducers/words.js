import { INPUT_VALUE, SEARCH_WORDLIST, SET_FETCHING } from '../actions/words.js';

const initialState = {
    wordList: null,
    searchValue: '',
    isFetching: false
}

export const wordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_VALUE: 
            return inputValue(state, action.payload);
        case SEARCH_WORDLIST:
            return searchWordList(state, action.payload);
        case SET_FETCHING:
            return setFetching(state, action.payload);
        default:
            return state;
    }
}

const setFetching = (state, bool) => {
    return {
        ...state,
        isFetching: bool
    }
}

const inputValue = (state, value) => {
    return {
        ...state,
        searchValue: value
    }
};

const searchWordList = (state, wordList) => {
    console.log('Reducer', wordList.items);
    let i = 1; //Temporary
    const words = wordList.items.map(item => {
        const newObj = {
            id: i++,
            title: item.heading,
            subtitle: item.lingvoTranslations
        };
        return newObj;
    });
    console.log('words after map', words)
    return {
        ...state,
        wordList: [...words],
        isFetching: false
    };
}