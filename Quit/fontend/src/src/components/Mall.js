import React, { Component } from "react";
import axios from "axios";

class Mall extends Component {
  state = {
    goodsData: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/goods").then((res) => {
      this.setState({
        goodsData: res.data,
      });
    });
  }

  addGoods = (goodsId) => {
    axios.get("http://localhost:8080/order/" + goodsId).then((res) => {
      console.log("add order success");
    });
  };

  render() {
    return (
      <div className="mall">
        {this.state.goodsData.length > 0 &&
          this.state.goodsData.map((res) => (
            <div className="card" key={res.id}>
              <img src={res.url} className="card-img-top" alt="goodsImg" />
              <div className="card-body">
                <h5 className="card-title">{res.name}</h5>
                <p className="card-text">
                  {res.price}元/{res.unit}
                </p>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => this.addGoods(res.id)}
                >
                  + add
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Mall;
