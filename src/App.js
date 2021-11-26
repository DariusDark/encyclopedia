import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Search from './components/search/Search.jsx';
import WordsList from './components/words_list/WordsList.jsx';
import Word from './components/word/Word.jsx';

function App() {

  return (
    <div className="wrapper">
      <div className="container">
        <Search />
        <Switch>
          <Route exact path="/" component={WordsList} />
          <Route path={`/translate/:word`} component={Word} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
