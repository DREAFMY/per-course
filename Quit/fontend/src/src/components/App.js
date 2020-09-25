import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Mall from './Mall';
import List from './List';
import Add from "./Add";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="body">
            <Switch>
              <Route
                exact
                path="/"
                component={Mall}
              />
              <Route
                exact
                path="/list"
                component={List}
              />
              <Route exact path="/add" component={Add} />
              <Route component={Mall} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
