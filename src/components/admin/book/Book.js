import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FetchHelper from "../common/fetch-helper";
import Categories from "./Categories";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      page_size: 20,
    };
  }
  onEditStatusBook = (book, apiUpdateData) => {
    if (book.status) {
      FetchHelper.fetchData({
        url: "http://localhost:1234/api/v1/book/books/deactivate/" + book.id,
        method: "PUT",
      }).then(
        (jsonData) => {
          console.log("JsonData book : ", jsonData);
        },
        (err) => {
          console.log("Err : ", err);
        }
      );
    } else {
      FetchHelper.fetchData({
        url: "http://localhost:1234/api/v1/book/books/activate/" + book.id,
        method: "PUT",
      }).then(
        (jsonData) => {
          console.log("JsonData book : ", jsonData);
        },
        (err) => {
          console.log("Err : ", err);
        }
      );
    }
    apiUpdateData();
  };

  render() {
    var { book, index, apiUpdateData } = this.props;
    var text = book.status ? "Dang hoat dong" : "da tat";

    return (
      <tr data-breakpoints="xs">
        <td>{index + 1}</td>
        <td>Anh 01</td>
        <td>{book.name} </td>
        <td>
          <button
            onClick={() => this.onEditStatusBook(book, apiUpdateData)}
            className="pd-setting"
          >
            {text}
          </button>
        </td>
        <th>{book.quantity}</th>
        <td>Kiến thức chung</td>
        <th>{book.price}</th>
        <td>175.000 VND</td>
        <td>
          <Link to={`/book-edit/${book.id}`}>
            <button
              data-toggle="tooltip"
              title="Edit"
              className="pd-setting-ed"
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
          </Link>
          <button data-toggle="tooltip" title="Trash" className="pd-setting-ed">
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default Book;
