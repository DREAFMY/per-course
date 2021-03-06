import React, { Component } from "react";
import axios from "axios";

class Mall extends Component {
  state = {
    total: 0, //总条数
    size: 10, //分页大小-默认为0
    pages: 1, //总页数
    current: 1, //当前页数
    goodsData: [],
    loading: false,
  };

  componentDidMount() {
    axios.get("http://localhost:8080/goods").then((res) => {
      this.setState({
        goodsData: res.data,
        total: res.data.length,
      });
    });
  }

  addGoods = (goodsId) => {
    this.setState({
      loading: true,
    });
    axios
      .get("http://localhost:8080/order/" + goodsId)
      .then((res) => {
        alert("添加订单成功");
        this.props.history.push("/list");
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    return (
      <div className="mall">
        {this.state.goodsData.length > 0 ? (
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
                  disabled={this.state.loading}
                  onClick={() => this.addGoods(res.id)}
                >
                  + add
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="noData">暂无商品数据</div>
        )}
      </div>
    );
  }
}

export default Mall;
