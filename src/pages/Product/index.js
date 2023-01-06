
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Product from '../../components/IndividualProduct'
import Services from '../../services/select'
import { toast } from 'react-toastify'
import { Container } from "react-bootstrap";
import {useCart} from "../../hooks/useCart";
import { calcCart } from '../../utils/functions';
import { useParams } from 'react-router-dom';

const ProductFeed = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([])
  const { setNumberCart, setCart, setTotalCart } = useCart();

  useEffect(() => {
    loadProduct();
  }, [
    id
  ])


  const loadProduct = async () => {
    const response = await Services.getEspecificProduct({id})
    if (response?.status === 200) {
      console.log(response)
      setProduct(response?.data?.data);
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
        <Container>
        <Header title={"Produto"} />
        <Product 
          item={product}
          handler={addProduct}
        />
        </Container>
    </React.Fragment>
  )
}

export default ProductFeed
