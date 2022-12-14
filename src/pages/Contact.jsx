import React from "react";
import "../styles/contact.scss";

//header
import UserImage from "../assets/User.svg";
import HeaderLogo from "../assets/headerLogo.svg";
import HeaderIcon1 from "../assets/headerIcon1.svg";
import HeaderIcon2 from "../assets/headerIcon2.svg";
import HeaderIcon3 from "../assets/headerIcon3.svg";
import HeaderIcon4 from "../assets/headerIcon4.svg";

//contact
import { MdEmail, MdLocationOn, MdCall } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

//footer
import FooterCallIcon from "../assets/footerCallIcon.png";
import FooterIcon1 from "../assets/footerIcon1.png";
import FooterIcon2 from "../assets/footerIcon2.png";
import FooterIcon3 from "../assets/footerIcon3.png";
import FooterIcon4 from "../assets/footerIcon4.png";
import FooterLogo from "../assets/footerLogo.png";

const Contact = () => {
  return (
    <div className="contacts">
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
        <section className="contact__section">
          <div className="contact__form-container">
            <h3 className="contact__form-heading">Contact form style</h3>
            <hr />
            <form className="contact__form">
              <div className="contact__form-credentials">
                <div className="contact__form-item">
                  <label htmlFor="" className="contact__form-label">
                    Name
                  </label>
                  <input type="text" className="contact__form-input" required />
                </div>
                <div className="contact__form-item">
                  <label htmlFor="" className="contact__form-label">
                    Email
                  </label>
                  <input type="text" className="contact__form-input" required />
                </div>
              </div>
              <div className="contact__form-item">
                <label htmlFor="" className="contact__form-label">
                  Subject
                </label>
                <input type="text" className="contact__form-input" required />
              </div>
              <div className="contact__form-item">
                <label htmlFor="" className="contact__form-label">
                  Phone
                </label>
                <input type="text" className="contact__form-input" required />
              </div>
              <div className="contact__form-item">
                <label htmlFor="" className="contact__form-label">
                  Message
                </label>
                <textarea rows={6} className="contact__form-input" required />
              </div>
              <div className="contact__form-item">
                <button type="submit" className="contact__form-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="contact__info-container">
            <h3 className="contact__info-heading">Contact Info Style</h3>
            <hr />
            <div className="contact__info">
              <div className="contact__info-item">
                <div className="contact__info-icon-container">
                  <MdLocationOn className="contact__info-icon" />
                </div>
                <div className="contact__info-texts">
                  <h4 className="contact__info-title">Where to reach us</h4>
                  <p className="contact__info-text">
                    You can reach us at the following address
                  </p>
                  <p className="contact__info-text--small">
                    Kupondole, Lalitpur, Kathmandu
                  </p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon-container">
                  <MdEmail className="contact__info-icon" />
                </div>
                <div className="contact__info-texts">
                  <h4 className="contact__info-title">Email Us</h4>
                  <p className="contact__info-text">
                    Email your issues and suggestion for the following email
                    addresses:
                  </p>
                  <p className="contact__info-text--small">
                    intoprosnp@gmail.com
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon-container">
                  <MdCall className="contact__info-icon" />
                </div>
                <div className="contact__info-texts">
                  <h4 className="contact__info-title">Need to call Us?</h4>

                  <p className="contact__info-text--small">9861223344</p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon-container">
                  <FaQuestion className="contact__info-icon" />
                </div>
                <div className="contact__info-texts">
                  <h4 className="contact__info-title">WE HAVE GREAT SUPPORT</h4>

                  <p className="contact__info-text">
                    We provide the best Quality of products to you.We are always
                    here to help our lovely customers.We ship our products
                    anywhere with more secure. We provide the best Quality of
                    products to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map">
          <iframe
            title="intopros"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9818955635255!2d85.31282731453787!3d27.6869544329958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193d0960b993%3A0x887686c1ced6cb56!2sIntopros%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1671003153701!5m2!1sen!2snp"
            // width="800"
            // height="600"
            style={{ border: "none", width: "100vw", height: "20rem" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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

export default Contact;
