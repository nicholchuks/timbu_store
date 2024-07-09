import newitems1 from "../assets/images/newitems1.png";
import newitems2 from "../assets/images/newitems2.png";
import newitems3 from "../assets/images/newitems3.png";
import newitems4 from "../assets/images/newitems4.png";
import newitems5 from "../assets/images/newitems5.png";
import newitems6 from "../assets/images/newitems6.png";
import newitems7 from "../assets/images/newitems7.png";
// import newitems8 from "../assets/images/newitems8.png";

const NewItems = () => {
  return (
    <section className="newitems">
      <div className="newitems-left_container">
        <div className="newitems_left">
          <h2>Thrill. Bliss. Zen. </h2>
          <p>
            Need pleasure on the go? We transformed our tantalizing,
            high-performance perfume into a delightful treat! It feels just like
            those classic, stimulating sensations
          </p>
        </div>
        <div className="newitems_middle">
          <div className="middle1_content">
            <img src={newitems1} />
            <div className="middle1_content_item">
              <h5>#14,000</h5>
              <div className="middle_content-btn">
                <p>Add to cart</p>
              </div>
            </div>
          </div>
          <div className="middle1_content">
            <img src={newitems2} />
            <div className="middle1_content_item">
              <h5>#17,000</h5>
              <div className="middle_content-btn">
                <p>Add to cart</p>
              </div>
            </div>
          </div>
          <div className="middle1_content">
            <img src={newitems3} />
            <div className="middle1_content_item">
              <h5>#19,000</h5>
              <div className="middle_content-btn">
                <p>Add to cart</p>
              </div>
            </div>
          </div>
          <div className="middle1_content">
            <img src={newitems4} />
            <div className="middle1_content_item">
              <h5>#11,000</h5>
              <div className="middle_content-btn">
                <p>Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-btn_container">
        <div className="middle_btn">
          <p>Buy Now</p>
        </div>
      </div>

      <div className="newitems_right">
        <div className="right1">
          <img src={newitems5} className="newimg" />
          <div className="right1_content">
            <h4>Ethereal Bloom</h4>
            <h4>For Women [Gold]</h4>
            <h4>#13,567</h4>
          </div>
        </div>

        <div className="right2">
          <img src={newitems6} className="newimg" />
          <div className="right1_content">
            <h4>Noir Eclipse</h4>
            <h4>Velvet Essence</h4>
            <h4>#17,800</h4>
          </div>
        </div>

        <div className="right3">
          <img src={newitems7} className="newimg" />
          <div className="right1_content">
            <h4>Amber Serenity</h4>
            <h4>Silk</h4>
            <h4>#30,690</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
