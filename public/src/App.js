import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import NavbarUser from './components/Navbar';
import Cart from './components/Cart';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
 import { cartId } from "./components/Functions";

function App() {

  const [showNav, setShowNav] = useState(true);
  const [cart, setCart] = useState([]);
  useEffect( () => {
    cartId(2,setCart);
  
  })
  return (
    <BrowserRouter>
            {   showNav &&
                <nav>
                  {/* <NavbarUser/> */}
                </nav>
            } 

        <Routes>
          <Route>
            <Route index element={<Login funcNav={setShowNav}/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/cart' element={<Cart {...cart} setCart = {setCart} amount = {1}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
