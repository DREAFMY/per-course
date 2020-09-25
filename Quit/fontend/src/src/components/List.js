import React, { Component } from "react";

class List extends Component {
  state = {
    listData: [
      { id: 1, name: "可乐", price: "2", num: 1, unit: "听" },
      { id: 2, name: "coffee", price: "23", num: 1, unit: "杯" },
      { id: 3, name: "coco", price: "11", num: 1, unit: "杯" },
      { id: 4, name: "奶茶", price: "12", num: 1, unit: "杯" },
    ],
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
            {this.state.listData.map((res) => (
              <tr key={res.id}>
                <td>{res.name}</td>
                <td>{res.price}</td>
                <td>{res.num}</td>
                <td>{res.unit}</td>
                <td>
                  <button type="button" className="btn btn-danger">
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