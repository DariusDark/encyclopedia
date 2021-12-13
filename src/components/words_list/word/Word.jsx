import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActive } from '../../../store/actions/words.js';

import './word.css';

function Word({ item: { title, subtitle } }) {
    const dispatch = useDispatch();
    return (
        <Link className="word__link" to={`/translate/${title}`} onClick={() => {
            dispatch(setActive(false));
        }}>
            <div className="word__container">
                <div className="word__body">
                    <h4 className="word__title">{title}</h4>
                    <span className="word__dash">&mdash;</span>
                    <p className="word__subtitle">{subtitle}</p>
                </div>
            </div>
        </Link>
    )
}

export default Word
