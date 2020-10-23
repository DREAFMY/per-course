import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  state = {
    listData: [],
  };
  componentDidMount() {
    this.getOrderList();
  }
  getOrderList = () => {
    axios.get("http://localhost:8080/order").then((res) => {
      this.setState({
        listData: res.data,
      });
    });
  };
  deleteOrder = (orderId) => {
    axios.delete("http://localhost:8080/order/" + orderId).then((res) => {
      console.log("delete success");
      this.getOrderList();
    });
  };
  render() {
    return (
      <div className="list">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">名字</th>
              <th scope="col">单价</th>
              <th scope="col">数量</th>
              <th scope="col">单位</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listData.length > 0 &&
              this.state.listData.map((res) => (
                <tr key={res.id}>
                  <td>{res.name}</td>
                  <td>{res.price}</td>
                  <td>{res.num}</td>
                  <td>{res.unit}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.deleteOrder(res.id)}
                    >
                      删 除
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
