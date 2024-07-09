import { CgFacebook } from "react-icons/cg";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import bottomlogo from "../assets/images/bottomlogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top1">
          <div className="footer-btn">
            <p>CONTACT US</p>
          </div>
          <div className="top1-links">
            <CgFacebook className="links" />
            <RiTwitterXFill className="links" />
            <AiOutlineInstagram className="links" />
          </div>
        </div>
        <div className="footer-top2"></div>
      </div>
      <div className="footer-bottom">
        <div className="bottom1">
          <div className="bottom1-btn">
            <p>Your Email</p>
          </div>
          <div className="bottom1-btn">
            <p>SUBCRIBE</p>
          </div>
        </div>
        <div className="bottom2">
          <div className="bottom2-left">
            <img src={bottomlogo} className="bottomlogo" />
          </div>
          <div className="bottom2-right">
            <p>Terms of Use</p>
            <p>Privacy policy</p>
            <p>FAQ</p>
            <p>Track Order</p>
            <p>Become an Affliate</p>

            <p>Refund Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
