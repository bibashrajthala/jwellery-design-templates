import React from "react";
import Slider from "react-slick";

//cards(bestseller)
import CardImage1 from "../assets/cardImage1.png";
// import CardImage2 from "../assets/cardImage2.png";
// import CardImage3 from "../assets/cardImage3.png";
// import CardImage4 from "../assets/cardImage4.png";
import CardStar from "../assets/cardStar.png";
import CardEmptyStar from "../assets/cardEmptyStar.png";
import ArrowLeft from "../assets/arrowLeft.png";
import ArrowRight from "../assets/arrowRight.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        width: "10rem",
        height: "10rem",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        width: "10rem",
        height: "10rem",
      }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ backgroundColor: "orangered", padding: "8rem" }}>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <div>
            <div className="card">
              <div className="card__img-container">
                <img src={CardImage1} alt="CardImage1" className="card_img" />
              </div>
              <div className="card__texts">
                <h3 className="card__title">Blue Diamond Ring</h3>
                <p className="card__prices">
                  <span className="card__price">Rs.145,000</span>
                  <span className="card__cut-price">Rs.180,000</span>
                </p>

                <div className="card__stars">
                  <img src={CardStar} alt="CardStar" className="card__star" />
                  <img src={CardStar} alt="CardStar" className="card__star" />
                  <img src={CardStar} alt="CardStar" className="card__star" />
                  <img src={CardStar} alt="CardStar" className="card__star" />
                  <img
                    src={CardEmptyStar}
                    alt="CardEmptyStar"
                    className="card__star"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
