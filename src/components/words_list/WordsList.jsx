import { useSelector } from 'react-redux';
import './words-list.css';
import Word from './word/Word.jsx';

function WordsList() {

    const isFetching = useSelector(state => state.wordsReducer.isFetching);
    const words = useSelector((state) => {
        return state.wordsReducer.wordList;
    });

    console.log(isFetching);

    return (
        <div className="words-list">
            <div className="words-list__row">
                {isFetching ?
                    <div className="loader"></div>
                : words !== null ?
                        words.length ? words.map(item => <Word key={item.id} item={item} />) : <div className="match-error">No Matching Result</div>
                        : <div style={{ margin: '0px auto' }}>HELLO</div>
                }
            </div>
        </div>
    )
}

export default WordsList
