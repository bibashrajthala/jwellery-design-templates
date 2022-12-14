import React from "react";
import "../styles/productDetails.scss";

//header
import UserImage from "../assets/User.svg";
import HeaderLogo from "../assets/headerLogo.svg";
import HeaderIcon1 from "../assets/headerIcon1.svg";
import HeaderIcon2 from "../assets/headerIcon2.svg";
import HeaderIcon3 from "../assets/headerIcon3.svg";
import HeaderIcon4 from "../assets/headerIcon4.svg";

//productDetails
import ProductMainImage from "../assets/productMainImage-productDetail.png";
import ProductSideImage1 from "../assets/productSideImage1-productDetail.png";
import ProductSideImage2 from "../assets/productSideImage2-productDetail.png";
import ProductSideImage3 from "../assets/productSideImage2-productDetail.png";
import ProductSideImage4 from "../assets/productSideImage4-productDetail.png";
import Star from "../assets/cardStar.png";
import EmptyStar from "../assets/cardEmptyStar.png";
import { ReactComponent as ProductIcon1 } from "../assets/productIcon1-productDetail.svg";
import { ReactComponent as ProductIcon2 } from "../assets/productIcon2-productDetail.svg";
import { ReactComponent as ProductIcon3 } from "../assets/productIcon3-productDetail.svg";
import { ReactComponent as ProductIcon4 } from "../assets/productIcon4-productDetail.svg";
import { ReactComponent as ProductIcon5 } from "../assets/productIcon5-productDetail.svg";
import { ReactComponent as ProductIcon6 } from "../assets/productIcon6-productDetail.svg";
import { ReactComponent as ProductFavouriteIcon } from "../assets/productFavouriteIcon-productDetail.svg";

//features
import FeatureIcon1 from "../assets/featureIcon1.png";
import FeatureIcon2 from "../assets/featureIcon2.png";
import FeatureIcon3 from "../assets/featureIcon3.png";
import FeatureIcon4 from "../assets/featureIcon4.png";

//tabs
import TabImage1 from "../assets/tabImage1-productDetail.png";
import TabImage2 from "../assets/tabImage2-productDetail.png";

//cards(bestseller)
import CardImage1 from "../assets/cardImage1.png";
// import CardImage2 from "../assets/cardImage2.png";
// import CardImage3 from "../assets/cardImage3.png";
// import CardImage4 from "../assets/cardImage4.png";
import CardStar from "../assets/cardStar.png";
import CardEmptyStar from "../assets/cardEmptyStar.png";
import ArrowLeft from "../assets/arrowLeft.png";
import ArrowRight from "../assets/arrowRight.png";

//footer
import FooterCallIcon from "../assets/footerCallIcon.png";
import FooterIcon1 from "../assets/footerIcon1.png";
import FooterIcon2 from "../assets/footerIcon2.png";
import FooterIcon3 from "../assets/footerIcon3.png";
import FooterIcon4 from "../assets/footerIcon4.png";
import FooterLogo from "../assets/footerLogo.png";

const ProductDetails = () => {
  return (
    <div className="productDetails">
      <header className="header">
        <div className="header__top">
          <div className="header__top-contacts">
            +977 98437656heck@intopros.com
          </div>
          <div className="header__top-right">
            <span className="header__top-rate">Gold Rate: Rs. 7,982.00</span>
            <span className="header__top-currency">
              Currency: <b>NPR</b> USD
            </span>
            <span className="header__top-login">
              <img src={UserImage} alt="UserImage" /> <span>Login</span>
            </span>
          </div>
        </div>

        <div className="header__bottom">
          <div className="header__bottom-logo-container">
            <img
              src={HeaderLogo}
              alt="header logo"
              className="header__bottom-logo"
            />
          </div>

          <nav className="header__bottom-nav">
            <ul className="header__bottom-nav-list">
              <li>
                <a href="#1" className="header__bottom-nav-item">
                  Home
                </a>
              </li>
              <li>
                <a href="#1" className="header__bottom-nav-item">
                  About
                </a>
              </li>
              <li>
                <a href="#1" className="header__bottom-nav-item">
                  Products
                </a>
              </li>
              <li>
                <a href="#1" className="header__bottom-nav-item">
                  Collections
                </a>
              </li>
              <li>
                <a href="#1" className="header__bottom-nav-item">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__bottom-icons">
            <img
              src={HeaderIcon1}
              alt="HeaderIcon1"
              className="header__buttom-icon"
            />
            <img
              src={HeaderIcon2}
              alt="HeaderIcon2"
              className="header__buttom-icon"
            />
            <img
              src={HeaderIcon3}
              alt="HeaderIcon3"
              className="header__buttom-icon"
            />
            <img
              src={HeaderIcon4}
              alt="HeaderIcon4"
              className="header__buttom-icon"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="product">
          <div className="product__images">
            <div className="product__side-images">
              <div className="product__side-image-container">
                <img
                  src={ProductSideImage1}
                  alt="ProductSideImage1"
                  className="product__side-img"
                />
              </div>
              <div className="product__side-image-container">
                <img
                  src={ProductSideImage2}
                  alt="ProductSideImage2"
                  className="product__side-img"
                />
              </div>
              <div className="product__side-image-container">
                <img
                  src={ProductSideImage3}
                  alt="ProductSideImage3"
                  className="product__side-img"
                />
              </div>
              <div className="product__side-image-container">
                <img
                  src={ProductSideImage4}
                  alt="ProductSideImage4"
                  className="product__side-img"
                />
              </div>
            </div>
            <div className="product__main-image-container">
              <img
                src={ProductMainImage}
                alt="ProductMainImage"
                className="product__main-img"
              />
            </div>
          </div>
          <div className="product__right">
            <div className="product__info">
              <div className="product__texts">
                <div className="product__summary">
                  <div className="prodcut__summary-top">
                    <h4 className="product__name">Blue Diamond Ring</h4>
                    <div className="product__price-box">
                      <p className="product__price">Rs.70,0000</p>
                      <p className="product__price--cut">Rs.90,00</p>
                      <p className="product__price--discount">15% OFF</p>
                      <p className="product__status">In Stock</p>
                    </div>
                    <p className="product__special-feature">
                      Set in 24 Karet Gold (2.332 g)
                    </p>
                    <a
                      href="#4
                  "
                      className="product__link-to-detail"
                    >
                      Product Details
                    </a>
                  </div>

                  <div className="product__review-box">
                    <div className="product__review-stars">
                      <img
                        src={Star}
                        alt="Star"
                        className="product__review-star"
                      />
                      <img
                        src={Star}
                        alt="Star"
                        className="product__review-star"
                      />
                      <img
                        src={Star}
                        alt="Star"
                        className="product__review-star"
                      />
                      <img
                        src={Star}
                        alt="Star"
                        className="product__review-star"
                      />
                      <img
                        src={EmptyStar}
                        alt="EmptyStar"
                        className="product__review-star"
                      />
                    </div>
                    <div className="product__review">
                      <p className="product__review-numbers">4 Reviews(s)</p>
                      <a href="#4" className="product__review-link-to-add">
                        Add Your Review
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="product__description">
                  <h6 className="product__description-heading">Description:</h6>
                  <p className="product__description-text">
                    Rustic, natural, often made of bark-covered logs or simple
                    planks. Look for junk shop finds when in the country (for
                    authenticity), or purchase hand-made new versions.Rustic,
                    natural, often made of bark-covered logs or simple planks.
                    Look for junk shop finds when in the country (for
                    authenticity), or purchase hand-made new versions. when in
                    the country (for authenticity), or purchase
                    hand-made.Rustic, natural, often made of bark-covered logs
                    or simple planks. Look for junk shop finds when in the
                    country (for authenticity), or purchase{" "}
                  </p>
                </div>
                <hr />
                <div className="product__stockAndSize">
                  <div className="product__stock">
                    <h6 className="product__stock-heading">Availability:</h6>
                    <p className="product__stock-text">In Stock 10 Items(s)</p>
                  </div>
                  <div className="product__size">
                    <h6 className="product__size-heading">Size:</h6>
                    <select name="" id="" className="product__size-select">
                      <option disabled selected value="">
                        Select Size
                      </option>
                    </select>
                    <a href="#4" className="product__size-link-to-chart">
                      Size chart
                    </a>
                  </div>
                </div>
              </div>
              <div className="product__icons">
                <button className="product__icon-container">
                  <ProductIcon1 className="product__icon" />
                </button>
                <button className="product__icon-container">
                  <ProductIcon2 className="product__icon" />
                </button>
                <button className="product__icon-container">
                  <ProductIcon3 className="product__icon" />
                </button>
                <button className="product__icon-container">
                  <ProductIcon4 className="product__icon" />
                </button>
                <button className="product__icon-container">
                  <ProductIcon5 className="product__icon" />
                </button>
                <button className="product__icon-container">
                  <ProductIcon6 className="product__icon" />
                </button>
              </div>
            </div>
            <div className="product__btns">
              <button className="product__btn--add">Add to cart</button>
              <button className="product__btn--buy">Buy Now</button>
              <button className="product__btn--favourite-icon-container">
                <ProductFavouriteIcon className="product__btn--favourite-icon" />
              </button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <img
              src={FeatureIcon1}
              alt="FeatureIcon1"
              className="feature__img"
            />
            <p className="feature__text">Exclusive New Collections</p>
          </div>

          <div className="feature">
            <img
              src={FeatureIcon2}
              alt="FeatureIcon2"
              className="feature__img"
            />
            <p className="feature__text">Certified Gold Jewelry</p>
          </div>
          <div className="feature">
            <img
              src={FeatureIcon3}
              alt="FeatureIcon3"
              className="feature__img"
            />
            <p className="feature__text">24/7 Customer Support</p>
          </div>
          <div className="feature">
            <img
              src={FeatureIcon4}
              alt="FeatureIcon4"
              className="feature__img"
            />
            <p className="feature__text">100% Secure Payment</p>
          </div>
        </section>

        <section className="tabs">
          <img src={TabImage1} alt="TabImage1" className="tabs__sideImage1" />
          <img src={TabImage2} alt="TabImage2" className="tabs__sideImage2" />
          <div className="tab">
            <div className="tab__titles">
              <button className="tab__title tab__title--active">
                Product Details
              </button>
              <button className="tab__title">Description</button>
              <button className="tab__title">Reviews</button>
            </div>
            <div className="tab__contents">
              <div className="tab__content">
                <h4 className="tab__content-heading">Product Details</h4>
                <div className="tab__content-boxes">
                  <div className="tab__content-box">
                    <h5 className="tab__content-title">Product Information</h5>
                    <div className="tab__content-texts">
                      <p className="tab__content-text">
                        Gross Weight - 2.332 g
                      </p>
                      <p className="tab__content-text">Width - 19.6 mm</p>
                      <p className="tab__content-text">Height - 2.3 mm</p>
                      <p className="tab__content-text">Purity - 24 Karet</p>
                      <p className="tab__content-text">
                        Size - 11/50.2 mm (Medium)
                      </p>
                    </div>
                  </div>
                  <div className="tab__content-box">
                    <h5 className="tab__content-title">Diamond Information</h5>
                    <div className="tab__content-texts">
                      <p className="tab__content-text">
                        Gross Weight - 2.332 g
                      </p>
                      <p className="tab__content-text">Width - 19.6 mm</p>
                      <p className="tab__content-text">Height - 2.3 mm</p>
                      <p className="tab__content-text">Purity - 24 Karet</p>
                      <p className="tab__content-text">
                        Size - 11/50.2 mm (Medium)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab__content">
                <h4 className="tab__content-heading">Services</h4>
                <div className="tab__content-boxes">
                  <div className="tab__content-box">
                    <h5 className="tab__content-title">Services Information</h5>
                    <div className="tab__content-texts">
                      <p className="tab__content-text">
                        Expected Shipping Date - 17 Jan 2023
                      </p>
                      <p className="tab__content-text">
                        Easy Returns (Days) - 15 Days
                      </p>
                      <p className="tab__content-text">
                        Lifetime Exchange - Not Applicable
                      </p>
                      <p className="tab__content-text">Purity - 24 Karet</p>
                      <p className="tab__content-text">
                        Lifetime Buyback - Not Applicable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cards">
          <h2 className="cards__heading">Related Products</h2>

          <div className="cards__wrap">
            <button className="cards__wrap-btn">
              <img src={ArrowLeft} alt="ArrowLeft" />
            </button>

            <div className="cards__list">
              {[1, 2, 3, 4].map((el) => (
                <div className="card">
                  <div className="card__img-container">
                    <img
                      src={CardImage1}
                      alt="CardImage1"
                      className="card_img"
                    />
                  </div>
                  <div className="card__texts">
                    <h3 className="card__title">Blue Diamond Ring</h3>
                    <p className="card__prices">
                      <span className="card__price">Rs.145,000</span>
                      <span className="card__cut-price">Rs.180,000</span>
                    </p>

                    <div className="card__stars">
                      <img
                        src={CardStar}
                        alt="CardStar"
                        className="card__star"
                      />
                      <img
                        src={CardStar}
                        alt="CardStar"
                        className="card__star"
                      />
                      <img
                        src={CardStar}
                        alt="CardStar"
                        className="card__star"
                      />
                      <img
                        src={CardStar}
                        alt="CardStar"
                        className="card__star"
                      />
                      <img
                        src={CardEmptyStar}
                        alt="CardEmptyStar"
                        className="card__star"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="cards__wrap-btn">
              <img src={ArrowRight} alt="ArrowRight" />
            </button>
          </div>
        </section>

        <section className="contact">
          <div className="contact__texts">
            <h3 className="contact__heading">
              Jewelries made by the best, for the best.
              <br /> Contact us for exclusive jeweleries
            </h3>
            <p className="contact__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, cons adipiscing elit. Lorem ipsum dolor sit am
            </p>
          </div>
          <button className="contact__btn">Contact Us</button>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__top">
          <div className="footer__left">
            <div className="footer__texts">
              <div className="footer__logo-container">
                <img
                  src={FooterLogo}
                  alt="FooterLogo"
                  className="footer__logo"
                />
              </div>
              <p className="footer__text">
                We provide the best Quality of products to you.We are always
                here to help our lovely customers. We provide the best Quality
                of products.
              </p>
            </div>
            <div className="footer__icons">
              <button className="footer__icon-container">
                <img
                  src={FooterIcon1}
                  alt="FooterIcon1"
                  className="footer__icon"
                />
              </button>
              <button className="footer__icon-container">
                <img
                  src={FooterIcon2}
                  alt="FooterIcon2"
                  className="footer__icon"
                />
              </button>

              <button className="footer__icon-container">
                <img
                  src={FooterIcon3}
                  alt="FooterIcon3"
                  className="footer__icon"
                />
              </button>

              <button className="footer__icon-container">
                <img
                  src={FooterIcon4}
                  alt="FooterIcon4"
                  className="footer__icon"
                />
              </button>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__nav">
              <h5 className="footer__nav-heading">Company</h5>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">Career</li>
                <li className="footer__nav-item">About Us</li>
                <li className="footer__nav-item">Our Story</li>
                <li className="footer__nav-item">Press</li>
              </ul>
            </div>
            <div className="footer__nav">
              <h5 className="footer__nav-heading">Help & Support</h5>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">FAQ</li>
                <li className="footer__nav-item">Terms of Service</li>
                <li className="footer__nav-item">
                  Intellectual Property Claim
                </li>
                <li className="footer__nav-item">Privacy Policy</li>
                <li className="footer__nav-item">Cookies</li>
                <li className="footer__nav-item">
                  Non-Discriminatory Statement
                </li>
                <li className="footer__nav-item">User Agreement</li>
              </ul>
            </div>
            <div className="footer__call">
              <div className="footer__call-icon-container">
                <img
                  src={FooterCallIcon}
                  alt="FooterCallIcon"
                  className="footer__call-icon"
                />
              </div>
              <div className="footer__call-texts">
                <p className="footer__call-text">Contact Number</p>
                <a href="#4" className="footer__call-number">
                  9861223344
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            © 2022 <span>Intopros</span>. All Rights Reserved
          </p>
          <p>Home | About | Blog | Contact</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;
