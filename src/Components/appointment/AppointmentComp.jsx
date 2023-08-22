import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { Input, Label } from "reactstrap";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerSurname, setCustomerSurname] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

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
            phoneNumber,
            customerName,
            customerSurname,
            customerEmail,
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            phoneNumber,
            customerName,
            customerSurname,
            customerEmail,
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <form class="w-50 mt-5">
        <div class="form-group  ">
          <input
            type="text"
            class="form-control "
            id="exampleInputEmail1"
            placeholder="Lütfen konu başlığını yazınız"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            class="form-control "
            id="exampleInputEmail1"
            placeholder="Adınız"
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            type="text"
            class="form-control "
            id="exampleInputEmail1"
            placeholder="Soyadınız"
            onChange={(e) => setCustomerSurname(e.target.value)}
          />

          <input
            type="email"
            class="form-control "
            id="exampleInputEmail1"
            placeholder="Email adresiniz"
            onChange={(e) => setCustomerEmail(e.target.value)}
          />

          <input
            type="number"
            class="form-control mt-2"
            id="exampleInputEmail1"
            placeholder="Telefon numaranız"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <div class="item category mt-2">
            <div className="cat">
              <Input
                type="select"
                class="custom-select custom-select-lg "
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              >
                <option selected> Tanı</option>
                <option value="Cat 1">Kategori 1</option>
                <option value="Cat 2">Kategori 2</option>
                <option value="Cat 3">Kategori 3</option>
                <option value="Cat 4">Kategori 4</option>
                <option value="Cat 5">Kategori 5</option>
                <option value="Cat 6">Kategori 6</option>
              </Input>
            </div>

            <div className="textarea">
              <Label for="exampleText"></Label>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
                placeholder="Lütfen yaşadığınız sorunu kısaca açıklayın"
                rows={11}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            {/* <div className="inputFile">
          <Input
              type="file"
              id="file"
              name=""
              onChange={(e) => setFile(e.target.files[0])}
            />
       

          </div> */}
          </div>
        </div>

        <button
          type="submit"
          className="mt-3 btnMain text-white"
          onClick={handleClick}
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Write;
