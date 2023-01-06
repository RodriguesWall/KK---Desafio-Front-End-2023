import React from 'react';
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'
import styles from './styles.module.scss';
import Logo from '../../assets/logo.png';
import {useCart} from "../../hooks/useCart";


const Navbar = () => {
  const { numberCart } = useCart();

  return (
    <React.Fragment>
       <Row className={styles.background}>
        <Col xs={4} md={4}>
          <Link to="/">
            <img src={Logo} />
          </Link>
          </Col>
          <Col xs={8} md={8} className={styles.ulMenu}>
            <Link className={styles.menu} to="/products">Produtos</Link>
            <Link className={styles.menu} to="/cart">
              Carrinho
              <span className={(numberCart!= 0 && numberCart!= null) && (styles.numberCart)}>
                {numberCart!= 0 && (numberCart)}
              </span>
            </Link>
          </Col>
        </Row>
    </React.Fragment>
  );
};

export default Navbar;
