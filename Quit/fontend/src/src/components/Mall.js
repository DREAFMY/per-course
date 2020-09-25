import React, { Component } from "react";

const imgUrl = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2693181789,3140146792&fm=26&gp=0.jpg";

class Mall extends Component {
  render() {
    return (
      <div className="mall">
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="goodsImg" />
          <div className="card-body">
            <h5 className="card-title">可乐</h5>
            <p className="card-text">1元/听</p>
            <a
              href="#"
              className="btn btn-outline-dark"
              onClick={this.props.addList({id:1, name:"可乐", price:20, num:1, unit:"听", url:"asfafaaf"})}
            >
              + add
            </a>
          </div>
        </div>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="goodsImg" />
          <div className="card-body">
            <h5 className="card-title">可乐</h5>
            <p className="card-text">1元/听</p>
            <a href="#" className="btn btn-outline-dark">
              + add
            </a>
          </div>
        </div>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="goodsImg" />
          <div className="card-body">
            <h5 className="card-title">可乐</h5>
            <p className="card-text">1元/听</p>
            <a href="#" className="btn btn-outline-dark">
              + add
            </a>
          </div>
        </div>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="goodsImg" />
          <div className="card-body">
            <h5 className="card-title">可乐</h5>
            <p className="card-text">1元/听</p>
            <a href="#" className="btn btn-outline-dark">
              + add
            </a>
          </div>
        </div>
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="goodsImg" />
          <div className="card-body">
            <h5 className="card-title">可乐</h5>
            <p className="card-text">1元/听</p>
            <a href="#" className="btn btn-outline-dark">
              + add
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Mall;