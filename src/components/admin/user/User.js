import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FetchHelper from "../common/fetch-helper";
import "./ListUsers.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
    };
  }

  onEditStatusUser = (user, apiUpdateData) => {
    if (user.status) {
      FetchHelper.fetchData({
        url: "http://localhost:1234/api/v1/book/users/deactivate/" + user.id,
        method: "PUT",
      }).then(
        (jsonData) => {
          console.log("response user deactivate : ", jsonData);
        },
        (err) => {
          console.log("Err : ", err);
        }
      );
    } else {
      FetchHelper.fetchData({
        url: "http://localhost:1234/api/v1/book/users/activate/" + user.id,
        method: "PUT",
      }).then(
        (jsonData) => {
          console.log("response user deactivate : ", jsonData);
        },
        (err) => {
          console.log("Err : ", err);
        }
      );
    }
    apiUpdateData();
  };
  render() {
    var { user, index, apiUpdateData } = this.props;

    var textStatus = "";
    if (user.status) {
      textStatus = " Dang hoạt động ";
    } else {
      textStatus = "Đã tắt";
    }
    var role = "";
    if (user.role == "5fc5cde29e609a1574e4271d") {
      role = "Admin";
    }
    if (user.role == "5fc5dfa79e609a1574e4271e") {
      role = "Customer";
    }
    if (user.role == "5fc5dfcc9e609a1574e4271f") {
      role = "Shipper";
    }

    return (
      <tr data-expanded="true">
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.address.city}</td>
        <td>{role}</td>
        <th>{user.user_name}</th>
        <td>{user.phone_number}</td>
        <td>
          <button
            onClick={() => this.onEditStatusUser(user, apiUpdateData)}
            class="pd-setting"
          >
            {textStatus}
          </button>
        </td>
        <td>
          <Link to={`/user-edit/${user.id}`}>
            <button data-toggle="tooltip" title="Edit" class="pd-setting-ed">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </Link>
          <button data-toggle="tooltip" title="Trash" class="pd-setting-ed">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default User;
