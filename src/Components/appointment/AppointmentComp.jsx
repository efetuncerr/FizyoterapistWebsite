import React, { useState } from "react";
import { Input, Label } from "reactstrap";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const AppointmentComp = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");



  const navigate = useNavigate();


  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="container-fluid ">
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-6 border border-1 p-5 rounded-2 bg-light">
            <h2 class="mb-5">Ücretsiz Randevu Talebi</h2>
            <form>
              <Label className="fw-bold m-0 ms-2">Adınız</Label>
              <Input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Adınız"
                // name="username"
                onChange={(e) => setTitle(e.target.value)}
              >
                Adınız
              </Input>
              {/* <Label className="fw-bold m-0 ms-2 ">Soyadınız</Label> */}
              {/* <Input
                type="text"
                className="form-control "
                id="exampleInputEmail1"
                placeholder="Soyadınız"
                name="surname"
                onChange={(e) => setValue(e.target.value)}
              >
                Adınız
              </Input> */}
              <Label className="fw-bold m-0 ms-2">Email adresiniz</Label>
              <Input
                type="email"
                className="form-control "
                id="exampleInputEmail1"
                placeholder="Email adresiniz"
                name="email"
              >
                Adınız
              </Input>
              <div className="cat">
                <Label className="fw-bold m-0 ms-2">Tanı</Label>
                <Input
                  type="select"
                  class="custom-select custom-select-lg mb-3"
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  // onChange={handleChange}
                >
                  <option selected>Bir kategori seçin</option>
                  <option value="Cat 1">Kategori 1</option>
                  <option value="Cat 2">Kategori 2</option>
                  <option value="Cat 3">Kategori 3</option>
                  <option value="Cat 4">Kategori 4</option>
                  <option value="Cat 5">Kategori 5</option>
                  <option value="Cat 6">Kategori 6</option>
                </Input>
              </div>
              <Label className="fw-bold m-0 ms-2">Telefon no</Label>
              <Input
                className=""
                country="tr"
                regions={"europe"}
                placeholder="+90 123 456 7899"
                name="phone"
              />

              <section className="d-flex justify-content-end text-end ">
                {" "}
                <button
                  className="mt-3 btn btn-secondary "
                  type="submit"
                  onClick={handleClick}
                >
                  Randevu oluştur
                </button>
              </section>
            </form>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col d-flex justify-content-center align-items-center">
            <h4>Sıkça Sorulan Sorular</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentComp;
