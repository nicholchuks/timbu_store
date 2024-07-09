import { AiOutlineMenu } from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import toplogo from "../assets/images/toplogo.png";
import { AiOutlineClose } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav>
        <div>
          <AiOutlineMenu onClick={toggleMenu} className="hamburger" />
        </div>
        <div className="logo">
          <img src={toplogo} className="toplogo" />
        </div>

        <div className="menu-logo">
          <div className="shop-now">
            <p>Shop Now</p>
          </div>
          <IoPerson className="cart_itm person" />
          <CiSearch className="search cart_itm" />
          <NavLink to="/cartmenu">
            <IoCart className="cart cart_itm" />
          </NavLink>
        </div>
        <div className="nav-item">
          <div className="nav-button">
            <AiOutlineClose onClick={toggleMenu} className="close" />
          </div>
          <div
            // className="nav-list"
            className={`nav_lists ${isOpen ? "open" : ""}`}
          >
            <ul
              // className="nav-lists"
              className={`nav_lists ${isOpen ? "open" : ""}`}
            >
              <li>ABOUT US</li>
              <li>CONTACT US</li>
              <li>FAQS</li>
              <li>MY ACCOUNT</li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div>
          {/* <div className="inner-div"></div> */}
          <p>
            Ethereal Bloom: Captivating and Unforgettable Allure in Every Spray
          </p>
        </div>
        <div className="perfume_img"></div>
        <div className="btn">
          <h3>Shop Now</h3>
        </div>
      </main>
    </header>
  );
};

export default Navbar;
