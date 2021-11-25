import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputValue, setFetching } from '../../store/actions/words.js';
import { fetchSearchWordList } from '../../axios/axios.js';

import './search.css';

function Search() {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => {
        return state.wordsReducer.searchValue;

    })
    useEffect(() => {
        console.log('useEffect');
    }, [])


    return (
        <div className="search">
            <h1 className="search__title">Encyclopedia of Dinosaurus</h1>
            <form className="search__form"
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log('submit');
                }}>
                <div className="search__row">
                    <div className="input__container">
                        <input
                            className="input input-search"
                            required
                            type="text"
                            placeholder="Type Something here"
                            value={searchValue}
                            onInput={(event) => {
                                const value = event.target.value;
                                dispatch(inputValue(value));
                                if (value.length) {
                                    dispatch(setFetching(true));
                                    fetchSearchWordList(value, dispatch);
                                }
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
