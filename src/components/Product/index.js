import React from "react";
import styles from "./styles.module.scss";
import { Alert, Col, Button, Row } from "react-bootstrap";
import {convertMoney} from "../../utils/mask"
import {
  ShoppingCart,
  Eye
} from 'react-feather'

function Product({item}) {
  console.log(item)
  return (
    <Col xs={12} md={3}>
      <Col className={styles.boxProduct}>
        <img src={item.picture} className={styles.imgProduct}/>
        <span>{item.name}</span>
        <p>
          <span>Por </span>
          {convertMoney(item.price)}
        </p>
        <Button
         className={styles.btnBuy}
         >
          Adicionar ao Carrinho
        </Button>
      </Col>
    </Col>
  );
}

export default Product;
