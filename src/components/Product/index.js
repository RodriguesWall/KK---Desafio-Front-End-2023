import React from "react";
import styles from "./styles.module.scss";
import { Col, Button } from "react-bootstrap";
import {convertMoney} from "../../utils/mask"
import { Link } from 'react-router-dom'


function Product({item,handler}) {
  
  return (
    <Col xs={6} md={3}>
        <Col className={styles.boxProduct} >
            <Link to={"/product/"+item.id}>
              <img 
                src={item.picture}
                className={styles.imgProduct}
                loading="lazy" 
              />
              <span>{item.name}</span>
              <p>          
                {convertMoney(item.price)}
              </p>
            </Link>
            <Button
            className={styles.btnBuy}
            onClick={()=> handler(item)}
            >
              Adicionar ao Carrinho
            </Button>
          </Col>
        
    </Col>
  );
}

export default Product;
