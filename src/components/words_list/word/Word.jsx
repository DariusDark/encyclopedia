import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive, inputValue } from '../../../store/actions/words.js';

import './word.css';

function Word({ item: { title, subtitle } }) {
    const dispatch = useDispatch();
    return (
        <Link className="word-suggestion__link" to={`/translate/${title}`} onClick={() => {
            dispatch(setActive(false));
            dispatch(inputValue(title));
        }}>
            <div className="word-suggestion__container">
                <div className="word-suggestion__body">
                    <h4 className="word-suggestion__title">{title}</h4>
                    <span className="word-suggestion__dash">&mdash;</span>
                    <p className="word-suggestion__subtitle">{subtitle}</p>
                </div>
            </div>
        </Link>
    )
}

export default Word
