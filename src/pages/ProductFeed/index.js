
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Product from '../../components/Product'
import Services from '../../services/select'
import { toast } from 'react-toastify'
import { Alert, Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import PaginationComponent from '../../components/Pagination';


const ProductFeed = () => {

  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(0);
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProduct();
  }, [
    rowsPerPage,
    currentPage,
    searchTerm,
  ])

  const loadProduct = async () => {

    const response = await Services.listProduct({
      rowsPerPage: rowsPerPage,
      page: currentPage,
      searchTerm:  searchTerm
    })

    if (response?.status === 200) {
      setProducts(response?.data?.data?.item);
      //setPage(response?.data?.data?.totalPages);
      setPage(2);
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
        <Col className={styles.pagination}>
          <PaginationComponent 
            pageNumber={page} 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          </Col>
    </React.Fragment>
  )
}

export default ProductFeed
