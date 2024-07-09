import top1 from "../assets/images/top1.png";
import top2 from "../assets/images/top2.png";
import top3 from "../assets/images/top3.png";
import top4 from "../assets/images/top4.png";

// react slick carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="top-picks">
      <h2>
        Top Picks for Ultimate <br className="pick" /> Satisfaction
      </h2>
      <div className="top-pick">
        {/* <Slider {...settings}> */}
          <div className="top1">
            <img src={top1} />
            <div className="container">
              <p>Blissful Wand</p>
              <h5>#10,000</h5>
              <div className="cart-btn">
                <p>Add to cart</p>
              </div>
            </div>
          </div>

          <div className="top2">
            <img src={top2} />
            <div className="container">
              <p>Delight Duet</p>
              <h5>#14,000</h5>
              <div className="cart-btn">
                <p>Add to cart</p>
              </div>
            </div>
          </div>

          <div className="top3">
            <img src={top1} />
            <div className="container">
              <p>Euphoria Elixir</p>
              <h5>#18,000</h5>
              <div className="cart-btn">
                <p>Add to cart</p>
              </div>
            </div>
          </div>

          <div className="top4">
            <img src={top1} />
            <div className="container">
              <p>Passion Pod</p>
              <h5>#16,000</h5>
              <div className="cart-btn">
                <p>Add to cart</p>
              </div>
            </div>
          </div>
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default Hero;
