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


function App() {
 

  return (
    <>
     <Banner />
    <div className="container-one">

 <Header />
 <Routes>
        <Route path="/" index element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/Contact" element={<Contact />} />  
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductsDetils />} />

      
      </Routes>
      
      </div>
      <div className=''><Fottar  /></div>
    </>
  )
}

export default App
