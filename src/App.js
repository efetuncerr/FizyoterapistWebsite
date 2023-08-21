import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Approintment from "./pages/Appointment/Appointment";
import Posts from "./pages/Posts/Posts";


function App() {
  return (
    <div>
 
 <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/approintment" element={<Approintment/>}/>
      <Route path="/posts" element={<Posts/>}/>
      

      
    </Routes>

    </div>
  );
}

export default App;
