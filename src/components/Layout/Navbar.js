import React, { useState, useEffect } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import styles from './styles.module.scss';
import Logo from '../../assets/logo.png';


const Navbar = () => {

  return (
    <React.Fragment>
       <Row className={styles.background}>
          <img src={Logo}/>
          <ul>
            <Link className={styles.menu} to="/">Home</Link>
            <Link className={styles.menu} to="/product">Products</Link>
            <Link className={styles.menu} to="/cart">Cart</Link>
          </ul>
        </Row>
    </React.Fragment>
  );
};

export default Navbar;
