import React, { Component } from "react";
import axios from "axios";
// import { Table } from "ante";

class List extends Component {
  state = {
    listData: [],
    isLoading: false,
    pageSize: 0,
    current: 0,
    total: 0,
    pageOn: 0,
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
      alert("删除订单成功");
      this.getOrderList();
    });
  };
  // changePageSize = (current, pageSize) => {
  //   this.setFilterPageState({ current, pageSize }, this.getOrderList);
  // };
  // changePage = async (current) => {
  //   this.setFilterPageState({ current }, this.getOrderList);
  // };
  render() {
    // const columns = [
    //   {
    //     title: "名字",
    //     dataIndex: "name",
    //   },
    //   {
    //     title: "单价",
    //     dataIndex: "price",
    //   },
    //   {
    //     title: "数量",
    //     dataIndex: "num",
    //   },
    //   {
    //     title: "单位",
    //     dataIndex: "unit",
    //   },
    //   {
    //     title: "操作",
    //     key: "operation",
    //     render: (text, record) => (
    //       <button
    //         type="button"
    //         className="btn btn-danger"
    //         onClick={() => this.deleteOrder(record.id)}
    //       >
    //         删 除
    //       </button>
    //     ),
    //   },
    // ];
    // const pagination = {
    //   showSizeChanger: true,
    //   pageSize: this.state.pageSize,
    //   current: this.state.current,
    //   showQuickJumper: true,
    //   hideOnSinglePage: true,
    //   onChange: this.changePage,
    //   onShowSizeChange: this.changePageSize,
    //   total: this.state.total,
    // };
    return (
      <div className="list">
        {/* <Table
          columns={columns}
          loading={this.state.isLoading}
          dataSource={this.state.listData}
          rowKey={(record) => record.id}
          pagination={pagination}
        />
        {this.state.total <= this.state.pageSize &&
          !this.state.isLoading &&
          this.renderSelectPageSize()} */}
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
            {this.state.listData.length > 0 ? (
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
              ))
            ) : (
              <div className="noData">暂无订单数据</div>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
