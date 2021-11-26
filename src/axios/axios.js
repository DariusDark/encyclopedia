import { searchWordList } from '../store/actions/words';
import {addExactWord} from '../store/actions/exactWord';

export const fetchSearchWordList = async (searchValue, dispatch) => {
    try {
        // let data = await fetch(`https://api.lingvolive.com/Translation/Examples?text=${searchValue}&dstLang=1049&srcLang=1033&pageSize=15&startIndex=0`);
        let data = await fetch(`https://api.lingvolive.com/Translation/WordListPart?prefix=${searchValue}&srcLang=1033&dstLang=1049&pageSize=10&startIndex=0`);
        let wordList = await data.json();
        
        dispatch(searchWordList(wordList));
    } catch (error) {
        console.log(error);
    }
}

export const fetchSearchExactWord = async (searchValue, dispatch) => {
    try {
        let data = await fetch(`https://api.lingvolive.com/Translation/Translate?text=${searchValue}&srcLang=1033&dstLang=1049&returnJsonArticles=true`);
        let word = await data.json();
        console.log(word);
        dispatch(addExactWord(word));
    } catch (error) {
        console.log(error);
    }
}