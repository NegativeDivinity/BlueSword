import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./style.css";

// Pages
import Home from "./pages/home";
import Thank from "./pages/thank";
import About from "./pages/about";
import Work from "./pages/work";
import ErrorPage from './pages/error';

// Personal Pages
import Ben from "./pages/ben";
import Mike from "./pages/mike";
import Ethan from './pages/ethan';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/thank" component={Thank} />
          <Route exact path="/ben" component={Ben} />
          <Route exact path='/mike' component={Mike} />
          <Route exact path='/ethan' component={Ethan} />
          <Route exact path='/error' component={ErrorPage} />
          <Redirect to='/error' />
        </Switch>
      </Router>
    </div>
  );
}
