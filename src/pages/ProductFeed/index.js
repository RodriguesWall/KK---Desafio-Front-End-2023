
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Product from '../../components/Product'
import Services from '../../services/select'
import { toast } from 'react-toastify'
import { Alert, Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";


const ProductFeed = () => {

  const [infoFeed, setInfoFeed] = useState({
    rowsPerPage: 15,
    currentPage: 0,
    searchTerm: ''
  })
  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProduct();
  }, [
    infoFeed.rowsPerPage,
    infoFeed.currentPage,
    infoFeed.searchTerm,
  ])

  const loadProduct = async () => {

    const response = await Services.listProduct({
      rowsPerPage: infoFeed.rowsPerPage,
      page: infoFeed.currentPage,
      searchTerm:  infoFeed.searchTerm
    })

    if (response?.status === 200) {
      setProducts(response?.data?.data?.item);
    } else {
      toast.error("Erro ao listar os produtos")
      return false
    }
  }

  return (
    <React.Fragment>
        <Header title={"Produtos"} />
        <Row className={styles.boxProduct}>
          {products?.map((item, index) => {
            return(
              <Product 
                item={item}
              />
            )
          })}
        </Row>
    </React.Fragment>
  )
}

export default ProductFeed
