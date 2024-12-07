import React, { useState } from "react";
import { useBasket, useFavorites } from "../../context/BasketContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { IoIosCloseCircleOutline, IoMdSearch } from "react-icons/io";
import { MdTrendingDown } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToBasket } = useBasket();
  const [addedToBasket, setAddedToBasket] = useState({});

  if (favorites.length === 0) {
    return <div>Favoriler listeniz boş.</div>;
  }

  const handleAddToBasket = (product) => {
    addToBasket(product);
    setAddedToBasket((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
    setTimeout(() => {
      setAddedToBasket((prevState) => ({
        ...prevState,
        [product.id]: false,
      }));
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div className="favorites-container">
        <div className="container">
          <div id="account-gw-favorites">
            <div className="favorites-wrapper">
              <div className="favorites-header">
                <div className="favorites-header-wrapper">
                  <div className="header-left-section">
                    <Link className="active">
                      <FaHeart className="i-heart-orange" />
                      <span>Favorilerim</span>
                    </Link>

                    <Link>
                      <IoBookmark className="i-collections-icon" />
                      <span>Koleksiyonlarım</span>
                    </Link>
                  </div>
                  <div className="header-right-section">
                    <div className="searchbox-wrapper">
                      <div className="click-outside">
                        <input
                          type="text"
                          className="search-input input-passive"
                          placeholder="Favorilerimde ara"
                        />
                        <IoMdSearch className="search-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="favorites-special-filters-header">
                <div className="favorites-special-filters-header-multiple">
                  <div className="fsp-header-box none-filter active">
                    <div className="fsp-header-box-icon heart">
                      <FaHeart className="i-heart-fill" />
                    </div>
                    <span>Tüm Favoriler</span>
                  </div>
                  <div className="fsp-header-box price-badge">
                    <div className="fsp-header-box-icon star">
                      <FaStar className="i-star" />
                    </div>
                    <span>Avantajlı Ürünler</span>
                  </div>

                  <div className="fsp-header-box discounted-price">
                    <div className="fsp-header-box-icon chart-down">
                      <MdTrendingDown className="i-chart-down" />
                    </div>
                    <span>Fiyatı Düşenler</span>
                  </div>
                  <div className="fsp-header-box coupon-badge">
                    <div className="fsp-header-box-icon coupon">
                      <RiCouponLine className="i-coupon" />
                    </div>
                    <span>Kuponlu Ürünler</span>
                  </div>
                </div>
              </div>

              <div className="infinite-scroll">
                <div>
                  <div className="favored-product-container">
                    {favorites.map((product, index) => (
                      <div key={index} className="p-card-wrppr">
                        <div className="prdct-campaign-wrapper">
                          <Link className="p-card-chldrn-cntnr">
                            <div className="img-wrapper">
                              <img
                                src={product.images[0]}
                                alt={product.title}
                                style={{ width: "200px" }}
                              />
                              <div className="image-overlay">
                                <div className="image-overlay-header">
                                  <div className="stmp-box-wrppr">
                                    <div className="stmp fc">KARGO BEDAVA</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="prdct-desc-cntnr-wrppr">
                              <div className="prdct-desc-cntnr prdct-desc-cntnr-one-line">
                                <span className="prdct-desc-cntnr-ttl">
                                  {product.brand}
                                </span>
                                <span className="prdct-desc-cntnr-name no-white-space">
                                  {product.title}
                                </span>
                              </div>
                              <div className="ratings-container">
                                <span className="ratings-score">
                                  {product.rating}
                                </span>
                                <div className="ratings">
                                  {[...Array(5)].map((_, i) => (
                                    <FaStar
                                      key={i}
                                      color={
                                        i < product.rating
                                          ? "#ffc107"
                                          : "#e4e5e9"
                                      }
                                    />
                                  ))}
                                  <span className="ratingCount">
                                    ({product.stock})
                                  </span>
                                </div>
                              </div>
                              <div className="price-wrapper">
                                <div className="price-container">
                                  <div className="price-box discounted">
                                    {product.price} TL
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="add-to-basket-container">
                          <div className="pr-in-sz-w ">
                            <div className="size-dropdown no-cursor ">
                              <span className="text-one-size ">Tek Beden</span>
                            </div>
                          </div>
                          <div
                            className={`basket-button ${
                              addedToBasket[product.id] ? "added" : ""
                            }`}
                            onClick={() => handleAddToBasket(product)}
                          >
                            <span className="basket-text">
                              {addedToBasket[product.id]
                                ? "Sepete Eklendi"
                                : "Sepete Ekle"}
                            </span>
                          </div>
                        </div>
                        <div
                          className="ufvrt-btn-wrppr"
                          onClick={() => removeFromFavorites(product.id)}
                        >
                          <IoIosCloseCircleOutline />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
