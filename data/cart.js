export const cart = [];

export function addToCart(productId){
    let matchingItem;
          cart.forEach((item) => {
              if(item.productId === productId){
                  matchingItem = item;
              } 
          })
          let selectValue = document.querySelector(`.js-quantity-selector-${productId}`).value;
          if(matchingItem){
              matchingItem.quantity = Number(selectValue);
          }
          else {
          cart.push({
              productId: productId,
              quantity: Number(selectValue)
          })
          }
  }