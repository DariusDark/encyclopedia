import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './word.css';

import { fetchSearchExactWord } from '../../axios/axios';

function Word({ match: { params: { word } } }) {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchSearchExactWord(word, dispatch);

    }, [])

    const translations = useSelector(state => state.exactWordReducer.word);
    console.log('HERE TRANSLATIONS', translations);
    return (
        <div className="word">
            <h2 className="word__title">word</h2>
            <p className="word__description">Word description Word description Word descriptionWord descriptionWord descriptionWord description Word descriptionWord description Word description</p>
        </div>
    )
}

export default Word
