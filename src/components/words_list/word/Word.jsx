import { useState } from 'react';

import './word.css';

function Word({ item: { title, subtitle } }) {
    const [isModalActive, setModal] = useState(false);
    return (
        <div className="word__container">
            <div className="word__body">
                <h4 className="word__title">{title}</h4>
                <p className="word__subtitle">{subtitle}</p>
                <button className="btn btn__modal" onClick={() => {
                    setModal(true);
                }}>See More</button>
            </div>
            <div className={isModalActive ? "modal-screen active" : "modal-screen"} onClick={() => {
                setModal(false);
            }}>
                <div className="modal-screen__body" onClick={(event) => {
                    event.stopPropagation();
                }}>
                    <h4 className="modal-screen__title">{title}</h4>
                    <p className="modal-screen__subtitle">{subtitle}</p>
                    <button className="btn btn__modal modal-screen__btn-close" onClick={() => {
                        setModal(false);
                    }}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Word
