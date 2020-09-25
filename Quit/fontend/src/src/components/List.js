import React, { Component } from "react";

class List extends Component {
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
            {this.props.listData.map((res) => (
              <tr>
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