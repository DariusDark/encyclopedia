import { Link, useHistory } from 'react-router-dom';

import './word.css';

function Word({ item: { title, subtitle } }) {
    return (
        <div className="word__container">
            <div className="word__body">
                <h4 className="word__title">{title}</h4>
                <p className="word__subtitle">{subtitle}</p>
                <Link to={`/translate/${title}`}>
                    <button className="btn btn__modal" onClick={() => {
                        
                    }}>See More</button>
                </Link>
            </div>

        </div>
    )
}

export default Word
