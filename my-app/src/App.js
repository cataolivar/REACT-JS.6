import './index.css';
import React from 'react'
import Header from "./components/Header/Header"
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget';
const App = () => {
  return (

    <div>
<BrowserRouter>
<Header/>
<NavBar/>
<Routes>
<Route path="/" element = {<ItemListContainer greeting= "Bienvenidos a Kalaka"/>}/>
<Route path="/category/:categoryId" element = {<ItemListContainer greeting= "Bienvenidos a Kalaka"/>}/>
<Route path="/detail/:id" element={<ItemDetailContainer/>} />
<Route path="/cart" elemenent={<CartWidget/>} />
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App