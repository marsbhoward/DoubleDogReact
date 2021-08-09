import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GamePage from './containers/Game';
import SetupPage from './containers/SetupPage';
import HomePage from './containers/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" render={() => <HomePage/>} />
          <Route exact path="/setup" render={() => <SetupPage/>} />
          <Route exact path="/game" render={() => <GamePage/>} />
      </Router>
    </div>
  );
}

export default App;
