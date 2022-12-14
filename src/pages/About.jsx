import React from "react";
import "../styles/about.scss";

//header
import UserImage from "../assets/User.svg";
import HeaderLogo from "../assets/headerLogo.svg";
import HeaderIcon1 from "../assets/headerIcon1.svg";
import HeaderIcon2 from "../assets/headerIcon2.svg";
import HeaderIcon3 from "../assets/headerIcon3.svg";
import HeaderIcon4 from "../assets/headerIcon4.svg";

//article
import ArticleImage1 from "../assets/articleImage1.png";
import ArticleImage2 from "../assets/articleImage2.png";
import ArticleImage3 from "../assets/articleImage3.png";

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

const About = () => {
  return (
    <div className="about">
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
          <div className="hero__card">
            <h2 className="hero__heading">
              OUR <span>VALUES</span>{" "}
            </h2>
            <p className="hero__texts">
              Jewels is a Pret collection of fine jewellery that uses golds or
              uncuts to create stunning pieces of Jewellery that are an
              extension of your personality. Jewels has always been one of the
              most important things driving tradition and heritage. Jshop is one
              best jewel you can find. always been one of the most important
              things driving tradition and heritage. Jshop is one best jewel you
              can find. tradition and heritage. Jshop is one best jewel you can
              find.
            </p>
          </div>
        </section>

        <article className="articles">
          <div className="article article1">
            <div className="article__img-container">
              <img
                src={ArticleImage1}
                alt="ArticleImage1"
                className="article__img"
              />
            </div>
            <div className="article__right">
              <div className="article__texts">
                <h3 className="article__heading">
                  Leaders in Wedding Jewelery
                </h3>
                <p className="article__text">
                  Jewels is a Pret collection of fine jewellery that uses golds
                  or uncuts to create stunning pieces of Jewellery that are an
                  extension of your personality. Jewels has always been one of
                  the most important things driving tradition and heritage. It
                  epitomizes the beauty and mystery surrounding your culture.
                  Jewellery through this site for jeweler online, strives to
                  encapsulate your values and sentiments with its artistic
                  outlook on jewellery design, gold sets and uncut diamond
                  overall. Jewels Collection aims to get women back in touch
                  with their roots, harking on their desire for contemporary
                  looks and styles in uncut diamond jewellery.
                </p>
              </div>
              <button className="article__btn">Start Shopping</button>
            </div>
          </div>
          <div className="article article2">
            <div className="article__img-container">
              <img
                src={ArticleImage2}
                alt="ArticleImage2"
                className="article__img"
              />
            </div>
            <div className="article__right">
              <div className="article__texts">
                <h3 className="article__heading">Collections for you</h3>
                <p className="article__text">
                  Jewels is a Pret collection of fine jewellery that uses golds
                  or uncuts to create stunning pieces of Jewellery that are an
                  extension of your personality. Jewels has always been one of
                  the most important things driving tradition and heritage. It
                  epitomizes the beauty and mystery surrounding your culture.
                  Jewellery through this site for jeweler online, strives to
                  encapsulate your values and sentiments with its artistic
                  outlook on jewellery design, gold sets and uncut diamond
                  overall. Jewels Collection aims to get women back in touch
                  with their roots, harking on their desire for contemporary
                  looks and styles in uncut diamond jewellery.
                </p>
              </div>
              <button className="article__btn">View Collections</button>
            </div>
          </div>
          <div className="article article3">
            <div className="article__img-container">
              <img
                src={ArticleImage3}
                alt="ArticleImage3"
                className="article__img"
              />
            </div>
            <div className="article__right">
              <div className="article__texts">
                <h3 className="article__heading">100% Gold - 24 Karet</h3>
                <p className="article__text">
                  Jewels is a Pret collection of fine jewellery that uses golds
                  or uncuts to create stunning pieces of Jewellery that are an
                  extension of your personality. Jewels has always been one of
                  the most important things driving tradition and heritage. It
                  epitomizes the beauty and mystery surrounding your culture.
                  Jewellery through this site for jeweler online, strives to
                  encapsulate your values and sentiments with its artistic
                  outlook on jewellery design, gold sets and uncut diamond
                  overall. Jewels Collection aims to get women back in touch
                  with their roots, harking on their desire for contemporary
                  looks and styles in uncut diamond jewellery.
                </p>
              </div>
              <button className="article__btn">Shop Now</button>
            </div>
          </div>
        </article>

        <section className="check">
          <div className="check__texts">
            <h3 className="check__heading">
              Check out our latest wedding
              <br />
              collections handpicked for you
            </h3>
            <p className="check__text">
              Make your wedding perfect with Jewelries from Jshop.
            </p>
          </div>
          <button className="check__btn">Check Now</button>
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

export default About;
