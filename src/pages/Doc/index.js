
import React from 'react'
import { Container } from 'react-bootstrap'

const Cart = () => {
  return (
    <React.Fragment>
        <Container>
          <h2>Paginas do Desafio</h2>
          <ul>
            <li>Produtos => /products</li>
            <li>Carrinho => /cart</li>
          </ul>
          <h2>Paginas Adicionais</h2>
          <ul>
            <li>Home => /</li>
            <li>Detalhes do Produto => /product/idNumber</li>
          </ul>
          <h2>Rotas do Back End</h2>
          <span>URL: https://zap-plus-api.herokuapp.com</span>
          <ul>
            <li>
              Listar Produtos => /kuantoKusta/product/list [GET]
              <ul>
                <li>Produtos por pagina => rowsPerPage (int)</li>
                <li>Pagina atual => page (int)</li>
              </ul>
            </li>
            <li>
              Produtos Especifico => /kuantoKusta/product/especific [GET]
              <ul>
                <li>Id do Produto => id (int)</li>
              </ul>
            </li>
          </ul>
          <p></p>
        </Container>
    </React.Fragment>
  )
}

export default Cart
