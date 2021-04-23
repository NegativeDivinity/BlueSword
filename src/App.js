import React from "react";
import { BrowserRouter as Router, Route, Switch, Component} from 'react-router-dom';
import "./style.css";

// Pages
import Home from './pages/home';
import Thank from './pages/thank';
import About from './pages/about';
import Work from './pages/work';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/about' component = {About} />
          <Route exact path = '/work' component = {Work} />
          <Route exact path = '/thank' component = {Thank} />
        </Switch>
      </Router>
    </div>
  );
}
