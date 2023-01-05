
import React, { useState, useEffect } from 'react'
import Carrossel from '../../components/Carrossel'
import Header from '../../components/Header'
import { toast } from 'react-toastify'
import styles from "./styles.module.scss";
import { Alert, Col, Button, Row } from "react-bootstrap";
import {convertMoney} from "../../utils/mask"
import {useCart} from "../../hooks/useCart";
import { Link, Redirect } from 'react-router-dom'

const Cart = () => {
  const { numberCart, setNumberCart, cart, setCart, totalCart, setTotalCart } = useCart();

  return (
    <React.Fragment>
      <Header title={"Carrinho"} />
      <Row className={styles.boxProduct}>
        <Row className={styles.headerCart}>
          <Col xl={6} md={6}>
            <span>PRODUTOS</span>
          </Col>
          <Col xl={3} md={3}>
            <span>QUANTIDADE</span>
          </Col>
          <Col xl={3} md={3}>
            <span>PREÇO</span>
          </Col>
        </Row>
        <Row className={styles.bodyCart}>

        </Row>
        <Row className={styles.footerCart}>
          <p>Subtotal <span>{convertMoney(totalCart)}</span></p>
          <div>
            <Link className={styles.linkCart} to="/product">Continuar Comprando</Link>
            <Button
              className={styles.btnFinish}
              onClick={()=> {
                toast.success("Função não implementada", {
                  autoClose: 1000
                })
              }}
              >
                Finalizar
              </Button>
          </div>
        </Row>
      </Row>
    </React.Fragment>
  )
}

export default Cart
