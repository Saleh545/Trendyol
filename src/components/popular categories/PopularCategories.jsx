import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024, // Büyük ekranlar için
      settings: {
        slidesToShow: 11,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768, // Orta boy ekranlar için
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480, // Küçük ekranlar için
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const PopularCategories = () => {
  return (
    <div className="component-item widget-width pop-categories">
      <div className="container">
        <div className="personalized-banner-container">
          <span className="banner-title">Popüler Kategoriler</span>

          <div className="slider-container">
            <Slider {...settings} className="slider-flex">
              <div className="img-card">
                <Link className="banner-item" >
                  <img className="banner-img" src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/27/Sampuan_202212271855.jpg" />
                </Link>
              </div>

              <div className="img-card">
                <Link className="banner-item">
                  <img className="banner-img" src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/27/Makyaj_202212271855.jpg" />
                </Link>
              </div>
              <div className="img-card">
                <Link className="banner-item">
                <img className="banner-img" src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/27/Ic_Giyim_202212271854.jpg"/>
                </Link>
              </div>
              <div className="img-card">
                <Link className="banner-item">
                <img className="banner-img" src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/30/Cilt_Bakim_202212302146.jpg"/>
                </Link>
              </div>
              <div className="img-card">
                <Link className="banner-item">
                <img className="banner-img" src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/27/Parfum_202212271854.jpg"/>
                </Link>
              </div>
              <div className="img-card">
                <Link className="banner-item">
                <img className="banner-img" src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/27/Tshirt_202212271855.jpg"/>
                </Link>
              </div>
              <div className="img-card">
                <Link className="banner-item">
            <img className="banner-img" src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/30/Pantolon_202212302146.jpg"/>
                </Link>
              </div>
            </Slider>
          </div>
        </div>


        <div id="browsing-gw-homepage">
<div className="hover-img">
  <div className="component-item">
<Link className='widget widget-small no-border-and-shadow'>
<img src="https://cdn.dsmcdn.com/ty1464/pimWidgetApi/mobile_20240805161853_3007071KadinMobile202408051801.jpg" alt></img>
</Link>
  </div>
  <div className="component-item">
<Link className='widget widget-small no-border-and-shadow'>
<img src="https://cdn.dsmcdn.com/ty1462/pimWidgetApi/mobile_20240805151611_2702142KadinMobile202408051802.jpg" alt></img>
</Link>
  </div>
  <div className="component-item">
<Link className='widget widget-small no-border-and-shadow'>
<img src="https://cdn.dsmcdn.com/ty1440/pimWidgetApi/mobile_20240725153137_3019200KadinMobile202407251803.jpg" alt></img>
</Link>
  </div>
</div>
</div>
      </div>
    </div>
  );
};

export default PopularCategories;
