import { Route, Routes } from "react-router-dom";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import OurServices from "./Components/OurServices/OurServices";
import Slider from "./Components/Slider/Slider";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Approintment from "./pages/Appointment/Appointment";


function App() {
  return (
    <div>
 
 <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/approintment" element={<Approintment/>}/>
      

      
    </Routes>

    </div>
  );
}

export default App;
