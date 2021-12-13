export const SEARCH_WORDLIST = 'SEARCH_WORDLIST';
export const INPUT_VALUE = 'INPUT_VALUE';
export const SET_FETCHING = 'SET_FETCHING';
export const SET_ACTIVE = 'SET_ACTIVE';

export const setActive = (bool) => {
    return {
        type: SET_ACTIVE,
        payload: bool
    }
}

export const setFetching = (bool) => {
    return {
        type: SET_FETCHING,
        payload: bool
    }
}

export const inputValue = (value) => {
    return {
        type: INPUT_VALUE,
        payload: value
    }
}

export const searchWordList = (wordList) => {
    return {
        type: SEARCH_WORDLIST,
        payload: wordList
    }
}