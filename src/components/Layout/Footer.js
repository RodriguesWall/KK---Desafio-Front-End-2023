import React, { useState, useEffect } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom'
import styles from './styles.module.scss';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <React.Fragment>
          <Row className={styles.footer}>
            <Col xs={12} md={3}>
              <Link to="/">
                <img src={Logo} />
              </Link>
            </Col>
            <Col xs={12} md={6}>
              <span>Links Úteis</span>
              <Link className={styles.menuFooter} to="/product">Produtos</Link>
              <Link className={styles.menuFooter} to="/cart">Carrinho</Link>
              <Link className={styles.menuFooter} to="/doc">Documentação do Projeto</Link>
            </Col>
            <Col xs={12} md={3}>
              <span>Contatos</span>
              <Link className={styles.menuFooter}>+55 (94) 99262-3788</Link>
              <Link className={styles.menuFooter}>rodrigues@portalctech.com.br</Link>
            </Col>
            <Col xs={12} md={12} className={styles.developedBy}>
              <p>
                Plataforma desenvolvida por Walace Rodrigues. Para o desafio Front End 2023 promovido pela empresa KuantoKusta.
              </p>
            </Col>
          </Row>
    </React.Fragment>
  );
};

export default Footer;
