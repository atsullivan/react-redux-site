import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Contact from '../contact'

const App = () => (
  <div>
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: 'rgb(101, 251, 240)', padding: '10px' }}>
        <i className="fa fa-lg fa-circle-o-notch" aria-hidden="true"></i>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'rgb(101, 251, 240)', padding: '10px' }}>
        <i className="fa fa-lg fa-map-o" aria-hidden="true"></i>
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'rgb(101, 251, 240)', padding: '10px' }}>
        <i className="fa fa-lg fa-paper-plane-o" aria-hidden="true"></i>
      </Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </main>
  </div>
)

export default App
