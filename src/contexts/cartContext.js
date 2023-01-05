import React, { createContext,useEffect, useState, useContext } from 'react';
import { calcCart } from '../utils/functions';

const CartContext = createContext();

function CartProvider({ children }) {
  const [numberCart, setNumberCart] = useState(null);
  const [totalCart, setTotalCart] = useState(0);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem("cart@KuantoKusta"));
    if (cartStorage) {
      let result = calcCart(cartStorage);
      setCart(cartStorage)  
      setTotalCart(result.total);
      setNumberCart(result.quant);
    }
}, []);

//Optei por utilizar Context para garantir que as informações do carrinho de compra estejam disponiveis para todas as telas do projeto
//garantindo atualização em tempo real por todo projeto sem necessidade de recarregar a tela

  return (
    <CartContext.Provider value={{  
      numberCart,
      setNumberCart,
      cart,
      setCart,
      totalCart,
      setTotalCart
       }}>
      {children}
    </CartContext.Provider>
  );
}
  

export { CartContext, CartProvider };

