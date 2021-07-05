import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home' 
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import About from './Components/About'
import Shop from './Components/Shop'
import Footer from './Components/Footer'
import { Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <NavBar />
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
