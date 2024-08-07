import React from "react";
import logo from "../../assets/icons/ty-web.svg";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const Header = () => {
  return (
    <div>
      <div className="container">
        <div id="headerMain">
          <div className="header-top">
            <ul className="right">
              <li>
                <NavLink>İndirim Kuponlarım</NavLink>
              </li>
              <li>
                <NavLink>Trendyol'da Satış Yap</NavLink>
              </li>
              <li>
                <NavLink>Hakkımızda</NavLink>
              </li>
              <li>
                <NavLink>Yardım & Destek</NavLink>
              </li>
            </ul>
          </div>

          <div className="header">
            <div>
              <NavLink to="/">
                <img src={logo} id="logo" alt="" />
              </NavLink>
            </div>
            <div className="mOkuL__p">
              <div className="N4M8bfaJ">
                <input
                  type="text"
                  className="V8wbcUhU"
                  placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                />
                <IoIosSearch className="cyrzo7gC" />
              </div>
            </div>

            <div className="account-navigation-wrapper">
              <div className="account-nav-item user-login-container">
                <div className="link account-user">
                  <FaRegUser />
                  <p className="link-text">Giriş Yap</p>
                </div>
                <div className="new-login-dropdown">
                  <div className="user-notloggedin-container container-padding">
                    <div class="login-button">Giriş Yap</div>
                    <div class="signup-button signup-button-container">
                      Üye Ol
                    </div>
                  </div>
                </div>
              </div>
              <NavLink className="account-nav-item account-favorites">
                <div className="link">
                  <CiHeart className="initial-icon" />
                  <p class="link-text">Favorilerim</p>
                </div>
              </NavLink>
              <div class="account-nav-item basket-preview">
                <NavLink className="link account-basket">
                  <SlBasket />
                  <p class="link-text">Sepetim</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="navigation-wrapper">
<nav>
  <ul className="main-nav">
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Kadın</NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Erkek</NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Anne & Çocuk</NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Ev & Yaşam</NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Süpermarket</NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Kozmetik</NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Ayakkabı & Çanta</NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Elektronik</NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Spor&Outdoor</NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Çok Satanlar <span class="new-badge">Yeni</span></NavLink>
    </li>
    <li className="tab-link">
      <NavLink className="category-header navbar-first-cap">Flaş Ürünler <span class="new-badge">Yeni</span></NavLink>
    </li>
  </ul>
</nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
