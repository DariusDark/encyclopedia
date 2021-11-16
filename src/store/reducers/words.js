import { SEARCH_WORD } from '../actions/words.js';

const initialState = {
    words: [{
        id: 1,
        title: 'Dinosaurus',
        subtitle: 'Dinosaurus is the greatest animal of past world, that existed about 3 millions years ago.'
    },
    {
        id: 2,
        title: 'Dariusus',
        subtitle: 'Dinosaur Dariusus is the most agressive with unstable mind, he can unexpectedly attack u and tear u appart, such animal existed 1000 eons ago'
    },
    {
        id: 3,
        title: 'Nozimusus',
        subtitle: 'Nozimusus is the greatest animal of present world, that exist in 2021, Nozimusus is the dangerous hunter in the night, his cave is dark and filled with smell of blood.'
    },
    {
        id: 4,
        title: 'Marufusus',
        subtitle: 'Marufusus is the Professional devil, he loves drom, kiss drom, prom drom, drom drom, dom dorom dororom, guy have no girlfriend 4 years.'
    }],
    searchResult: null
}

export const wordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WORDS':
            return addWords(state, action.payload);
        case SEARCH_WORD:
            return findWord(state, action.payload);
        default:
            return state;
    }
}

const findWord = (state, value) => {
    const { words } = state;
    let searchResult = words.filter(item => item.title.includes(value));
    if (value === '') {
        return {
            ...state,
            searchResult: null
        }
    }
    return {
        ...state,
        searchResult: [...searchResult]
    };
}

const addWords = (state, words) => {
    //There is anything that i can set in state by this function
    return state
}
