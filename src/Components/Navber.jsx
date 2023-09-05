import { HouseLine, ShoppingCart } from "@phosphor-icons/react";

import classes from "./Navber.module.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Navber = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className={classes.navber}>
        <div className={classes.home}>
          {" "}
          <Link className={classes.linktag} to={"/"}>
            <HouseLine size={60} />{" "}
          </Link>
        </div>
        <div className={classes.Cart_logo}>
          <span className={classes.size_of_card}>{cart.length}</span>{" "}
          <Link className={classes.linktag} to={"/cart"}>
            <ShoppingCart size={60} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
