import { useContext } from "react";
import classes from "./Cart.module.css";
import { CartContext } from "../../Context/CartContext";
import { getCartTotal } from "../../utils/getTotal";

const Cart = () => {
  const { cart ,handleRemove ,handleQuentityUpdate } = useContext(CartContext);

 // console.log(cart, "cart page")
  return (
    <div>
     
      <article className={classes.article}>
      
      {/* { btnDisable ? <div className={classes.warning} >the item cant be less then 1</div> : null } */}
        {cart.map((item) => (
          <div className={classes.cart_box} key={item.id}>
            <div className={classes.cart_img}>
              <img
                className={classes.item_img}
                src={item.productImage}
                alt=""
              />
              <p className={classes.item_name}>{item.name}</p>
              <span className={classes.item_name}>{item.price}</span>
            </div>
            <br />
            <div>
              <button
                className={classes.incrise}
                onClick={() => handleQuentityUpdate(item, +1)}
              >
                +
              </button>
              <span className={classes.quentity} >{item.quantity}</span>
              <button
                className={classes.incrise}
                onClick={() => handleQuentityUpdate(item, -1)}
                disabled={item.quantity === 1}
              >
                -
              </button>
            </div>
            <br />
            <div>
              <button
                className={classes.remove}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </article>
      <div className={classes.last_price}>
        <span className={classes.total}>Total Price Is</span>
        <span className={classes.total}>Taka: {getCartTotal(cart)} </span>
      </div>
    </div>
  );
};

export default Cart;
