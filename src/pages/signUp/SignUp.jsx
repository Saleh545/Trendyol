import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { TiSocialFacebook } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { FaCheck, FaGoogle } from "react-icons/fa";const SignUp = () => {
  return (
    <div> <div>
    <div className="container">
      <Header />
      <div id="login-register">
        <div className="lr-title">
          <h1>Merhaba</h1>
          <h3>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</h3>
        </div>
        <div className="q-layout lr-header">
          <div className="flex-center header-buttons">
            <NavLink to="/login" className="q-secondary q-button-medium q-button tab button mr-5 left ">
              <span>Giriş Yap</span>
            </NavLink>

            <NavLink to="/register" className="q-secondary q-button-medium q-button tab button right "><span>Üye Ol</span></NavLink>

          </div>
        </div>
        <div className="lr-container">
          <div className="q-layout login">
            <form action="">
              <div className="q-input-wrapper email-input">
                <label class="q-label">E-Posta</label>
                <input
                  class="q-input"
                  type="text"
                  id="login-email"
                  list="email-list"
                  name="login email"
                  autocomplete="username"
                  data-testid="email-input"
                />
              </div>
              <div className="password-wrapper">
                <div className="password">
                  <div className="q-input-wrapper">
                    <label class="q-label">Şifre</label>
                    <input
                      class="q-input"
                      type="password"
                      name="login-password"
                      id="login-password-input"
                      data-testid="password-input"
                      autocomplete="current-password"
                    />
                  </div>
                  <RxEyeOpen />
                  <GoEyeClosed />
                </div>
                  <p className="q-typography q-paragraph q-initial dark-gray">
                  <span class="password-info-text">
                  Şifreniz 
                  <b>en az 10 karakter</b>
                  olmalı. 
                  <b>1 büyük harf, 1 küçük harf</b>
                  ve
                  <b>rakam</b>
                  içermelidir.
                  </span>
                 </p>
              </div>
              <div className="gender flex flex-column">
                <label>Cinsiyet (Opsiyonel)</label>
                <div className="button-group flex">
               <button class="q-secondary q-fluid q-button-medium q-button female active  " type="button" aria-pressed="true">
                <span>Kadın</span>
                </button>   
                <button class="q-gray q-fluid q-button-medium q-button male  border-left-none" type="button" aria-pressed="false">
                  <span>Erkek</span>
                </button>
                </div>
              </div>
              <div className="new-co-privacy-statement-for-ty-checkbox">
                <div className="ty-display-flex ty-color-black ty-font-sm ty-flex-column ty-input-w">
                  <div className="ty-display-flex ty-checkbox-wrapper ty-checkbox-active">
                    <div className="ty-mgr-2 ty-relative ty-checkbox-container">
                      <div className="ty-bg-beige ty-mg-zero ty-input ty-checkbox ty-bordered">
                      <FaCheck />

                      </div>
                    </div>
                    <span className="ty-text ty-color-soft-gray ty-font-md ty-checkbox-text">
<div>Tarafıma avantajlı tekliflerin sunulabilmesi amacıyla kişisel verilerimin işlenmesine ve paylaşılmasına
  <span class="special-text">açık rıza</span>
  veriyorum.
</div>
                    </span>
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
              <div className="social-login-icon">
                <TiSocialFacebook />
              </div>
              <div className="flex flex-column">
                <div>
                  <div >facebook</div>
                  <small>ile giriş yap</small>
                </div>
              </div>
            </div>
            <div className="q-layout social-login-button flex flex-1">
              <div className="social-login-icon">
              <FaGoogle />
              </div>
              <div className="flex flex-column">
                  <div>
               <div>google</div>       
               <small>ile giriş yap</small>
                  </div>
              </div>
            </div>
          </div>
          <div className="guest-user-track-orders">
              "Üye olmadan verilen siparişlerin takibi için"
              <span class="clickable-text">tıklayınız</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div></div>
  )
}

export default SignUp