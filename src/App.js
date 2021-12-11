import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import softdiag from './components/softdiag';
import market from './components/market';
import productsketch from './components/productsketch';
import login from './components/login';
import home from './components/home';
import Demo from './components/demo';

function App() {
  return (
    <Router>
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="/">NANO Suit</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/productsketch">Product Sketch</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/softwarediagram">Software Diagram</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/marketdata">Market Data</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/demo">DEMO</Link>
        </li>
        {/*<li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
  </li>*/}
      </ul>
    </div>
  </div>
</nav>

          <Switch>
              <Route exact path='/' component={home} />
              <Route path='/productsketch' component={productsketch} />
              <Route path='/softwarediagram' component={softdiag} />
              <Route path='/marketdata' component={market} />
              <Route path='/login' component={login} />
              <Route path='/demo' component={Demo} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
