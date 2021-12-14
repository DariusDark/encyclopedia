import { INPUT_VALUE, SEARCH_WORDLIST, SET_FETCHING, SET_ACTIVE } from '../actions/words.js';

const initialState = {
    wordList: null,
    searchValue: '',
    isFetching: false,
    isActive: false
}

export const wordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_VALUE: 
            return inputValue(state, action.payload);
        case SEARCH_WORDLIST:
            return searchWordList(state, action.payload);
        case SET_FETCHING:
            return setFetching(state, action.payload);
        case SET_ACTIVE: 
            return setActive(state, action.payload);
        default:
            return state;
    }
}

const setActive = (state, bool) => {
    return {
        ...state,
        isActive: bool
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
        searchValue: value,
        isActive: value ? true : false
    }
};

const searchWordList = (state, wordList) => {
    let i = 1; //Temporary
    const words = wordList.items.map(item => {
        const newObj = {
            id: i++,
            title: item.heading,
            subtitle: item.lingvoTranslations
        };
        return newObj;
    });
    return {
        ...state,
        wordList: [...words],
        isFetching: false,
    };
}