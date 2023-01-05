
import React, { useState, useEffect } from 'react'
import Carrossel from '../../components/Carrossel'
import Header from '../../components/Header'
import { toast } from 'react-toastify'
import styles from "./styles.module.scss";
import { Card, Col, Button, Row } from "react-bootstrap";
import {convertMoney} from "../../utils/mask"
import {useCart} from "../../hooks/useCart";
import { Link, Redirect } from 'react-router-dom'
import { Plus, Minus, Trash } from "react-feather";
import { calcCart } from '../../utils/functions';

const Cart = () => {
  const { numberCart, setNumberCart, cart, setCart, totalCart, setTotalCart } = useCart();

  const handler = (item, type) =>{
    let cartStorage = localStorage.getItem("cart@KuantoKusta");
    cartStorage = JSON.parse(cartStorage);
    cartStorage = cartStorage!= null ? (cartStorage):([]);
    cartStorage = cartStorage.map((dados)=>{
      if(dados.id===item.id){
        return {
          ...dados,
          quant: type==='minus'?(
              (dados.quant-1)<1?(1):(dados.quant-1)
            ):(
              dados.quant+1
            )
        }
      }
      return dados;
    })

    window.localStorage.setItem("cart@KuantoKusta", JSON.stringify(cartStorage));    
    let result = calcCart(cartStorage);

      setCart(cartStorage)  
      setTotalCart(result.total);
      setNumberCart(result.quant);
  }

  const removeProduct = async (id) => {
    let cartStorage = localStorage.getItem("cart@KuantoKusta");
    cartStorage = JSON.parse(cartStorage);
    let newCartStorage = [];
    console.log("=============")
    console.log(id)
    await cartStorage.map((dados)=>{
      console.log("ID: "+dados.id)
      if(dados.id!==id){
        console.log('push')
        newCartStorage.push(dados);  
      }
    })
    
    console.log('------------------')
    console.log(newCartStorage)

    window.localStorage.setItem("cart@KuantoKusta", JSON.stringify(newCartStorage));    
    if(newCartStorage.length!==0){
      let result = calcCart(newCartStorage);
      setCart(newCartStorage)  
      setTotalCart(result.total);
      setNumberCart(result.quant);
    }else{
      setCart([])  
      setTotalCart(0);
      setNumberCart(0);
    }
  }

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
          {cart.map((item,index)=>{
            return(
              <Row className={styles.productCart}>
                 <Col xs={12} xl={6} md={6} className={styles.boxImg}>
                    <img src={item.picture} className={styles.imgProduct}/>
                    <span>{item.name}
                      <div
                       onClick={()=>{ removeProduct(item.id) }}
                       ><Trash /> Remover</div>
                    </span>
                  </Col>
                  <Col xs={12} xl={3} md={3}  className={styles.count}>
                    <Minus onClick={()=>handler(item,'minus')}/>
                    <span>{item.quant}</span>
                    <Plus onClick={()=>handler(item,'plus')}/>
                  </Col>
                  <Col xs={12} xl={3} md={3} className={styles.price}>
                    <div>
                      <span>{convertMoney(item.price*item.quant)}</span>
                      <p>{convertMoney(item.price)} / Unidade</p>
                    </div>
                  </Col>
                
              </Row>
            )
          })}
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
