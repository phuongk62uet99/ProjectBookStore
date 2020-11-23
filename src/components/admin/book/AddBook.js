import React, { Component } from "react";

class AddBook extends Component {
  render() {
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
                    id="signupForm"
                    method="get"
                    action
                    noValidate="novalidate"
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
                          name="firstname"
                          type="text"
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
                        <input
                          className=" form-control"
                          id="lastname"
                          name="lastname"
                          type="text"
                        />
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
                          name="username"
                          type="text"
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
                          name="password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label
                        htmlFor="confirm_password"
                        className="control-label col-lg-3"
                      >
                        Giá nhập
                      </label>
                      <div className="col-lg-6">
                        <input
                          className="form-control "
                          id="confirm_password"
                          name="confirm_password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label htmlFor="email" className="control-label col-lg-3">
                        Giá bán
                      </label>
                      <div className="col-lg-6">
                        <input
                          className="form-control "
                          id="email"
                          name="email"
                          type="email"
                        />
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
        {/* page end*/}
      </div>
    );
  }
}

export default AddBook;
