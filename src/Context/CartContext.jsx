import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  //=======state for the condtional rendering btween display and cart component  //---------------------------------------------------------------------------


  //========its for the item cart=================================
  // const [cart, setCart] = useState([]);
  
  // const value = localStorage.getItem('cart')  
  // console.log(value)
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    //ok from himal = this line is simple we are getting value from the local and save in the var 
    return storedCart ? JSON.parse(storedCart) : [];
    //json.parse() this funtion take the string value in the local and make it a arry or object and send it to the state 
  });
  //===== A funtion to cheak if the item is already on cart or not .if not i wtll add it when some on eclick add

  const handleAddToCart = (item) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((product) => product.id === item.id);

    if (index !== -1) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }
    setCart(updatedCart);

  };

    localStorage.setItem("cart", JSON.stringify(cart));




  //====this funtion for remove item==================================

  const handleRemove = (id) => {
    let newcart = cart.filter((item) => item.id !== id);
    setCart(newcart);
  };

  //--------------------------------------------------------------------
  const handleQuentityUpdate = (item, d) => {
    const updatedCart = [...cart];
    const productIds = updatedCart.map((product) => product.id);
    const index = productIds.indexOf(item.id);

    // Use let instead of const

    if (updatedCart[index].quantity === 1 && d === -1) return;
    updatedCart[index].quantity += d;
    setCart(updatedCart);
  };
  return (
    <CartContext.Provider
      value={{
        handleRemove,
       
       
        setCart,
        cart,
        handleAddToCart,
        handleQuentityUpdate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
