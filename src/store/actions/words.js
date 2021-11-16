export const SEARCH_WORD = 'SEARCH_WORD';

export const findWord = (value) => {
    return {
        type: SEARCH_WORD,
        payload: value
    }
}