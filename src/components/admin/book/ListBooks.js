import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ListBooks.css";

class ListBooks extends Component {
  render() {
    return (
      <div className="table-agile-info">
        <div className="panel panel-default">
          <h4>Tất cae sách</h4>
          <Link className="add-product" to="/bookAdd">
            thêm sách
          </Link>
          <div>
            <table
              className="table"
              ui-jq="footable"
              ui-options='{
        "paging": {
          "enabled": true
        },
        "filtering": {
          "enabled": true
        },
        "sorting": {
          "enabled": true
        }}'
            >
              <thead>
                <tr>
                  <th data-breakpoints="xs">STT</th>
                  <th>Ảnh</th>
                  <th>Tên sách</th>
                  <th>Trạng thái </th>
                  <th>Só lượng </th>
                  <th>Loại sách </th>
                  <th data-breakpoints="xs">Giá nhập </th>
                  <th data-breakpoints="xs sm md" data-title="DOB">
                    Giá bán
                  </th>
                  <th data-breakpoints="xs sm md" data-title="DOB">
                    Cài đặt
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr data-breakpoints="xs">
                  <td>1</td>
                  <td>Anhr 01</td>
                  <td>Lịch sử loài người </td>
                  <td>
                    <button className="pd-setting">Active</button>
                  </td>
                  <th>15</th>
                  <td>Kiến thức chung</td>
                  <td>150.000 VND</td>
                  <td>175.000 VND</td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        className="pd-setting-ed"
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      className="pd-setting-ed"
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr data-breakpoints="xs">
                  <td>1</td>
                  <td>Anhr 01</td>
                  <td>Lịch sử loài người </td>
                  <td>
                    <button className="pd-setting">Active</button>
                  </td>
                  <th>15</th>
                  <td>Kiến thức chung</td>
                  <td>150.000 VND</td>
                  <td>175.000 VND</td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        className="pd-setting-ed"
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      className="pd-setting-ed"
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr data-breakpoints="xs">
                  <td>1</td>
                  <td>Anhr 01</td>
                  <td>Lịch sử loài người </td>
                  <td>
                    <button className="pd-setting">Active</button>
                  </td>
                  <th>15</th>
                  <td>Kiến thức chung</td>
                  <td>150.000 VND</td>
                  <td>175.000 VND</td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        className="pd-setting-ed"
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      className="pd-setting-ed"
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr data-breakpoints="xs">
                  <td>1</td>
                  <td>Anhr 01</td>
                  <td>Lịch sử loài người </td>
                  <td>
                    <button className="pd-setting">Active</button>
                  </td>
                  <th>15</th>
                  <td>Kiến thức chung</td>
                  <td>150.000 VND</td>
                  <td>175.000 VND</td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        className="pd-setting-ed"
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      className="pd-setting-ed"
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr data-breakpoints="xs">
                  <td>1</td>
                  <td>Anhr 01</td>
                  <td>Lịch sử loài người </td>
                  <td>
                    <button className="pd-setting">Active</button>
                  </td>
                  <th>15</th>
                  <td>Kiến thức chung</td>
                  <td>150.000 VND</td>
                  <td>175.000 VND</td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        className="pd-setting-ed"
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      className="pd-setting-ed"
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr data-breakpoints="xs">
                  <td>1</td>
                  <td>Anhr 01</td>
                  <td>Lịch sử loài người </td>
                  <td>
                    <button className="pd-setting">Active</button>
                  </td>
                  <th>15</th>
                  <td>Kiến thức chung</td>
                  <td>150.000 VND</td>
                  <td>175.000 VND</td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        className="pd-setting-ed"
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      className="pd-setting-ed"
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr data-breakpoints="xs">
                  <td>1</td>
                  <td>Anhr 01</td>
                  <td>Lịch sử loài người </td>
                  <td>
                    <button className="pd-setting">Active</button>
                  </td>
                  <th>15</th>
                  <td>Kiến thức chung</td>
                  <td>150.000 VND</td>
                  <td>175.000 VND</td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        className="pd-setting-ed"
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      className="pd-setting-ed"
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr data-breakpoints="xs">
                  <td>1</td>
                  <td>Anhr 01</td>
                  <td>Lịch sử loài người </td>
                  <td>
                    <button className="pd-setting">Active</button>
                  </td>
                  <th>15</th>
                  <td>Kiến thức chung</td>
                  <td>150.000 VND</td>
                  <td>175.000 VND</td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        className="pd-setting-ed"
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      className="pd-setting-ed"
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr data-breakpoints="xs">
                  <td>1</td>
                  <td>Anhr 01</td>
                  <td>Lịch sử loài người </td>
                  <td>
                    <button className="pd-setting">Active</button>
                  </td>
                  <th>15</th>
                  <td>Kiến thức chung</td>
                  <td>150.000 VND</td>
                  <td>175.000 VND</td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        className="pd-setting-ed"
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      className="pd-setting-ed"
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
