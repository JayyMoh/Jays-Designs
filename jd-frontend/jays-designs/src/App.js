import React from 'react'
import Home from './Components/Home/Home' 
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Shop from './Components/Shop/Shop'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={ Home } />
      <Route exact path='/contact' component={ Contact } />
      <Route exact path='/projects' component={ Projects } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/shop' component={ Shop } />
      <Footer />
    </div>
  );
}

export default App;
