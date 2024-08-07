import React from 'react';
import Header from '../../components/Header/Header.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import sen from "../../assets/images/sen.png";
import sana from "../../assets/images/sana.png";
import destek from "../../assets/images/destek.png";
import deprem from "../../assets/images/deprem.png";
import kurumsal from "../../assets/images/kurumsal.png";
import kredit from "../../assets/images/kredit.png";
import kredit2 from "../../assets/images/kredit2.png";
import apple from "../../assets/images/apple.png";
import philips from "../../assets/images/philips.png";
import pull from "../../assets/images/pull.png";
import samsung from "../../assets/images/samsung.png";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 11,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true, 
  responsive: [
    {
      breakpoint: 1024, // Büyük ekranlar için
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, // Orta boy ekranlar için
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480, // Küçük ekranlar için
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homepage-wrapper">
        <div className="container">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={sen} alt="Sen De Al!" />
                  <span>Sen De Al!</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={sana} alt="Sana Özel" />
                  <span>Sana Özel</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={destek} alt="Dijital Destek Kartları" />
                  <span>Dijital Destek Kartları</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={deprem} alt="Deprem Yardımı" />
                  <span>Deprem Yardımı</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={kurumsal} alt="Kurumsal" />
                  <span>Kurumsal</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={kredit} alt="Kredi Kartı" />
                  <span>Kredi Kartı</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={kredit2} alt="Krediler" />
                  <span>Krediler</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={apple} alt="Apple" />
                  <span>Apple</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={philips} alt="Philips" />
                  <span>Philips</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={pull} alt="Pull & Bear" />
                  <span>Pull & Bear</span>
                </Link>
              </div>
              <div>
                <Link to="/" className="item">
                  <img loading="lazy" src={samsung} alt="Samsung" />
                  <span>Samsung</span>
                </Link>
              </div>
            </Slider>
          </div>

          <div class="widget-container no-padding extended-container">
            <div className="banner-listing-items">
              <Link>
              <img alt="Sepete En Çok Eklenenler" class="p-card-img " src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Sepet_202304181225.png"></img>
              </Link>

              <Link>
              <img alt="En Çok Öne Çıkanlar" class="p-card-img " src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Onecikan_202304181225.png"></img>
              </Link>
              <Link>
              <img alt="Flaş Ürünler" class="p-card-img " src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Flash_202304181225.png"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
