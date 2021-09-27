import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import logo from "../logo.svg";
import '../App.css';
import '../index.css';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
              <Link to="/">
                  <img src={logo} alt="store" className="navbar-brand"/>

              </Link>  
              <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                      <Link to="/" className="nav-link">
                          Product
                      </Link>
                  </li>
              </ul>


              <Link to="/cart" className="ml-auto">
                  <ButtonContainer className="text-center">
                     <span className="text-center">
                            <i className="fas fa-cart-plus"/>
                     </span>
                     &nbsp; MY CART
                  </ButtonContainer>
              </Link>
            </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
    background : var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size : 1.3em;
        text-transform: capitalize;
    }
`;