export const calcCart = (cart) =>{

  let result = cart.reduce((acc, item) => {     
    return {
      quant: acc.quant+item.quant,
      total: acc.total+(item.price*item.quant),
    }
  }, {quant:0, total:0});

  return result;
}