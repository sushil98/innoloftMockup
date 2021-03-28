
import React, { Component } from 'react';
import {
  BrowserRouter as Router,  
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import Product from './Product'
import Description from './Description'
import Attributes from './Attributes'
import '../../sass/home.scss'

class Navigation extends Component {
  
  render() { 
    return ( 
<>

<Router>
  <div>
      <div className='navbar'> 
          <ul className='navbarMenu'>
        
            <li><i class="fa fa-home " aria-hidden="true"> 
              <Link to="/"> Home</Link></i></li>
            <li><i class="fa fa-product-hunt" aria-hidden="true"></i>
              <Link to="/product"> Product</Link></li>         
          </ul>
          </div>
        

          <Route exact path="/" component = {Home} />   
          <Route exact path="/product" component = {Product} />  
          <Route exact path="/description" component = {Description} />  
          <Route exact path="/attributes" component = {Attributes} />     
      </div>
    </Router>

</>

     );
  }
}
 
export default Navigation;