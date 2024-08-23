import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaBox, FaStar } from "react-icons/fa";
import axios from "axios";


const Similar = () => {
    
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
  
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://api.escuelajs.co/api/v1/products");
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);
  return (
    <div>
        <div className="pr-rcs-w productDetail-Similar">
            <div className="container">
                <div className="pr-rcs-tl title">
                    <h3>Benzer Ürünler</h3>
                </div>


                <div className="component-item widget-width">
        <div className="widget-container extended-container similar-background ">
          <div className="widget-gw-widget">
             <div className="styles-module_sliderBase__swkx1 product-slider">
              <div className="styles-module_slider__o0fqa">
                <div className="slider-container">
                  <Slider {...settings} className="popular">
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
                                  <span className="brand">Brand</span>
                                  <span className="name">
                                    {product.title}
                                  </span>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <span className="ratings-score">4.6</span>
                                <div className="ratings">
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <span className="ratingCount">(45630)</span>
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
                                <span className="promotion-text">4 Al 3 Öde</span>
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
        </div>
    </div>
  )
}

export default Similar