import React, { useState, useEffect } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import styles from './styles.module.scss';

const Navbar = () => {
  
  return (
    <React.Fragment>
       <Row className={styles.background}>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Cart</li>
          </ul>
        </Row>
    </React.Fragment>
  );
};

export default Navbar;
