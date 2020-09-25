import React, { Component } from "react";

class Add extends Component {
  render() {
    return (
      <div className="add">
        <form>
          <div className="form-group">
            <label forHtml="exampleInputEmail1">名 称：</label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              placeholder="请输入商品名称"
            />
          </div>
          <div className="form-group">
            <label forHtml="exampleInputPassword1">价 格：</label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              placeholder="请输入商品价格"
            />
          </div>
          <div className="form-group">
            <label forHtml="exampleInputPassword1">单 位：</label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              placeholder="请输入商品单位"
            />
          </div>
          <div className="form-group">
            <label forHtml="exampleInputPassword1">图 片：</label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              placeholder="请输入商品图片地址"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Add;