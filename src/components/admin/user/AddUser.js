import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function AddUser() {
  const { id } = useParams();
  const { register, handleSubmit, watch, errors } = useForm();
  const [categories, setCategories] = useState({});
  const [author, setAuthor] = useState("Nguyen Van A");
  const [category_ids, setCategory_ids] = useState(["category"]);
  const [code, setCode] = useState("check-code123");
  const [images, setImages] = useState(["ahdhcfu"]);
  const [name, setName] = useState("Nha gia kim");
  const [price, setPrice] = useState(10000);
  const [quantity, setQuantity] = useState(6);

  var dataFrom = {
    address: {
      city: "",
      district: "",
      text: "",
      ward: "",
    },
    name: "",
    password: "",
    phone_number: "",
    role: "",
    user_name: "",
  };
  const onSubmit = (data) => {
    console.log("Data form  1 : ", dataFrom);
    dataFrom.address.city = data.city;
    dataFrom.address.district = data.district;
    dataFrom.address.text = data.text;
    dataFrom.address.ward = data.ward;
    dataFrom.name = data.name;
    dataFrom.password = data.password;
    dataFrom.phone_number = data.phone_number;
    dataFrom.user_name = data.user_name;
    dataFrom.role = data.role;
    fetch(`http://localhost:1234/api/v1/book/users`, {
      method: "POST",
      body: JSON.stringify(dataFrom),
      headers: new Headers({
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("response add user : ", response);
      })
      .catch((error) => console.log("Error : ", error));
  };

  return (
    <div className="form-w3layouts">
      <div className="row">
        <div className="col-lg-12">
          <section className="panel">
            <header className="panel-heading">Thêm người dùng</header>
            <div className="panel-body">
              <div className="form">
                <form
                  className="cmxform form-horizontal "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group ">
                    <label
                      htmlFor="firstname"
                      className="control-label col-lg-3"
                    >
                      Tên người dùng
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        name="name"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="lastname"
                      className="control-label col-lg-3"
                    >
                      Tên đăng nhập
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        name="user_name"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      Mật khẩu
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        name="password"
                        type="password"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="username"
                      className="control-label col-lg-3"
                    >
                      Thành phố
                    </label>
                    <div className="col-lg-6">
                      <select
                        className="form-control "
                        ref={register}
                        name="city"
                        form="carform"
                      >
                        <option value="volvo">Thanh Pho 1</option>
                        <option value="saab">Thanh Pho 2</option>
                        <option value="opel">Thanh Pho 3</option>
                        <option value="audi">Thanh Pho 4</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      Huyện
                    </label>
                    <div className="col-lg-6">
                      <select
                        className="form-control "
                        ref={register}
                        name="district"
                        form="carform"
                      >
                        <option value="volvo">Thanh Pho 1</option>
                        <option value="saab">Thanh Pho 2</option>
                        <option value="opel">Thanh Pho 3</option>
                        <option value="audi">Thanh Pho 4</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      Xã
                    </label>
                    <div className="col-lg-6">
                      <select
                        className="form-control "
                        ref={register}
                        name="ward"
                        form="carform"
                      >
                        <option value="volvo">Thanh Pho 1</option>
                        <option value="saab">Thanh Pho 2</option>
                        <option value="opel">Thanh Pho 3</option>
                        <option value="audi">Thanh Pho 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      Ghi chú
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        name="text"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>

                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      Số điện thoại
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        name="phone_number"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>

                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      Chức năng
                    </label>
                    <div className="col-lg-6">
                      <select
                        className="form-control "
                        ref={register}
                        name="role"
                        form="carform"
                      >
                        <option value="5fc5dfa79e609a1574e4271e">
                          Người dùng
                        </option>
                        <option value="5fc5cde29e609a1574e4271d">Admin</option>
                        <option value="5fc5dfcc9e609a1574e4271f">Shiper</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-lg-offset-3 col-lg-6">
                      <button className="btn btn-primary" type="submit">
                        Save
                      </button>
                      <button className="btn btn-default" type="button">
                        <Link to="/books">Cancel</Link>
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
