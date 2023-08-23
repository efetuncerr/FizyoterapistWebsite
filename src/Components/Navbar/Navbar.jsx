import React, { useContext, useState } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Navbarr = () => {

  const {currentUser,logout}= useContext(AuthContext);

  // const [isScrolled, setIsScrolled] = useState(false);

  // window.onscroll = () => {
  //   setIsScrolled(window.scrollY === 0 ? false : true);
  //   return () => (window.onscroll = null);
  // };

  //   console.log(isScrolled)

  return (
    <>
      <nav class="navbar navbar-expand-lg  rounded-1 ">
        <div class="container-fluid ">
          <a class="navbar-brand " href="/">
            EFE.
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Pricing
                </a>
              </li>
            </ul>
            <SearchIcon className=" icon" />
            {currentUser ? <span onClick={logout} className=" logoutLink mx-3">Çıkış Yap</span> : <Link to="/login" className="text-decoration-none text-dark mx-3">Giriş yap</Link>}
            {/* <a href="/login" class="btn" >
             Giriş yap
            </a> */}
            <a href="/register" class={currentUser ? "d-none" : "btn btnMain"}>
             Kayıt ol 
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbarr;
