import { useSelector } from 'react-redux';
import './words-list.css';
import Word from './word/Word.jsx';

function WordsList() {

    const words = useSelector((state) => {
        if (state.wordsReducer.searchResult === null) {
            return state.wordsReducer.words;
        }
        return state.wordsReducer.searchResult;
    });

    return (
        <div className="words-list">
            <div className="words-list__row">
                {words.length ? words.map(item => <Word key={item.id} item={item}/>): <div className="match-error">No Matching Result</div>}
            </div>
        </div>
    )
}

export default WordsList
