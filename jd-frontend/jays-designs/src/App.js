import React from 'react'
import Home from './Components/Home' 
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import { Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ Home } />
      <Route exact path='/contact' component={ Contact } />
      <Route exact path='/projects' component={ Projects } />
    </div>
  );
}

export default App;
