import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { TiSocialFacebook } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="container">
        <Header />
        <div id="login-register">
          <div className="lr-title">
            <h1>Merhaba</h1>
            <h3>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</h3>
          </div>
          <div className="q-layout lr-header">
            <div className="flex-center header-buttons">
              <NavLink to="/login" exact className="button">
                <span>Giriş Yap</span>
              </NavLink>

              <NavLink to="/register" className="button">
                <span>Üye Ol</span>
              </NavLink>
            </div>
          </div>
          <div className="lr-container">
            <div className="q-layout login">
              <form action="">
                <div className="q-input-wrapper email-input">
                  <label className="q-label">E-Posta</label>
                  <input
                    className="q-input"
                    type="text"
                    id="login-email"
                    list="email-list"
                    name="login email"
                    autoComplete="username"
                    data-testid="email-input"
                  />
                </div>
                <div className="password-wrapper">
                  <div className="password">
                    <div className="q-input-wrapper">
                      <label className="q-label">Şifre</label>
                      <input
                        className="q-input"
                        type={showPassword ? "text" : "password"}
                        name="login-password"
                        id="login-password-input"
                        data-testid="password-input"
                        autoComplete="current-password"
                      />
                    </div>
                    <div onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                      {showPassword ? <GoEyeClosed /> : <RxEyeOpen />}
                    </div>
                  </div>
                </div>
                <div className="forgot-password">
                  <Link>
                    <span>Şifremi Unuttum</span>
                  </Link>
                </div>
                <button className="q-primary q-fluid q-button-medium q-button submit">
                  <span>Giriş Yap</span>
                </button>
              </form>
            </div>
            <div className="social-account-login-buttons">
              <div className="q-layout social-login-button flex flex-1">
                <div className="social-login-icon fb">
                  <TiSocialFacebook />
                </div>
                <div className="flex flex-column">
                  <div>
                    <div>Facebook</div>
                    <small>ile giriş yap</small>
                  </div>
                </div>
              </div>
              <div className="q-layout social-login-button flex flex-1">
                <div className="social-login-icon google">
                  <FaGoogle />
                </div>
                <div className="flex flex-column">
                  <div>
                    <div>Google</div>
                    <small>ile giriş yap</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="guest-user-track-orders">
              "Üye olmadan verilen siparişlerin takibi için"
              <span className="clickable-text">tıklayınız</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
