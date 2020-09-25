import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutMe from './AboutMe';
import Products from './Products'
import ProductDetails from './ProductDetails'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductDetails} />
            <Route exact path="/my-profile" component={MyProfile} />
            <Route exact path="/about-us" component={AboutMe} />
            <Redirect from="/*" to="/products" />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
