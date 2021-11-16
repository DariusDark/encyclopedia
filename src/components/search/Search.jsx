import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findWord } from '../../store/actions/words.js';

import './search.css';

function Search() {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState();

    return (
        <div className="search">
            <h1 className="search__title">Encyclopedia of Dinosaurus</h1>
            <form className="search__form"
                onSubmit={(event) => {
                    event.preventDefault();
                    dispatch(findWord(searchValue))
                }}>
                <div className="search__row">
                    <div className="input__container">
                        <input
                            className="input input-search"
                            required
                            type="text"
                            placeholder="Type Something here"
                            onInput={(event) => {
                                setSearchValue(event.target.value);
                                dispatch(findWord(event.target.value))
                            }}
                        />
                        <span className="input-background"></span>
                    </div>
                    <div className="button__container">
                        <button className="btn btn-submit" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
