import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./pages/home";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/form/:query" component={HomePage}></Route>
        <Route path="/form/" component={HomePage}></Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
