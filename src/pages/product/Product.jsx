import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import endirim from "../../assets/images/endirim.png";
import camera from "../../assets/images/camera.png";
import {MdKeyboardArrowRight,MdOutlineKeyboardArrowRight,} from "react-icons/md";
import { FaBox, FaInfoCircle, FaRegHeart, FaStar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { TfiGift } from "react-icons/tfi";
import { LiaCommentDotsSolid } from "react-icons/lia";
import Similar from "../../components/similar/Similar";
import Cross from "../../components/cross/Cross";
import { useBasket,useFavorites  } from "../../context/BasketContext";
import Ratings from "../../components/ratings/Ratings";
import Details from "../../components/details/Details";
import Collection from "../../components/collection/Collection";
import FirstSlider from "../../components/firstSlider/FirstSlider";
import Boutique from "../../components/boutique/Boutique";

const Product = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { addToBasket } = useBasket();
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);
  const [buttonText, setButtonText] = useState("Sepete Ekle");
  const { addToFavorites } = useFavorites();
  const [product, setProduct] = useState(null);

  const handleAddToFavorites = () => {
    addToFavorites(product);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <></>;

  const handleAddToBasket = () => {
    addToBasket(product);
    setIsAddedToBasket(true);
    
    setTimeout(() => {
      setIsAddedToBasket(false);
      setButtonText("Sepete Ekle");
    }, 2000);

  };



  return (
    <div className="">
      <Header />
      <div className="product-page">
        <div className="container ">
          <div className="product-container">
            <div className="gallery-container">
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={product.title}
                      className="w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={product.title}
                      
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="container-right-content">
              <div className="right-up">
                <img src={endirim} alt="" className="endirim" />

                <div className="right-flex">
                  <div className="product-detail-wrapper">
                    
                    <div className="category-top-rank-container">
                      <div className="rank-badge">
                        <div className="rank-badge-text">4</div>
                      </div>
                      <div className="category-gender-desc">
                        Saç Serum ve Yağı kategorisinde
                      </div>
                      <div className="category-rank-info">
                        en çok ziyaret edilen 4. ürün
                      </div>
                      <MdOutlineKeyboardArrowRight />
                    </div>
                    <div className="pr-in-w">
                      <div className="pr-in-cn">
                        <h1 className="pr-new-br" data-drroot="h1">
                          {product.title}
                        </h1>

                        <div className="pr-in-ratings">
                          <div className="rating-line-count">4.7</div>

                          <div className="ratings readonly">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <div className="seperator"></div>
                          <div className="rvw-cnt">
                            <Link
                              to="/sony/playstation-5-slim-digital-edition-1-tb-turkce-menu-ithalatci-garantili-p-781022412/yorumlar?boutiqueId=61&merchantId=793481"
                              className="rvw-cnt-tx"
                            >
                              <span className="total-review-count">1365</span>
                              Değerlendirme
                            </Link>
                            <img src={camera} className="camera-icon" alt="" />
                          </div>
                          <div className="seperator"></div>
                          <Link
                            className="product-questions"
                            to="/sony/playstation-5-slim-digital-edition-1-tb-turkce-menu-ithalatci-garantili-p-781022412/saticiya-sor?merchantId=793481"
                          >
                            <span className="answered-questions-count">
                              2502
                            </span>
                            Soru & Cevap
                          </Link>
                        </div>

                        <div className="product-price-container">
                          <span className="prc-dsc">{product.price} TL</span>
                          <p className="product-description">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="product-button-container">
                      
                    <button component-id="1" className={`add-to-basket ${isAddedToBasket ? "added" : ""}`} onClick={handleAddToBasket} >
      <div className="add-to-basket-button-text">
        {isAddedToBasket ? "Sepete Eklendi" : "Sepete Ekle"}
      </div>
    </button>
                      <button className="fv"  onClick={handleAddToFavorites}>
                        <FaRegHeart />
                      </button>
                    </div>
                    <aside className="delivery-favorite-info">
                      <div className="delivery-and-favorite-wrapper">
                        <div className="pr-dd product-delivery-badge">
                          <div className="pr-dd-rs-w">
                            <div className="same-day-shipping badge">
                              <TbTruckDelivery />
                              <div>
                                <strong>33 dakika</strong> içinde sipariş
                                verirsen <strong>bugün</strong> kargoda!
                              </div>
                            </div>
                          </div>

                          <div className="location-based-delivery-wrapper">
                            <hr className="line" />
                            <div className="delivery-wrapper">
                              <div className="delivery-info">
                                <FaLocationDot className="i-location-pin" />
                                <span className="info-text">
                                  <b>Tahmini Teslimat:</b>
                                  26 Ağustos Pazartesi günü kapında!
                                </span>
                              </div>
                              <button className="location-area">
                                <span className="location-text">
                                  Iğdır/Merkez
                                </span>
                                <MdKeyboardArrowRight />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </aside>

                    <div className="featured-information" data-drroot="featured-information">
                      <div className="featured-information-header">Öne Çıkan Özellikler:</div>
                      <div className="content-descriptions" data-drroot="content-descriptions">
                        <ul id="content-descriptions-list">
                    <li><span className="ellipse"></span> Ürün beden tablosunu görüntülemek için <Link data-sizechart-href="@customSizeChart[1]"  className="product-description-link">tıklayın</Link></li>     
                    <li className="market-place-wrapper">
                      <span className="ellipse"></span>
                      <span>Bu ürün<span className="product-description-market-place"> Global-Pazar</span> tarafından gönderilecektir.</span>
                      </li> 
                      <li><span className="ellipse"></span>Kampanya fiyatından satılmak üzere 50 adetten fazla stok sunulmuştur.</li>
                      <li><span className="ellipse"></span>Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="product-widget-list">
                    <section
                      component-id="12"
                      className="campaigns-widget widget orange"
                    >
                      <h2 className="widget-title">ÜRÜNÜN KAMPANYALARI</h2>
                      <div className="widget-row">
                        <Link
                          className="flex"
                          title="200 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)"
                        >
                          <FaBox className="i-my-orders" />
                          <div className="campaign-widget">
                            <div className="campaign-name">
                              200 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)
                            </div>
                            <MdKeyboardArrowRight />
                          </div>
                        </Link>
                      </div>
                    </section>

                    <section className="seller-widget widget">
                      <div className="widget-title product-seller-line">
                        <div className="pr-mb">
                          <Link
                            className="seller-name-text"
                            to="/magaza/global-pazar-m-214976"
                            title="Global-Pazar"
                          >
                            Global-Pazar
                          </Link>
                          <div className="sl-pn">9.4</div>
                          <FaInfoCircle />
                        </div>
                        <div className="seller-follower-count">11,9B Takipçi</div>
                      </div>

                      <div className="follow-btn followToWin" component-id="32">
                        <div className="i-follow-to-win">
                          <TfiGift />
                        </div>
                        <span className="follow-to-win-text">Takip Et Kazan</span>
                      </div>

                      <Link href="https://www.trendyol.com/q-time/akilli-saat-gorunumlu-led-ekranli-su-g…gildir-p-682888282/saticiya-sor?merchantId=214976&showSelectedSeller=true" rel="nofollow" className="widget-row ask-question-to-seller" >
                        <div className="i-my-reviews">
                        <LiaCommentDotsSolid />
                        </div>
                        <span>Satıcı Soruları (7)</span>
                        <div className="i-arrow-right">
                        <MdKeyboardArrowRight />

                        </div>
                      </Link>

                      <div className="visit-store">
                        <span className="widget-row">
                          Mağazaya Git
                          <MdKeyboardArrowRight />
                        </span>
                      </div>
                    </section>

                    <aside component-id="15" className="widget product-review-widget" data-drroot="product-reviews-widget">
                   <h2 className="widget-title">ÖNE ÇIKAN YORUM</h2>   
              <div className="featured-comment-widget">
           <div className="rnr-com-tx"> 
       <div className="line-clamp">
       <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
       </div>
       <div className="review-text">güzel beğendim</div>
        <div className="product-media-images">
          <div className="thumbnail-container"></div>
          <div className="thumbnail-container"></div>
          <div className="thumbnail-container"></div>
          </div>  
        <div className="rnr-com-bt">
         <div className="rnr-com-usr"> 
        <span className="username">**** ****</span>
        <span>19 Ağustos 2024</span>
         </div> 
        </div>
         </div>
         <div className="more-comments">
          <span>DAHA FAZLA YORUM</span>
          <MdKeyboardArrowRight />

         </div>
                </div>
                
                      </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Similar/>
<Cross/>
<Ratings/>
<Details/>
<Collection/>
<FirstSlider/>
<Boutique/>
      <Footer />
    </div>
  );
};

export default Product;
