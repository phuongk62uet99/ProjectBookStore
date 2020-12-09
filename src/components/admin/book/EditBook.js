import React, { Component } from "react";
import FetchHelper from "../common/fetch-helper";
import Categories from "./Categories";

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      page_size: 0,
      categories: {},
      author: "",
      category_ids: [],
      code: "",
      images: [],
      name: "",
      price: 0,
      quantity: 0,
      status: true,
    };
  }
  // https://topdev.vn/blog/lam-sao-de-fetch-du-lieu-bang-react-hook/
  // Foreach loop in return statement of react

  // const { register, handleSubmit, watch, errors } = useForm();
  // const [data, setData] = useState({});
  // const [page_size, setPage_size] = useState({});
  // const [categories, setCategories] = useState({});

  // var dataFrom = {
  //   author: "",
  //   category_ids: [],
  //   code: "123",
  //   images: [],
  //   name: "",
  //   price: 0,
  //   quantity: 0,
  //   status: true,
  // };
  componentDidMount() {
    var { page_size } = this.state;
    FetchHelper.fetchData({
      url: "http://localhost:1234/api/v1/book/categories/",
      method: "GET",
      // params: dataFrom,
    }).then(
      (jsonData) => {
        this.setState({
          categories: jsonData.Category,
        });
      },
      (err) => {
        console.log("Err : ", err);
      }
    );
  }

  // const onSubmit = (data) => {
  //   dataFrom.author = data.author;
  //   dataFrom.category_ids.push(data.category_ids);
  //   dataFrom.images.push(data.images);
  //   dataFrom.name = data.name;
  //   dataFrom.price = data.price;
  //   dataFrom.quantity = data.quantity;
  //   var status = data.status === "true" ? true : false;
  //   dataFrom.status = status;

  //   FetchHelper.fetchData({
  //     url: "http://localhost:1234/api/v1/book/books/",
  //     method: "POST",
  //     params: dataFrom,
  //   }).then(
  //     (jsonData) => {
  //       console.log("response add book : ", jsonData);
  //     },
  //     (err) => {
  //       console.log("Err : ", err);
  //     }
  //   );
  // };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    var {
      author,
      category_ids,
      code,
      images,
      name,
      price,
      quantity,
      status,
    } = this.state;
    var dataFrom = {
      author: "",
      category_ids: [],
      code: "123-check",
      images: [],
      name: "",
      price: 0,
      quantity: 0,
      status: true,
    };

    dataFrom.author = author;
    dataFrom.category_ids.push(category_ids);
    // dataFrom.code = code;
    dataFrom.images.push(images);
    dataFrom.name = name;
    dataFrom.price = price;
    dataFrom.quantity = quantity;
    var statusFrom = status === "true" ? true : false;
    dataFrom.status = statusFrom;
    console.log("Data 2 : ", dataFrom);
    FetchHelper.fetchData({
      url: "http://localhost:1234/api/v1/book/books/",
      method: "POST",
      params: dataFrom,
    }).then(
      (jsonData) => {
        console.log("response add book : ", jsonData);
      },
      (err) => {
        console.log("Err : ", err);
      }
    );
    event.preventDefault();
  };

  render() {
    var {
      author,
      category_ids,
      code,
      images,
      name,
      price,
      quantity,
      status,
      categories,
    } = this.state;
    console.log("====================================");
    console.log("Categorys : ", categories);
    // var book = books.map((book, index) => {
    //   return (
    //     <Book
    //       key={index}
    //       index={index}
    //       book={book}
    //       apiUpdateData={this.apiUpdateData}
    //     />
    //   );
    // });
    console.log("====================================");
    console.log("Props ID : ", this.props.match.params.id);
    console.log("====================================");
    if (categories.length > 0) {
      var cate = categories.map((cate, index) => {
        return <Categories key={index} index={index} cate={cate} />;
      });
    }

    return (
      <div className="form-w3layouts">
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <header className="panel-heading">Thêm sách mới</header>
              <div className="panel-body">
                <div className="form">
                  <form
                    className="cmxform form-horizontal "
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group ">
                      <label
                        htmlFor="firstname"
                        className="control-label col-lg-3"
                      >
                        Tên sách
                      </label>
                      <div className="col-lg-6">
                        <input
                          className=" form-control"
                          id="firstname"
                          name="name"
                          type="text"
                          onChange={this.onChange}
                          value={name}
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label
                        htmlFor="firstname"
                        className="control-label col-lg-3"
                      >
                        Tác giả
                      </label>
                      <div className="col-lg-6">
                        <input
                          className=" form-control"
                          id="firstname"
                          name="author"
                          type="text"
                          onChange={this.onChange}
                          value={author}
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label
                        htmlFor="lastname"
                        className="control-label col-lg-3"
                      >
                        Loại sách
                      </label>
                      <div className="col-lg-6">
                        <select
                          className="form-control "
                          name="category_ids"
                          form="carform"
                          onChange={this.onChange}
                          value={category_ids}
                        >
                          {cate}
                        </select>
                      </div>
                    </div>
                    <div className="form-group ">
                      <label
                        htmlFor="username"
                        className="control-label col-lg-3"
                      >
                        Số lượng
                      </label>
                      <div className="col-lg-6">
                        <input
                          className="form-control "
                          id="username"
                          name="quantity"
                          type="text"
                          onChange={this.onChange}
                          value={quantity}
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label
                        htmlFor="password"
                        className="control-label col-lg-3"
                      >
                        Ảnh
                      </label>
                      <div className="col-lg-6">
                        <input
                          className="form-control "
                          id="password"
                          name="images"
                          type="text"
                          onChange={this.onChange}
                          value={images}
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label
                        htmlFor="confirm_password"
                        className="control-label col-lg-3"
                      >
                        Giá
                      </label>
                      <div className="col-lg-6">
                        <input
                          className="form-control "
                          id="confirm_password"
                          name="price"
                          type="text"
                          onChange={this.onChange}
                          value={price}
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label
                        htmlFor="confirm_password"
                        className="control-label col-lg-3"
                      >
                        Trạng thái
                      </label>
                      <div className="col-lg-6">
                        <select
                          className="form-control "
                          name="status"
                          form="carform"
                          onChange={this.onChange}
                          value={status}
                        >
                          <option value="true">Còn sách</option>
                          <option value="false">Hết sách </option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-lg-offset-3 col-lg-6">
                        <button className="btn btn-primary" type="submit">
                          Save
                        </button>
                        <button className="btn btn-default" type="button">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default EditBook;
