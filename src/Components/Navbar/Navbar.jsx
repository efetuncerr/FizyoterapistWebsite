import React, { useContext } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navbarr = () => {
  const { currentUser, logout } = useContext(AuthContext);

  // const [isScrolled, setIsScrolled] = useState(false);

  // window.onscroll = () => {
  //   setIsScrolled(window.scrollY === 0 ? false : true);
  //   return () => (window.onscroll = null);
  // };

  //   console.log(isScrolled)

  return (
    <>
      <Navbar expand="lg" className="navbar ">
        <Container fluid className="mx-5 ">
          <Navbar.Brand
            style={{ fontSize: "30px", letterSpacing: "2px" }}
            href="/"
          >
            EFE.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link className="navlink mx-2" href="/">Home
              </Nav.Link>
         
              <Nav.Link  className="navlink mx-2" href="/">Link1</Nav.Link>
              <Nav.Link   className="navlink mx-2" href="/">Link2</Nav.Link>
              <Nav.Link  className="navlink mx-2" href="/">Link3</Nav.Link>
            </Nav>

            <SearchIcon className=" icon" />
            {currentUser ? (
              <span onClick={logout} className=" logoutLink mx-3">
                Çıkış Yap
              </span>
            ) : (
              <Link
                to="/login"
                className="text-decoration-none text-dark mx-3"
                style={{ fontSize: "16px" }}
              >
                Giriş yap
              </Link>
            )}
            {/* <a href="/login" class="btn" >
             Giriş yap
            </a> */}
            <a href="/register" class={currentUser ? "d-none" : "btn btnMain"}>
              Kayıt ol
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;
