import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Notfound from './components/NotFound/Notfound';
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetail from './components/friendDetail/FriendDetail';
import Culture from './components/Culture/Culture';

function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>
        <Switch>
          <Route path="/friends">
            <Friends>

            </Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>


          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
