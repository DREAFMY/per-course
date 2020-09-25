import React, { Component } from "react";

const imgUrl = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2693181789,3140146792&fm=26&gp=0.jpg";

class Mall extends Component {
  state = {
    goodsData: [
      { id: 1, name: "可乐", price: 2, unit: "听", url: imgUrl },
      { id: 2, name: "可乐af", price: 4, unit: "听", url: imgUrl },
      { id: 3, name: "可乐adva", price: 6, unit: "听", url: imgUrl },
      { id: 4, name: "可afa乐", price: 3, unit: "听", url: imgUrl },
      { id: 5, name: "可asv乐", price: 5, unit: "听", url: imgUrl },
    ],
  };
  render() {
    return (
      <div className="mall">
        {this.state.goodsData.map((res) => (
          <div className="card" key={res.id}>
            <img src={res.url} className="card-img-top" alt="goodsImg" />
            <div className="card-body">
              <h5 className="card-title">{res.name}</h5>
              <p className="card-text">
                {res.price}元/{res.unit}
              </p>
              <a href="#" className="btn btn-outline-dark">
                + add
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Mall;