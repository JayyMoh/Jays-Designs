import React, { useState, useEffect } from 'react'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Shop from './Components/Shop/Shop'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { commerce } from './Commerce/commerce'
import { Route } from 'react-router-dom'


function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  // fetching the products from commerce js api
  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  // fetching the cart from commerce js api
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }

  const handleAddToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity)
    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  console.log(cart)

  return (
    <div className="App">
      <Navbar
        totalItems={ cart.total_items }
      />
      <Route exact path='/' component={ Home } />
      <Route exact path='/contact' component={ Contact } />
      <Route exact path='/projects' component={ Projects } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/shop'>
        <Shop
          products={ products }
          AddToCart={ handleAddToCart }
        />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
