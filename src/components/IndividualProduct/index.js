import React from "react";
import styles from "./styles.module.scss";
import { Col, Row, Button } from "react-bootstrap";
import {convertMoney} from "../../utils/mask"

function Product({item,handler}) {
  
  return (
      <Row>
      <Col md={4} xs={12} className={styles.boxCenter}>
        <img 
          src={item.picture}
          className={styles.imgProduct}
          loading="lazy" 
        />
      </Col>
      <Col md={4} xs={12} className={styles.text}>
        <span>{item.name}</span>
          <p>          
            {item.price?(convertMoney(item.price)):(convertMoney(0))}
          </p>
        <Button
        className={styles.btnBuy}
        onClick={()=> handler(item)}
        >
          Adicionar ao Carrinho
        </Button>
      </Col>
      <Col md={4} xs={12}>
        <div dangerouslySetInnerHTML={{__html: item.description}}></div>
      </Col>            
      </Row>
  );
}

export default Product;
