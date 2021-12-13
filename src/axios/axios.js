import { searchWordList } from '../store/actions/words';
import {addExactWord} from '../store/actions/exactWord';

export const fetchSearchWordList = async (searchValue, dispatch) => {
    try {
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
        
        dispatch(addExactWord(word));
    } catch (error) {
        console.log(error);
    }
}

// (async () => {
//     let auth = await fetch(`https://developers.lingvolive.com/api/v1.1/authenticate`, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: {
//             'Authorization': 'Basic OGQzNjgwOTUtNmUzNi00MGQ5LWE3NDYtZTQ1YTI0NDk1M2YwOjYzYzM2MjQwMGI5NjRjNTlhNDBjMjM1NzFkMDRmMmE2'
//         }
//     })
//     let data = await auth.json();
//     console.log(data);
// })()