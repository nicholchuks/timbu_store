import Cartitems1 from "../assets/images/cartitems1.png";
import frame2 from "../assets/images/frame2.png";

const CheckOut = () => {
  return (
    <section className="checkout">
      <h3>Checkout</h3>
      <div className="checkout_content">
        <div className="checkout_top">
          <div className="checkout_top_left">
            <img src={Cartitems1} />
          </div>
          <div className="checkout_top_right">
            <div className="cart_number">
              <p>1</p>
            </div>
            <div className="cart_content">
              <h4>A complete set of bliss</h4>
              <h4>Variety 2 in 1 case</h4>
              <p>#40,000</p>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className="total">
          <div className="total_left">
            <p>Subtotal</p>
            <h4>#40000</h4>
          </div>
          <div className="total_right">
            <p>Total</p>
            <h4>#40000</h4>
          </div>
        </div>
        <div className="checkout_middle">
          <form>
            <label htmlFor="email">Contact</label>
            <input
              type="text"
              id="email"
              name="firstname"
              placeholder="Email"
            />

            <label htmlFor="email">Delivery</label>
            <input
              type="text"
              id="region"
              name="region"
              placeholder="Country/Region"
            />
            <div className="name">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last name"
              />
            </div>

            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
            />
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company[optional"
            />
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone[optional"
            />
          </form>
        </div>
        <div className="checkout_bottom">
          <label htmlFor="card">Payment</label>
          <p>All transition are secured and encripted</p>
          <img src={frame2} alt="" />
          <div className="card_numbers">
            <input
              type="text"
              id="email"
              className="card_number"
              name="card"
              placeholder="Card"
            />
            <div className="details">
              <input
                type="text"
                id="detail"
                name="expire"
                placeholder="Expiration date MM/YY"
              />
              <input
                type="text"
                id="detail"
                name="lastname"
                placeholder="Securit code"
              />
            </div>
            <input
              type="card"
              id="namecard"
              name="lastname"
              placeholder="Name on card"
            />
          </div>

          <div className="paypal">
            <div className="paypal_content">
              <div className="content_left">
                <input type="radio" id="radio" name="radio" />
                <label htmlFor="radio">Paypal</label>
              </div>
              <div className="content_right">
                <input type="radio" id="radio" name="radio" />
                <label htmlFor="radio">Bank transfer</label>
              </div>
            </div>
          </div>
          <p>All transition are secured and encripted</p>
          <div className="content_save">
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="radio">Save my information for fast checkout</label>
          </div>
          <input type="submit" className="btn-submit" value="Submit"></input>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
