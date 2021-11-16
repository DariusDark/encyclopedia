import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Search from './components/search/Search.jsx';
import WordsList from './components/words_list/WordsList.jsx';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Search />
        <WordsList />
          <Switch>
            <Redirect to="/" />
          </Switch>
      </div>
    </div>
  );
}

export default App;
