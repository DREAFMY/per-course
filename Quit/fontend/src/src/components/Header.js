import React, { Component } from "react";
import { NavLink } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-dark bg-dark">
          <div className="headItem">
            <NavLink exact to="/">
              商城
            </NavLink>
          </div>
          <div className="headItem">
            <NavLink exact to="/list">
              订单
            </NavLink>
          </div>
          <div className="headItem">
            <NavLink exact to="/add">
              添加商品
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
