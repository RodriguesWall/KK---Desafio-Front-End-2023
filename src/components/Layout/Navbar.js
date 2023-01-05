import React, { useState, useEffect } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom'
import styles from './styles.module.scss';
import Logo from '../../assets/logo.png';


const Navbar = () => {


  return (
    <React.Fragment>
       <Row className={styles.background}>
        <Col xs={4} md={4}>
          <Link to="/">
            <img src={Logo} />
          </Link>
          </Col>
          <Col xs={8} md={8} className={styles.ulMenu}>
            <Link className={styles.menu} to="/product">Produtos</Link>
            <Link className={styles.menu} to="/cart">Carrinho</Link>
          </Col>
        </Row>
    </React.Fragment>
  );
};

export default Navbar;
