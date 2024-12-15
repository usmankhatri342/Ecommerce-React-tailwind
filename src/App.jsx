import Banner from "./components/Banner"
import Header from "./components/Header"
import Fottar from "./components/Fottar"

import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import ProductsDetils from "./Pages/ProductsDetils";
import Fottar2 from "./components/Fottar2";
import SignUp from "./Pages/SignUp";
import { useSelector } from "react-redux";
import Search from "./Pages/Search";
//import { useState  , setDarkMode} from "react";


function App( ) {
 
// const [darkMood, setDarkMode] = useState(false);
const darkMode = useSelector((state) => state.darkMode.darkMode);


  return (
    <>
     <Banner />
     
  
    <div className= {` ${darkMode ? "bg-slate-800" : " "}`}>
<div className="container-one"> 
 <Header />
 </div>
 <Routes>
        <Route path="/" index element={<Home />} />
         <Route path="/about" element={<About   />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/SignUp" element={<SignUp />} /> 
        <Route path="/Contact" element={<Contact />} />  
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductsDetils />} />
        <Route path="/Search" element={<Search />} /> 

      
      </Routes>
      
      </div>
      <div className='laptop:block tablet:block mobiles:hidden mobilem:hidden mobilel:hidden'><Fottar  /></div>
      <div className="laptop:hidden tablet:hidden mobiles:block mobilem:block mobilel:block"><Fottar2 /></div>
     
    </>
  )
}

export default App
