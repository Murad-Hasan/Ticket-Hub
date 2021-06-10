import React, { createContext, useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Destination from './Pages/Destination/Destination';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <PrivateRouter path='/destination/:id'>
              <Destination/>
          </PrivateRouter>
          <PrivateRouter path='/destination'>
              <Destination/>
          </PrivateRouter>
          <Route path='/login'>
              <Login/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
