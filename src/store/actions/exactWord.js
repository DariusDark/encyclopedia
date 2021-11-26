export const ADD_WORD = 'ADD__WORD';


export const addExactWord = (translations) => {
    return {
        type: ADD_WORD,
        payload: translations
    }
}