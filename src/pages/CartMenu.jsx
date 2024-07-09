import Cartitems1 from "../assets/images/cartitems1.png";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";


const CartMenu = () => {
  return (
    <section className="cartmenu">
      <div className="cart-title">
        <p>CONTINUE SHOPPING</p>
        <h3>Your Cart</h3>
      </div>
      <div className="cart-content">
        <div className="cart-content_left">
          <img src={Cartitems1} className="img_cart" />
        </div>
        <div className="cart-content_middle">
          <div>
            <p>Variety 2 in 1</p>
            <div className="variety_number">
              <GoPlus /> 1 <FiMinus />
            </div>
          </div>
        </div>
        <div className="cart-content_right">
          <div>
            <RiCloseFill />
            <h3>#40,00</h3>
          </div>
        </div>
      </div>
      <div className="cartmenu_btn">
        <div className="btn-main">
          <p>SUBCRIBE AND SAVE 5%</p>
        </div>
      </div>
      <div className="checkedout_btn">
        <div className="checkout-main_btn">
          <NavLink to="/checkout">
            <p>CHECKOUT</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CartMenu;
