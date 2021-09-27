//import logo from './logo.svg';\\
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import reactDom from 'react-dom';\\
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
//import Product from './components/Product';//
import ProductList from './components/ProductList';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
    
  );
}


export default App;
