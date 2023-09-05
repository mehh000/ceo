

import { useContext } from 'react';
import classes from './Display.module.css'
import { CartContext } from '../../Context/CartContext';


const product = ({item}) => {

  const{handleAddToCart}=useContext(CartContext);

  const { id, name, price, productImage } = item;

  return (
    <div className={classes.product}>
    <img src={productImage} alt=""  />
    <div className={classes.description}>
        <p>
            <b>{name}</b>
        </p>
        <p>{price}</p>
    </div>
    <button className={classes.addToCartBttn} onClick={()=>handleAddToCart(item)} >Add To Cart</button>
</div>
  )
}

export default product
