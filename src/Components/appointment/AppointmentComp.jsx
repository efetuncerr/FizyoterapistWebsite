import React, { useState } from "react";
import { Input, Label } from "reactstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AppointmentComp = () => {
  const [value, setValue] = useState();
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
              >
                Adınız
              </Input>
              <Label className="fw-bold m-0 ms-2 ">Soyadınız</Label>
              <Input
                type="text"
                className="form-control "
                id="exampleInputEmail1"
                placeholder="Soyadınız"
              >
                Adınız
              </Input>
              <Label className="fw-bold m-0 ms-2">Email adresiniz</Label>
              <Input
                type="email"
                className="form-control "
                id="exampleInputEmail1"
                placeholder="Email adresiniz"
              >
                Adınız
              </Input>
              <div className="cat">
                <Label className="fw-bold m-0 ms-2">Tanı</Label>
                <Input type="select" class="custom-select">
                  <option selected>Tanı belirtiniz</option>
                  <option value="Cat 1">Kategori 1</option>
                  <option value="Cat 2">Kategori 2</option>
                  <option value="Cat 3">Kategori 3</option>
                  <option value="Cat 4">Kategori 4</option>
                  <option value="Cat 5">Kategori 5</option>
                  <option value="Cat 6">Kategori 6</option>
                </Input>
              </div>

              <PhoneInput className="mt-2" country="tr" regions={"europe"} placeholder="+90 123 456 7899" />

<section className="d-flex justify-content-end text-end "  > <button className="mt-3 btn btn-secondary " type="submit"   >
        Randevu oluştur
      </button></section>
              
            </form>
          </div>
          
        </div>
        <div className="row mt-5 ">
          <div className="col d-flex justify-content-center align-items-center" >
            <h4>Sıkça Sorulan Sorular</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentComp;
