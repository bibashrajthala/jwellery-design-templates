import React from "react";

import "../styles/home.scss";

//header
import UserImage from "../assets/User.svg";
import HeaderLogo from "../assets/headerLogo.svg";
import HeaderIcon1 from "../assets/headerIcon1.svg";
import HeaderIcon2 from "../assets/headerIcon2.svg";
import HeaderIcon3 from "../assets/headerIcon3.svg";
import HeaderIcon4 from "../assets/headerIcon4.svg";

//features
import FeatureIcon1 from "../assets/featureIcon1.png";
import FeatureIcon2 from "../assets/featureIcon2.png";
import FeatureIcon3 from "../assets/featureIcon3.png";
import FeatureIcon4 from "../assets/featureIcon4.png";

//cards(bestseller)
import CardImage1 from "../assets/cardImage1.png";
// import CardImage2 from "../assets/cardImage2.png";
// import CardImage3 from "../assets/cardImage3.png";
// import CardImage4 from "../assets/cardImage4.png";
import CardStar from "../assets/cardStar.png";
import CardEmptyStar from "../assets/cardEmptyStar.png";
import ArrowLeft from "../assets/arrowLeft.png";
import ArrowRight from "../assets/arrowRight.png";

//product
import ProductImage from "../assets/productImage.png";

//about
import AboutImage from "../assets/aboutImage.png";

//featured products
import FeaturedProductCardImage1 from "../assets/featuredProductCardImage1.png";
import FeaturedProductCardImage2 from "../assets/featuredProductCardImage2.png";
import FeaturedProductCardImage3 from "../assets/featuredProductCardImage3.png";

//blogs
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";
import Blog4 from "../assets/blog4.png";
import Blog5 from "../assets/blog5.png";
import Blog6 from "../assets/blog6.png";
import BlogTime from "../assets/blogTime.png";
import BlogDate from "../assets/blogDate.png";

//footer
import FooterCallIcon from "../assets/footerCallIcon.png";
import FooterIcon1 from "../assets/footerIcon1.png";
import FooterIcon2 from "../assets/footerIcon2.png";
import FooterIcon3 from "../assets/footerIcon3.png";
import FooterIcon4 from "../assets/footerIcon4.png";
import FooterLogo from "../assets/footerLogo.png";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="header__top">
          <div className="header__top-contacts">
            +977 9843765677 / contact@intopros.com
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
        <section className="hero">
          <h2 className="hero__heading">
            eXQUISITE DESIGNER RINGS
            <br /> <span>NEW COLLECTIONS</span>
          </h2>
          <button className="hero__button">View More</button>
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

        <section className="cards">
          <h2 className="cards__heading">The Bestsellers</h2>

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

        <section className="product">
          <div className="product__img-container">
            <img
              src={ProductImage}
              alt="ProductImage"
              className="product__img"
            />
          </div>

          <div className="product__right">
            <div className="product__texts">
              <h4 className="product__heading">
                Unique features with latest & trending products.
              </h4>
              <ul className="product__features">
                <li className="product__feature">
                  <div className="product__dot" />
                  <div className="product__text">
                    All frames constructed with hardwood solids and laminates
                  </div>
                </li>
                <li className="product__feature">
                  <div className="product__dot" />
                  <div className="product__text">
                    Reinforced with double wood dowels, glue, screw - nails
                    corner
                  </div>
                </li>
                <li className="product__feature">
                  <div className="product__dot" />
                  <div className="product__text">
                    Arms, backs and seats are structurally reinforced
                  </div>
                </li>
              </ul>
            </div>

            <div className="product__pricing">
              <button className="product__btn">Add to cart</button>

              <div className="product__price-container">
                <p className="product__title">Golden Ring</p>
                <p className="product__price">Rs. 90,200</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cards">
          <h2 className="cards__heading">Trending Products</h2>

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

        <section className="about">
          <div className="about__texts">
            <h3 className="about__heading">About</h3>
            <p className="about__description">
              Jewels is a Pret collection of fine jewellery that uses golds or
              uncuts to create stunning pieces of Jewellery that are an
              extension of your personality. Jewels has always been one of the
              most important things driving tradition and heritage. It
              epitomizes the beauty and mystery surrounding your culture.
              Jewellery through this site for jeweler online, strives to
              encapsulate your values and sentiments with its artistic outlook
              on jewellery design, gold sets and uncut diamond overall. Jewels
              Collection aims to get women back in touch with their roots,
              harking on their desire for contemporary looks and styles in uncut
              diamond jewellery.
            </p>
            <button className="about__btn">Start Shopping</button>
          </div>
          <div className="about__img-container">
            <img src={AboutImage} alt="AboutImage" className="about__img" />
          </div>
        </section>

        <section className="featured-products">
          <section className="featured-products__cards cards">
            <h2 className="cards__heading">Featured Products</h2>

            <div className="cards__wrap">
              <div className="cards__list">
                {[1, 2, 3, 4].map((el) => (
                  <div className="card featured-products__card">
                    <div className="card__img-container">
                      <img
                        src={FeaturedProductCardImage1}
                        alt="FeaturedProductCardImage1"
                        className="card_img"
                      />
                    </div>
                    <div className="card__texts">
                      <h3 className="card__title">Diamond Ring</h3>
                      <p className="card__prices">
                        <span className="card__price">Rs.145,000</span>
                        <span className="card__cut-price">Rs.180,000</span>
                      </p>
                    </div>
                  </div>
                ))}
                {[1, 2, 3, 4].map((el) => (
                  <div className="card featured-products__card">
                    <div className="card__img-container">
                      <img
                        src={FeaturedProductCardImage2}
                        alt="FeaturedProductCardImage2"
                        className="card_img"
                      />
                    </div>
                    <div className="card__texts">
                      <h3 className="card__title">Diamond Ring</h3>
                      <p className="card__prices">
                        <span className="card__price">Rs.145,000</span>
                        <span className="card__cut-price">Rs.180,000</span>
                      </p>
                    </div>
                  </div>
                ))}
                {[1, 2, 3, 4].map((el) => (
                  <div className="card featured-products__card">
                    <div className="card__img-container">
                      <img
                        src={FeaturedProductCardImage3}
                        alt="FeaturedProductCardImage"
                        className="card_img"
                      />
                    </div>
                    <div className="card__texts">
                      <h3 className="card__title">Diamond Ring</h3>
                      <p className="card__prices">
                        <span className="card__price">Rs.145,000</span>
                        <span className="card__cut-price">Rs.180,000</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        <section className="collections">
          <h2 className="cards__heading">Collections</h2>

          <div className="collections__grid">
            <div className="collection collection1">
              <h4 className="collection__title">Wedding Collection</h4>
              <button className="collection__btn">View More</button>
            </div>
            <div className="collection collection2">
              <h4 className="collection__title">Wedding Collection</h4>
              <button className="collection__btn">View More</button>
            </div>
            <div className="collection collection3">
              <h4 className="collection__title">Wedding Collection</h4>
              <button className="collection__btn">View More</button>
            </div>
            <div className="collection collection4">
              <h4 className="collection__title">Wedding Collection</h4>
              <button className="collection__btn">View More</button>
            </div>
            <div className="collection collection5">
              <h4 className="collection__title">Wedding Collection</h4>
              <button className="collection__btn">View More</button>
            </div>
            <div className="collection collection6">
              <h4 className="collection__title">Wedding Collection</h4>
              <button className="collection__btn">View More</button>
            </div>
          </div>
        </section>

        <section className="blogs">
          <h2 className="cards__heading">Blogs Updates</h2>

          <div className="blogs__cards">
            <div className="blog">
              <div className="blog__img-container">
                <img src={Blog1} alt="Blog1" className="blog__img" />
              </div>
              <div className="blog__texts">
                <h4 className="blog__heading">
                  Three jewelery gifting ideas for any occasion
                </h4>
                <p className="blog__btn">Read More</p>
                <div className="blog__dateAndTime">
                  <div className="blog__times">
                    <img src={BlogTime} alt="BlogTime" />
                    <span className="blog__time">5 min</span>
                  </div>
                  <div className="blog__dates">
                    <img src={BlogDate} alt="BlogDate" />
                    <span className="blog__date">12th Oct 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="blog__img-container">
                <img src={Blog2} alt="Blog2" className="blog__img" />
              </div>
              <div className="blog__texts">
                <h4 className="blog__heading">
                  Three jewelery gifting ideas for any occasion
                </h4>
                <p className="blog__btn">Read More</p>
                <div className="blog__dateAndTime">
                  <div className="blog__times">
                    <img src={BlogTime} alt="BlogTime" />
                    <span className="blog__time">5 min</span>
                  </div>
                  <div className="blog__dates">
                    <img src={BlogDate} alt="BlogDate" />
                    <span className="blog__date">12th Oct 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="blog__img-container">
                <img src={Blog3} alt="Blog3" className="blog__img" />
              </div>
              <div className="blog__texts">
                <h4 className="blog__heading">
                  Three jewelery gifting ideas for any occasion
                </h4>
                <p className="blog__btn">Read More</p>
                <div className="blog__dateAndTime">
                  <div className="blog__times">
                    <img src={BlogTime} alt="BlogTime" />
                    <span className="blog__time">5 min</span>
                  </div>
                  <div className="blog__dates">
                    <img src={BlogDate} alt="BlogDate" />
                    <span className="blog__date">12th Oct 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="blog__img-container">
                <img src={Blog4} alt="Blog4" className="blog__img" />
              </div>
              <div className="blog__texts">
                <h4 className="blog__heading">
                  Three jewelery gifting ideas for any occasion
                </h4>
                <p className="blog__btn">Read More</p>
                <div className="blog__dateAndTime">
                  <div className="blog__times">
                    <img src={BlogTime} alt="BlogTime" />
                    <span className="blog__time">5 min</span>
                  </div>
                  <div className="blog__dates">
                    <img src={BlogDate} alt="BlogDate" />
                    <span className="blog__date">12th Oct 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="blog__img-container">
                <img src={Blog5} alt="Blog5" className="blog__img" />
              </div>
              <div className="blog__texts">
                <h4 className="blog__heading">
                  Three jewelery gifting ideas for any occasion
                </h4>
                <p className="blog__btn">Read More</p>
                <div className="blog__dateAndTime">
                  <div className="blog__times">
                    <img src={BlogTime} alt="BlogTime" />
                    <span className="blog__time">5 min</span>
                  </div>
                  <div className="blog__dates">
                    <img src={BlogDate} alt="BlogDate" />
                    <span className="blog__date">12th Oct 2022</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="blog__img-container">
                <img src={Blog6} alt="Blog6" className="blog__img" />
              </div>
              <div className="blog__texts">
                <h4 className="blog__heading">
                  Three jewelery gifting ideas for any occasion
                </h4>
                <p className="blog__btn">Read More</p>
                <div className="blog__dateAndTime">
                  <div className="blog__times">
                    <img src={BlogTime} alt="BlogTime" />
                    <span className="blog__time">5 min</span>
                  </div>
                  <div className="blog__dates">
                    <img src={BlogDate} alt="BlogDate" />
                    <span className="blog__date">12th Oct 2022</span>
                  </div>
                </div>
              </div>
            </div>
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

export default Home;
