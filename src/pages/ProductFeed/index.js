
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Product from '../../components/Product'
import Services from '../../services/select'
import { toast } from 'react-toastify'
import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import PaginationComponent from '../../components/Pagination';
import {useCart} from "../../hooks/useCart";
import { calcCart } from '../../utils/functions';

const ProductFeed = () => {

  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([])
  const { setNumberCart, setCart, setTotalCart } = useCart();


  useEffect(() => {
    loadProduct();
  }, [
    rowsPerPage,
    currentPage
  ])

const handlerCurrentPage = (info) =>{
  setCurrentPage(info)
  window.scroll(0, 0);
}
  const loadProduct = async () => {

    const response = await Services.listProduct({
      rowsPerPage: rowsPerPage,
      page: currentPage
    })

    if (response?.status === 200) {
      setProducts(response?.data?.data?.item);
      setPage(response?.data?.data?.totalPages);
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
        <Header title={"Produtos"} />
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
        <Col className={styles.pagination}>
          <PaginationComponent 
            pageNumber={page} 
            currentPage={currentPage}
            setCurrentPage={handlerCurrentPage}
          />
          </Col>
    </React.Fragment>
  )
}

export default ProductFeed
