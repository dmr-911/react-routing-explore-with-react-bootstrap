import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import About from './components/About/About';
import FreindDetails from './FriendDetails/FreindDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/friends">
              <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FreindDetails></FreindDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
