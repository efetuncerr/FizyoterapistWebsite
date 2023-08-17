import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="container-fluid loginForm">
      <div className="row ">
        <div className="col-12">
          <div
            className="card bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-5">Kayıt Ol</h2>

              <input
                type="text"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="adınız"
              />
              <input
                type="text"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="soyadınız"
              />

              <input
                type="email"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="email adresiniz"
              />
              <input
                type="password"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="şifrenizi giriniz"
              />
               <input
                type="password"
                className="mb-4 mx-5 w-100 "
                id="formControl"
                placeholder="şifrenizi onaylayınız"
              />

              <p className="small mb-3 pb-lg-2">
                <a class="text-white-50" href="#!">
                  Şifrenizi mi unuttunuz?
                </a>
              </p>
              <button className="btn btn-outlined btn-light mx-2 px-5">
                Kayıt ol
              </button>

              <div className="d-flex flex-row mt-3 mb-5">
                <p className="pb-5">
                  Kayıtlı üyeliğiniz var mı?{" "}
                  <a href="/" class="text-white-50 ">
                    Giriş yap
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
