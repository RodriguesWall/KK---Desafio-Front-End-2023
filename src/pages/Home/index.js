
import React, { useState, useEffect, useContext } from 'react'
import Carrossel from '../../components/Carrossel'
import Layout from '../../components/Layout/Layout';
import {useCart} from "../../hooks/useCart";
import Services from '../../services/select'
import { toast } from 'react-toastify'
import { Alert, Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import Product from '../../components/Product'
import { calcCart } from '../../utils/functions';


const Home = () => {
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([])

  const { setNumberCart, setCart, setTotalCart } = useCart();


  useEffect(() => {
    loadProduct();
  }, [
    rowsPerPage,
    currentPage
  ])

  const loadProduct = async () => {

    const response = await Services.listProduct({
      rowsPerPage: rowsPerPage,
      page: currentPage,
      searchTerm:  ''
    })

    if (response?.status === 200) {
      setProducts(response?.data?.data?.item);
    } else {
      toast.error("Erro ao listar os produtos")
      return false
    }
  }

  const addProduct = (item) => {
    let cartStorage = localStorage.getItem("cart@KuantoKusta");
    cartStorage = JSON.parse(cartStorage);
    cartStorage = cartStorage!= null ? (cartStorage):([]);
    let check = cartStorage.find(info => info.id === item.id);
        
    if(check){
      cartStorage = cartStorage.map((dados)=>{
        if(dados.id===item.id){
          return {
            ...dados,
            quant: dados.quant+1
          }
        }
        return dados;
      })
    }else{
      cartStorage.push({
        ...item,
        quant: 1
      })
    }
    
    window.localStorage.setItem("cart@KuantoKusta", JSON.stringify(cartStorage));    
    let result = calcCart(cartStorage);
    setCart(cartStorage)
    setTotalCart(result.total);
    setNumberCart(result.quant);

    toast.success("Produto adicionado com sucesso", {
      autoClose: 1000
    })
  }

  return (
    <React.Fragment>
        <Carrossel />
        <Row className={styles.boxProduct}>
          {products?.map((item, index) => {
            return(
              <Product 
                item={item}
                handler={addProduct}
              />
            )
          })}
        </Row>
    </React.Fragment>
  )
}

export default Home
