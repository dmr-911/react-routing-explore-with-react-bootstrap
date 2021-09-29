import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import NoPage from './components/NoPage/NoPage';

function App() {
  const style = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div className="App">
      <Router>
        <NavLink to="/home" activeStyle={style}>
          Home
        </NavLink>
        <NavLink to="/friends" activeStyle={style}>
          Friends
        </NavLink>
        <NavLink to="/about" activeStyle={style}>
          About
        </NavLink>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoPage></NoPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
