import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Mall from './Mall';
import List from './List';
import Add from "./Add";
import Header from "./Header";

class App extends Component {
  state = {
    list: [
      { id: 1, name: "可乐", price: 20, num: 1, unit: "听", url: "sfafaffa" },
    ],
  };
  addList = (data) => {
    console.log(data)
    // if (!data) return;
    // let isFind = false;
    // let temp = this.state.list;
    // this.state.list.map((i, index) => {
    //   if (i.id == data.id) {
    //     temp[index].num += 1;
    //     isFind = true;
    //   }
    // });
    // if (!isFind) {
    //   temp.push(data);
    // }
    // this.setState({
    //   list: temp,
    // });
  };
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
                component={() => <Mall addList={this.addList} />}
              />
              <Route
                exact
                path="/list"
                component={() => <List listData={this.state.list} />}
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
