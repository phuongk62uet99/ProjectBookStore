import React, { Component } from "react";
import "./ListUsers.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class ListUsers extends Component {
  render() {
    return (
      <div className="table-agile-info">
        <div className="panel panel-default">
          <h4>Tất cả người dùng</h4>
          <div class="add-product">
            <a href="add-professor.html">Thêm người dùng</a>
          </div>
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
                  <th>Mã người dùng</th>
                  <th>Tên người dùng</th>
                  <th>Chức nắng</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th data-breakpoints="xs">Trạng thái</th>
                  <th data-breakpoints="xs sm md" data-title="DOB">
                    Cài đặt
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr data-expanded="true">
                  <td>1</td>
                  <td>HD123</td>
                  <td>Nguyeenx Vawn A</td>
                  <td>Khach hang</td>
                  <th>nguyenvanphuonga9@gmail.com</th>
                  <td>0392473274</td>
                  <td>
                    <button class="pd-setting">Đang sử dụng</button>
                  </td>
                  <td>
                    <Link to="/bookEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        class="pd-setting-ed"
                      >
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      class="pd-setting-ed"
                    >
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>HD123</td>
                  <td>Nguyeenx Vawn A</td>
                  <td>Khach hang</td>
                  <th>nguyenvanphuonga9@gmail.com</th>
                  <td>0392473274</td>
                  <td>
                    <button class="ds-setting">Bị khóa</button>
                  </td>

                  <td>
                    <Link to="/usersEdit">
                      <button
                        data-toggle="tooltip"
                        title="Edit"
                        class="pd-setting-ed"
                      >
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                    </Link>
                    <button
                      data-toggle="tooltip"
                      title="Trash"
                      class="pd-setting-ed"
                    >
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
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

export default ListUsers;
