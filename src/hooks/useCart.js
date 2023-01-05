import { useState, useEffect, useContext } from "react";
import {CartContext} from '../contexts/cartContext'

function useCart() {

  const context = useContext(CartContext);

  return context;
}

export { useCart };