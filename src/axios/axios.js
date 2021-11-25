import { searchWordList } from '../store/actions/words';

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