import Banner from "./components/Banner"
import Header from "./components/Header"

import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";


function App() {
 

  return (
    <>
    <div className="container-x">
 <Banner />
 <Header />
 <Routes>
        <Route path="/" index element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />  
      
      </Routes>
      </div>
    </>
  )
}

export default App
