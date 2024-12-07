import React from "react";
import { useBasket } from "../../context/BasketContext.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoTicket } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import { FiMinus, FiPlus } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { PiChartLineDownLight } from "react-icons/pi";
import { SlBasketLoaded } from "react-icons/sl";

const Basket = () => {
  const { basket, increaseQuantity, decreaseQuantity, removeFromBasket } =
    useBasket();

  const calculateTotalPrice = () => {
    return basket
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const shippingCost = 39.99;
  const discount = calculateTotalPrice() >= 200 ? shippingCost : 0;
  const totalPrice = (
    parseFloat(calculateTotalPrice()) +
    (shippingCost - discount)
  ).toFixed(2);

  return (
    <div>
      <Header />
      <div id="basket-app-container">
        <div className="container">
          <div id="pb-container">
            <div className="pb-wrapper">
             
              <div className="pb-header-wrapper">
                <div className="pb-header">Sepetim ({basket.length} Ürün)</div>
                <div className="pb-header-az-shipment-country-wrapper">
                  <div className="pb-header-az-shipment-country">
                    <p className="shipment-country">Çatdırılma Ölkəsi:</p>
                    <img
                      className="selected-shipment-country-flag"
                      src="https://cdn.dsmcdn.com/web/production/checkout-tr-flag.svg"
                      alt="Teslimat için seçilen ülke bayrağı Türkiye"
                    />
                    <p className="selected-shipment-country">Türkiyə</p>
                  </div>
                  <button className="change-selected-shipment-country">
                    Dəyişdir
                  </button>
                </div>
              </div>

              <div className="pb-merchant-group">
                {basket.length > 0 ? (
                  basket.map((item, index) => (
                    <div key={index} className="pb-merchant">
                      <div className="pb-merchant-header">
                        <div className="pb-merchant-info">
                          <BiSolidCheckboxChecked className="checkboxc" />
                          <div className="merchant-label">{item.brand}</div>
                          <div className="pb-merchant-details">
                            <Link
                              to="/sr?mid=665980"
                              target="_blank"
                              className="pb-merchant-name"
                            >
                              <span>{item.seller}</span>
                              <div className="pb-merchant-point">8.8</div>
                              <MdKeyboardArrowRight />
                            </Link>
                          </div>
                        </div>
                        <div className="pb-promotion-info">
                          <div className="supplier-promotion-container">
                            <Link
                              className="supplier-promotion"
                              to="/sr?prm=16764079"
                              target="_blank"
                            >
                              <IoTicket />
                              <span className="promotion-name">
                                990 TL'ye 100 TL İndirim
                              </span>
                              <span className="browse-products-label">
                                Tüm Ürünler
                                <MdKeyboardArrowRight />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div
                        className="shipping-information-area promotion-applied"
                        data-tracker="seen:cargo_promotion_applied"
                      >
                        <LuBox className="i-empty-box" />
                        <p>Kargo Bedava!</p>
                      </div>

                      <div className="pb-basket-item-wrapper-v2">
                        <div className="pb-basket-item checkout-saving-enabled">
                          <BiSolidCheckboxChecked className="checkboxc" />
                          <div className="pb-basket-item-img-wrapper">
                            <div className="pb-img-container">
                              <div className="pb-img-wrapper">
                                <img
                                  src={item?.images[0]}
                                  style={{ width: "200px", height: "auto" }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="pb-basket-item-details">
                            <Link
                              to="/kraftech/yeni-nesil-araba-far-temizleme-sivisi-far-temizleme-solusyonu-kloroform-2-kg-p-330715811?boutiqueId=61&merchantId=376111"
                              className="pb-basket-item-details-info"
                              target="_blank"
                            >
                              <p className="pb-item" title={item.title}>
                                <span>{item.brand} </span>
                                {item.title}
                              </p>
                              <p className="pb-basket-item-delivery-info">
                                <TbTruckDelivery className="delivery" />
                                <span>Tahmini Kargoya Teslim:</span>
                                <span>3 gün içinde</span>
                              </p>
                            </Link>
                          </div>
                          <div className="pb-basket-item-actions">
                            <button
                              aria-label="Ürünü sepetten çıkartma"
                              className="checkout-saving-remove-button"
                              onClick={() => removeFromBasket(item.id)}
                            >
                              <GoTrash />
                              <span>Sil</span>
                            </button>
                            <div className="pb-basket-item-actions-info">
                              <div className="pb-basket-item-counter-wrapper">
                                <div className="pb-counter-container">
                                  <div className="ty-display-flex ty-numeric-counter">
                                    <button
                                      type="button"
                                      className="ty-numeric-counter-button"
                                      onClick={() => decreaseQuantity(item.id)}
                                      aria-label="Ürün adedi azaltma"
                                    >
                                      <FiMinus />
                                    </button>
                                    <input
                                      type="text"
                                      className="counter-content"
                                      value={item.quantity}
                                      readOnly
                                    />
                                    <button
                                      type="button"
                                      className="ty-numeric-counter-button"
                                      onClick={() => increaseQuantity(item.id)}
                                      aria-label="Ürün adedi artırma"
                                    >
                                      <FiPlus />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pb-basket-item-saving-price-and-badge-wrapper">
                              <div className="pb-basket-item-saving-price-and-badge">
                                <div className="price-wrapper">
                                  <div className="pb-basket-item-price">
                                    {item.price.toFixed(2)} TL
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="pb-empty-basket">
                <div><SlBasketLoaded /><span>Sepetinde ürün bulunmamaktadır.</span></div>
                <div><Link className="">Alışverişe Başla</Link></div>

              </div>
                )}
              </div>

              <div className="pb-suggestion-tabs-wrapper">
                <div className="pb-suggestion-tabs-head show">
                  <section className="active">Önceden Eklediklerim</section>
                  <section class>Önerilen Ürünler</section>
                  <section data-tracker="seen:basket-buyagain" class>
                    Tekrar Satın Al
                  </section>
                  <section data-tracker="seen:basket-favorites" class>
                    {" "}
                    Favorilerim
                    <div className="new-badge-wrapper">
                      <p className="new-badge-text">Yeni</p>{" "}
                    </div>
                  </section>
                </div>
                <div className="pb-suggestion-tabs-content">
                  <div className="show">
                    <div id="recently-added-container">
                      <div className="recently-added-layout">
                        <div className="ra-l-items">

{basket.map((item,index)=>{
return(
                          <div key={index} className="recently-added-item-card">
                            <div className="recently-added-item-card-img-wrapper">
                              <img src={item.images[0]}
                                alt="product image"
                              />
                            </div>
                            <div className="recently-added-item-info-container">
                              <Link className="ra-ic-info">
                                <div className="ra-ic-action-group">
                                  <p className="ra-ic-info-name">
                                    <p className="highlighted">{item.brand}</p>
                                  {item.title}
                                  </p>
                                  <Link className="ra-ic-remove-item">
                                    <CiHeart className="i-heart"/>
                                    <FaRegTrashCan className="i-trash" />
                                  </Link>
                                </div>
                                <div className="social-proof">
                                  <div className="social-proof-items-wrapper">
                                    <div className="social-proof-item">
                                      <img
                                        src="https://cdn.dsmcdn.com/mnresize/30/30/mobile/pdp/Additional/orange-heart_1f9e1.png"
                                        alt="ürün istatistikleri"
                                      />
                                      <p>
                                        <span>35.1B</span>
                                        <span>kişi</span>
                                        favoriledi!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="ra-ic-info-campaign">
                                  <div className="ra-ic-info-campaign-item ra-ic-info-promotion-badge">
                                    <IoTicket className="i-promotion" />
                                    <p>3 Adet ve Üzeri 35 TL İndirim</p>
                                  </div>
                                  <div className="ra-ic-info-campaign-item ra-ic-info-rd-badge">
                                    <TbTruckDelivery className="i-fast-delivery-icon" />
                                    <p>Hızlı Teslimat</p>
                                  </div>
                                  <div className="ra-ic-info-campaign-item ra-ic-info-fc-badge">
                                    <LuBox className="i-campaign-box" />
                                    <p>Kargo Bedava</p>
                                  </div>
                                </div>
                              </Link>

                              <div className="ra-ic-actions">
                                <div className="ra-ic-info-price-section">
                                  <div className="ra-ic-info-badge ra-ic-info-added-price-badge">
                                    <PiChartLineDownLight className="i-chart-down ra-ic-info-added-price-badge-icon" />
                                    <p>Son 7 Günün En Düşük Fiyatı!</p>
                                  </div>
                                  <div className="ra-ic-info-price-area">
                                    <p className="ra-ic-info-sale-price price-color">
                                      219 TL
                                    </p>
                                  </div>
                                </div>
                                <Link className="ty-custom-primary-btn-v2">Sepete Ekle</Link>
                              </div>
                            </div>
                          </div>
                       )   })}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {basket.length > 0 && (


              <div className="sticky">
                <div className="pb-summary">
                  <div className="pb-summary-approve">
                    <div className="ty-link-btn-primary">
                      <Link className="ty-link-btn-primary">
                        <span>Sepeti Onayla</span>{" "}
                      </Link>
                    </div>
                  </div>

                  <div className="pb-summary-box">
                    <h1>Sipariş Özeti</h1>
                    <ul className="pb-summary-box-prices">
                      <li>
                        <span>Ürünün Toplamı</span>
                        <p>{calculateTotalPrice()} TL</p>
                      </li>
                      <li>
                        <span>Kargo Toplam</span>
                        <p>{shippingCost.toFixed(2)} TL</p>
                      </li>
                      <li className="pb-summary-promotion from-checkout-saving">
                        <div>
                          200 TL ve Üzeri Kargo Bedava (Satıcı Karşılar){" "}
                        </div>{" "}
                        <strong className="discount">
                          -{discount.toFixed(2)}TL
                        </strong>
                      </li>
                      <li>
                        <span>Toplam Kazancın</span>
                        <p>-{discount.toFixed(2)} TL</p>
                      </li>
                      <li></li>
                    </ul>
                    <div className="pb-summary-total-price discount-active">
                      <span className="total-text">Toplam</span>
                      {totalPrice} TL
                    </div>
                  </div>
                  <div className="pb-pudo-banner">
                    <img
                      className="delivery"
                      src="https://cdn.dsmcdn.com/web/production/pudo-banner-with-free-cargo.svg"
                    />
                  </div>
                  <div className="pb-az-campaign-banner">
                    <img
                      className="campaign"
                      src="https://cdn.dsmcdn.com/digital-engagement/production/banner/az/63f1b6ea-4aaa-448c-ad0b-9a30c5e871bf.png"
                      alt="campaign banner"
                    />
                  </div>
                  <div className="pb-coupon">
                    <div className="add-coupon-toggle-container">
                      <FaPlus className="i-plus-bold" />
                      <span className="add-coupon-toggle-title">
                        İNDİRİM KODU GİR
                      </span>
                    </div>
                  </div>
                  <div className="pb-summary-approve">
                    <Link className="ty-link-btn-primary">
                      <span>Sepeti Onayla</span>
                    </Link>
                  </div>
                </div>
              </div>
              )}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
