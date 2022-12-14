import React from "react";
import "../styles/collections.scss";

//header
import UserImage from "../assets/User.svg";
import HeaderLogo from "../assets/headerLogo.svg";
import HeaderIcon1 from "../assets/headerIcon1.svg";
import HeaderIcon2 from "../assets/headerIcon2.svg";
import HeaderIcon3 from "../assets/headerIcon3.svg";
import HeaderIcon4 from "../assets/headerIcon4.svg";

//hero
import CardsHeaderLeft from "../assets/cardsHeaderLeft.png";
import CardsHeaderRight from "../assets/cardsHeaderRight.png";

//footer
import FooterCallIcon from "../assets/footerCallIcon.png";
import FooterIcon1 from "../assets/footerIcon1.png";
import FooterIcon2 from "../assets/footerIcon2.png";
import FooterIcon3 from "../assets/footerIcon3.png";
import FooterIcon4 from "../assets/footerIcon4.png";
import FooterLogo from "../assets/footerLogo.png";

const Collections = () => {
  return (
    <div className="collections">
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
        <section className="hero">
          <div className="hero__heading-container">
            <img src={CardsHeaderLeft} alt="CardsHeaderLeft" />
            <h2 className="hero__heading">All Collections</h2>
            <img src={CardsHeaderRight} alt="CardsHeaderRight" />
          </div>
        </section>

        <section className="collection-list">
          <div className="collection">
            <h3 className="collection__title">Necklaces</h3>
            <button className="collection__btn">View More</button>
          </div>
          <div className="collection">
            <h3 className="collection__title">Rings</h3>
            <button className="collection__btn">View More</button>
          </div>
          <div className="collection">
            <h3 className="collection__title">Ear Rings</h3>
            <button className="collection__btn">View More</button>
          </div>
          <div className="collection">
            <h3 className="collection__title">Bracelets</h3>
            <button className="collection__btn">View More</button>
          </div>
          <div className="collection">
            <h3 className="collection__title">Summer</h3>
            <button className="collection__btn">View More</button>
          </div>
          <div className="collection">
            <h3 className="collection__title">Wedding</h3>
            <button className="collection__btn">View More</button>
          </div>
          <div className="collection">
            <h3 className="collection__title">Necklaces</h3>
            <button className="collection__btn">View More</button>
          </div>
          <div className="collection">
            <h3 className="collection__title">Rings</h3>
            <button className="collection__btn">View More</button>
          </div>
          <div className="collection">
            <h3 className="collection__title">Ear Rings</h3>
            <button className="collection__btn">View More</button>
          </div>
          <div className="collection">
            <h3 className="collection__title">Bracelets</h3>
            <button className="collection__btn">View More</button>
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

export default Collections;
