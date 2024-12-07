import React, { useEffect, useState } from "react";
import axios from "axios";
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

const FirstSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products); // API yanıtındaki 'products' dizisini al
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="component-item widget-width">
        <div className="widget-container extended-container container similar-background">
          <div className="widget-gw-widget">
            <div className="widget-header">
              <span className="colorfull">Sana Özel Spor Outdoor Ürünleri

</span>
              <div className="widget-header-navigation">
                <Link
                  className="colorful"
                  to="/sanaozel/1?versionKey=singleProducts_JFY_Original_Woman_Deng"
                >
                  Tümünü Gör <MdKeyboardArrowRight />
                </Link>
              </div>
            </div>

            <div className="styles-module_sliderBase__swkx1 product-slider">
              <div className="styles-module_slider__o0fqa">
                <div className="slider-container">
                  <Slider {...settings} className="FirstSlider">
                    {products.map((product) => (
                      <div key={product.id} className="widget-product">
                        <Link to={`/product/${product.id}`}>
                          <div className="image-container">
                            <img
                              alt={product.title}
                              className="p-card-img"
                              src={product.images[0]} // İlk resmi gösteriyoruz
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
                            </div>
                            <div className="pr-rc-top-ranking-badge">
                              <img
                                alt="en iyi sıralama rozeti"
                                src="https://cdn.dsmcdn.com/web/production/category-top-ranking-icon.svg"
                                width="8"
                                height="12"
                              />
                              <span className="top-ranking-text">
                                En Çok Ziyaret Edilen 1. Ürün
                              </span>
                            </div>
                          </div>
                          <div className="description fixed-elements">
                            <div className="product-info-area">
                              <div className="product-brand-description two-line-text">
                                <div className="product-name-wrapper">
                                  <span className="brand">{product.brand}</span>
                                  <span className="name">{product.title}</span>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <span className="ratings-score">{product.rating}</span>
                                <div className="ratings">
                                  {[...Array(5)].map((_, i) => (
                                    <FaStar
                                      key={i}
                                      color={i < product.rating ? "#ffc107" : "#e4e5e9"}
                                    />
                                  ))}
                                  <span className="ratingCount">({product.stock})</span>
                                </div>
                              </div>
                            </div>
                            <div className="price-wrapper">
                              <div className="price-container">
                                <div className="price-box discounted">
                                  {product.price} TL
                                </div>
                              </div>
                            </div>
                            <div className="badges">
                              <div className="promotion-badge">
                                <img
                                  className="promotion-icon"
                                  src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg"
                                  alt="icon"
                                />
                                <span className="promotion-text">
                                  4 Al 3 Öde
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlider;
