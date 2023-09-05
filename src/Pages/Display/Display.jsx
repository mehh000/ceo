
import classes from './Display.module.css'
import { PRODUCTS } from '../../Data/Data'
import Product from './product';



const Display = () => {



  return (
    <div className={classes.products} >

{PRODUCTS.map((item)=>(
  <Product item={item} />
))}
   
    </div>
  )
}

export default Display
