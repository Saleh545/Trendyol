import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaBox, FaStar } from "react-icons/fa";

const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 900,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
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
const Sale = () => {
  return (
    <div>
         <div className="component-item widget-width">
        <div className="widget-container extended-container container">
          <div className="widget-gw-widget">
            <div className="widget-header">
              <span className="colorfull">Çok Satan Ürünler</span>
              <div className="widget-header-navigation">
                <a
                  className="colorful"
                  href="/sanaozel/1?versionKey=singleProducts_JFY_Original_Woman_Deng"
                >
                  Tüm Ürünler! <MdKeyboardArrowRight />
                </a>
              </div>
            </div>

            <div className="styles-module_sliderBase__swkx1 product-slider">
              <div className="styles-module_slider__o0fqa ">
<div className="slider-container">
                <Slider {...settings} className="popular">
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/200/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/200/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/200/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/200/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/200/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/200/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/200/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="widget-product">
                    <Link>
                      <div className="image-container">
                        <img
                          alt="HC Care Complex Bitkisel Saç Bakım Kompleksi - 100 ml"
                          className="p-card-img "
                          src="https://picsum.photos/300"
                        />
                        <div className="product-stamps">
                          <div className="stamp-box-wrapper enhanced">
                            <div className="stamp fc">
                              <div className="inner">
                                <FaBox />
                                <span>KARGO BEDAVA</span>
                              </div>
                            </div>
                          </div>
                          <div className="custom-stamp-box-wrapper">
                            <div className="upper-left">
                              <img src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/moon/6b090e50-3660-459b-8dd6-8509f979066f.png" />
                            </div>
                          </div>
                        </div>
                        <div class="pr-rc-top-ranking-badge">
                          <img
                            alt="en iyi sıralama rozeti"
                            src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                            width="8"
                            height="12"
                          />
                          <span class="top-ranking-text">
                            En Çok Ziyaret Edilen 1. Ürün
                          </span>
                        </div>
                      </div>
                      <div class="description fixed-elements">
                        <div class="product-info-area">
                          <div class="product-brand-description two-line-text">
                            <div class="product-name-wrapper">
                              <span class="brand">HC Care</span>
                              <span class="name">
                                Complex Bitkisel Saç Bakım Kompleksi - 100 ml
                              </span>
                            </div>
                          </div>
                          <div class="ratings-container">
                            <span class="ratings-score">4.6</span>
                            <div class="ratings">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <span class="ratingCount">(45630)</span>
                            </div>
                          </div>
                        </div>

                        <div className="price-wrapper">
                          <div class="lowest-price-section">
                            <div class="low-price-in-last-month with-basket"></div>
                          </div>
                          <div class="price-container">
                            <div class="price-box discounted">439 TL</div>
                          </div>
                        </div>
                        <div class="badges">
                          <div class="promotion-badge">
                            <img
                              class="promotion-icon"
                              src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                              alt="icon"
                            />

                            <span class="promotion-text">4 Al 3 Öde</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                

                </Slider>

              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sale