import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiTwotoneLike } from "react-icons/ai";
import { IoWarning } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 5,
  speed: 900,
  gap:10,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

const Ratings = () => {
  return (
    <div id="product-detail-app">
      <article className="p-reviews-and-ratings">
        <div className="container">
          <header className="p-reviews-header">
            <h2 className="p-reviews-title" id="product-reviews-dr">
              Ürün Değerlendirmeleri
            </h2>
            <section className="p-reviews-header-info">
              <div className="p-reviews-header-info-l">
                <div className="p-reviews-rate">
                  <div className="p-reviews-stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p role="tooltip" className="p-reviews-rate-text">
                    4.3
                  </p>
                  <IoIosArrowDown />
                </div>
                <div className="p-reviews-header-seperator"></div>
                <p className="p-reviews-rate-count">331 Değerlendirme</p>
                <div className="p-reviews-header-seperator"></div>
                <p className="p-reviews-comment-count">
                  219 Yorum
                  <img
                    className="p-reviews-photo-img"
                    width="15"
                    height="12"
                    alt="Bu ürünün fotoğraflı yorumları var"
                    src="https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png"
                  ></img>
                </p>
              </div>
            </section>
          </header>

          <section className="reviews-section">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <article className="review-card-container">
                    <header className="review-card-header">
                      <div className="review-card-stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <div className="review-card-h-info">
                        <p className="review-card-owner">Ç** I**</p>
                        <div className="review-card-seperator"></div>
                        <div className="review-card-date">26 Ocak 2022</div>
                      </div>
                    </header>
                    <section className="review-card-comment">
                      <p>
                        <span className="review-card-comment-text">
                          Yılbaşı hediyesi aldım sorunsuz şekilde teslim edildi
                        </span>
                      </p>
                    </section>
                    <footer className="review-card-footer">
                      <p className="review-card-seller">
                        <p>Dualtek</p> satıcısından alındı.
                      </p>
                      <div className="review-card-interactions">
                        <button className="reviews-like-button">
                          <AiTwotoneLike />
                          <span>(3)</span>
                        </button>
                        <div className="review-card-seperator"></div>
                        <button className="reviews-report-button">
                          <IoWarning />
                        </button>
                      </div>
                    </footer>
                  </article>
                </div>

                <div>
                  <article className="review-card-container">
                    <header className="review-card-header">
                      <div className="review-card-stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <div className="review-card-h-info">
                        <p className="review-card-owner">Ç** I**</p>
                        <div className="review-card-seperator"></div>
                        <div className="review-card-date">26 Ocak 2022</div>
                      </div>
                    </header>
                    <section className="review-card-comment">
                      <p>
                        <span className="review-card-comment-text">
                          Yılbaşı hediyesi aldım sorunsuz şekilde teslim edildi
                        </span>
                      </p>
                    </section>
                    <footer className="review-card-footer">
                      <p className="review-card-seller">
                        <p>Dualtek</p> satıcısından alındı.
                      </p>
                      <div className="review-card-interactions">
                        <button className="reviews-like-button">
                          <AiTwotoneLike />
                          <span>(3)</span>
                        </button>
                        <div className="review-card-seperator"></div>
                        <button className="reviews-report-button">
                          <IoWarning />
                        </button>
                      </div>
                    </footer>
                  </article>
                </div>

                <div>
                  <article className="review-card-container">
                    <header className="review-card-header">
                      <div className="review-card-stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <div className="review-card-h-info">
                        <p className="review-card-owner">Ç** I**</p>
                        <div className="review-card-seperator"></div>
                        <div className="review-card-date">26 Ocak 2022</div>
                      </div>
                    </header>
                    <section className="review-card-comment">
                      <p>
                        <span className="review-card-comment-text">
                          Yılbaşı hediyesi aldım sorunsuz şekilde teslim edildi
                        </span>
                      </p>
                    </section>
                    <footer className="review-card-footer">
                      <p className="review-card-seller">
                        <p>Dualtek</p> satıcısından alındı.
                      </p>
                      <div className="review-card-interactions">
                        <button className="reviews-like-button">
                          <AiTwotoneLike />
                          <span>(3)</span>
                        </button>
                        <div className="review-card-seperator"></div>
                        <button className="reviews-report-button">
                          <IoWarning />
                        </button>
                      </div>
                    </footer>
                  </article>
                </div>
              </Slider>
            </div>
          </section>
          <div className="navigate-all-reviews">
            <div className="navigate-all-reviews-line"></div>
            <button className="navigate-all-reviews-btn">
              TÜM YORUMLARI GÖSTER
              <IoIosArrowDown />
            </button>
            <div className="navigate-all-reviews-line"></div>
          </div>
        </div>
      </article>

      <div className="container">
        <div className="questions-wrapper">
          <h3 className="questions-title">Ürün Soru ve Cevapları</h3>
          <div className="tags-wrapper">
            <section className="tag-slider">
              <Link className="question-tag">
                <p className="question-tag__name">tümü</p>
                <span className="question-tag__count">(330)</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link className="question-tag">
                <p className="question-tag__name">kargo ve teslimat</p>
                <span className="question-tag__count">(20)</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link className="question-tag">
                <p className="question-tag__name">montaj ve kurulum </p>
                <span className="question-tag__count">(7)</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link className="question-tag">
                <p className="question-tag__name">materyal tipi</p>
                <span className="question-tag__count">(6)</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link className="question-tag">
                <p className="question-tag__name">renk</p>
                <span className="question-tag__count">(4)</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link className="question-tag">
                <p className="question-tag__name">stok</p>
                <span className="question-tag__count">(16)</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link className="question-tag">
                <p className="question-tag__name">iade</p>
                <span className="question-tag__count">(1)</span>
                <MdKeyboardArrowRight />
              </Link>
            </section>
          </div>

          <section className="question-slider">
            <Slider {...settings}>
              <div className="question-card">
                <div title="50/75 6- 1 uyumlumu" className="question-text">onvo 12 xplas uyumluluğu yada sizde varmı</div>
                <div className="question-info"> 
                <span className="question-info__name-date">
                nuhal s. - 16 Ekim 2023
                </span>
                </div>
                <div className="answer-wrapper">
                   <div className="answer-wrapper-merchant"> 
                   <img  src="https://cdn.dsmcdn.com/seller-store/uploads/489293/logo.jpeg" alt="merchant logo" className="answer-wrapper-merchant__image"></img>
                   <div className="answer-wrapper-merchant__right">
                    <div className="answer-wrapper-merchant__right-merchant">
                        <span className="answer-wrapper-merchant__right-merchant-name">E Scooter Garaj</span>
                        satıcısının cevabı
                    </div>
                    <div className="answer-wrapper-merchant__right-time">15 saat içinde cevaplandı.</div>

                   </div>
                   </div> 
                   <p className="answer-wrapper__text-show-all">
                    <span className="answer-wrapper__text">Merhaba bu lastiğin uyumluluğu yok malesef, onvo 012 dolgu lastik diye aratırsanız bulabilirsiniz.</span>
                   </p>
                </div>
              </div>
              <div className="question-card">
                <div title="50/75 6- 1 uyumlumu" className="question-text">ön ve arka tekerlek için aynı ürünü alsam olurmu?</div>
                <div className="question-info"> 
                <span className="question-info__name-date">
                nuhal s. - 16 Ekim 2023
                </span>
                </div>
                <div className="answer-wrapper">
                   <div className="answer-wrapper-merchant"> 
                   <img  src="https://cdn.dsmcdn.com/seller-store/uploads/489293/logo.jpeg" alt="merchant logo" className="answer-wrapper-merchant__image"></img>
                   <div className="answer-wrapper-merchant__right">
                    <div className="answer-wrapper-merchant__right-merchant">
                        <span className="answer-wrapper-merchant__right-merchant-name">E Scooter Garaj</span>
                        satıcısının cevabı
                    </div>
                    <div className="answer-wrapper-merchant__right-time">15 saat içinde cevaplandı.</div>

                   </div>
                   </div> 
                   <p className="answer-wrapper__text-show-all">
                    <span className="answer-wrapper__text">Merhaba, ön ve arka tekerlek için aynı ürünü alabilirsiniz efendim. Her iki tekerlek için de uyumludur.</span>
                   </p>
                </div>
              </div>
              <div className="question-card">
                <div title="50/75 6- 1 uyumlumu" className="question-text">İyi günler ürün ön teker için uyumlu mu?</div>
                <div className="question-info"> 
                <span className="question-info__name-date">
                nuhal s. - 16 Ekim 2023
                </span>
                </div>
                <div className="answer-wrapper">
                   <div className="answer-wrapper-merchant"> 
                   <img  src="https://cdn.dsmcdn.com/seller-store/uploads/489293/logo.jpeg" alt="merchant logo" className="answer-wrapper-merchant__image"></img>
                   <div className="answer-wrapper-merchant__right">
                    <div className="answer-wrapper-merchant__right-merchant">
                        <span className="answer-wrapper-merchant__right-merchant-name">E Scooter Garaj</span>
                        satıcısının cevabı
                    </div>
                    <div className="answer-wrapper-merchant__right-time">1 dakika içinde cevaplandı.</div>

                   </div>
                   </div> 
                   <p className="answer-wrapper__text-show-all">
                    <span className="answer-wrapper__text">Maalesef yok ama tavsiye de etmiyoruz aşırı sert olduğu için biz satmıyoruz</span>
                   </p>
                </div>
              </div>
            </Slider>
          </section>
          <div className="navigate-all-questions"> 
          <div className="navigate-all-questions-line"></div>
            <button className="navigate-all-questions-btn">TÜM SORULARI GÖSTER<MdKeyboardArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
