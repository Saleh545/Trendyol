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
import Popular from '../../components/popular/Popular.jsx';
import Flas from '../../components/flas/Flas.jsx';
import PopularCategories from '../../components/popular categories/PopularCategories.jsx';
import Sale from '../../components/sale/Sale.jsx';
import Avantaj from '../../components/avantaj/Avantaj.jsx';
import Cards from '../../components/cards/Cards.jsx';
import Boutique from '../../components/boutique/Boutique.jsx';
import BoutiqueList from '../../components/boutiqueList/boutiqueList.jsx';
import Footer from '../../components/footer/Footer.jsx';

let settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 11,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024, // Büyük ekranlar için
      settings: {
        slidesToShow: 11,
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

          <div className="widget-container no-padding extended-container">
            <div className="banner-listing-items">
              <Link>
              <img alt="Sepete En Çok Eklenenler" className="p-card-img " src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Sepet_202304181225.png"/>
              </Link>

              <Link>
              <img alt="En Çok Öne Çıkanlar" className="p-card-img " src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Onecikan_202304181225.png"/>
              </Link>
              <Link>
              <img alt="Flaş Ürünler" className="p-card-img " src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Flash_202304181225.png"/>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Popular/>
<div id="browsing-gw-homepage">
<div className="container">
<div className="hover-img">
  <div className="component-item">
<Link className='widget widget-small no-border-and-shadow'>
< img src="https://cdn.dsmcdn.com/ty1463/pimWidgetApi/mobile_20240805062724_2317415KadinMobile202408021902.jpg" alt/>
</Link>
  </div>
  <div className="component-item">
<Link className='widget widget-small no-border-and-shadow'>
< img src="https://cdn.dsmcdn.com/ty1452/pimWidgetApi/mobile_20240801105054_3028433EvAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpYasamMobile202407311801.jpg" alt/>
</Link>
  </div>
  <div className="component-item">
<Link className='widget widget-small no-border-and-shadow'>
< img src="https://cdn.dsmcdn.com/ty1464/pimWidgetApi/mobile_20240805161853_3007071KadinMobile202408051801.jpg" alt/>
</Link>
  </div>
</div>
</div>
</div>

<Flas/>
<PopularCategories/>
<Sale/>

<div id="browsing-gw-homepage">
<div className="container">
<div className="hover-img">
  <div className="component-item">
<Link className='widget widget-small no-border-and-shadow'>
<img src="https://cdn.dsmcdn.com/ty1468/pimWidgetApi/mobile_20240807081343_thumbnail2965548KadinMobile202407021701.jpg" alt/>
</Link>
  </div>
  <div className="component-item">
<Link className='widget widget-small no-border-and-shadow'>
<img src="https://cdn.dsmcdn.com/ty1435/pimWidgetApi/mobile_20240722061404_2970506KadinMobile202407191702.jpg" alt/>
</Link>
  </div>
  <div className="component-item">
<Link className='widget widget-small no-border-and-shadow'>
<img src="https://cdn.dsmcdn.com/ty1469/pimWidgetApi/mobile_20240807093931_2702464KadinMobile2024072617031.jpg" alt/>
</Link>
  </div>
</div>
</div>
</div>

<Avantaj/>
<Cards/>

<Boutique/>
<BoutiqueList/>
<Footer/>

    </div>

  );
};

export default Home;
