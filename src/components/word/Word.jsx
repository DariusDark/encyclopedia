import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { keygenerator } from '../../keygenerator/keygenerator';

import './word.css';

import { fetchSearchExactWord } from '../../axios/axios';
import Translation from './translation/Translation.jsx';

function Word({ match: { params: { word } } }) {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchSearchExactWord(word, dispatch);
    }, [word, dispatch])

    const translations = useSelector(state => state.exactWordReducer.word);
    // console.log('HERE TRANSLATIONS', translations);
    return (
        <>
            {translations ? translations.map(item => <Translation key={keygenerator()} item={item} />) : null}
        </>
    )
}

export default Word
