    import React from 'react'
    import { Link } from 'react-router-dom';
    import Slider from 'react-slick';
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 5,
        speed: 900,
        draggable: true,  // Sürükleme özelliğini etkinleştirir
        swipe: true,      // Kaydırma hareketini etkinleştirir
        touchMove: true, 
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
    const Collection = () => {
    return (
        <div className='collection'>
            <div className="container">
                <div component-id="23" id="collection-recommendation" data-tracker="seen:collectionRecommendationSeenEvent">
                    <div className="collection-recommendation-container">

                <h2 className="collection-recommendation-title">İlgini Çekebilecek Koleksiyonlar</h2>

                <Slider {...settings}> 
                <div>
                    <Link className="collection" to="/koleksiyonlar/eslik-eden-urunler-k-8f503981-4e9a-4ea2-9744-e66ce3df4de5?referrer=pdp">
                        <div className="collection-header">
                            <p className="collection-title">Eşlik Eden Ürünler!</p>
                        </div>
                    <div className="collection-images">
                        <img className="collection-image"  src="https://cdn.dsmcdn.com/mnresize/200/300/ty510/product/media/images/20220819/9/162662968/547695847/1/1_org_zoom.jpg"/>
                <img src="https://cdn.dsmcdn.com/mnresize/200/300/ty1362/product/media/images/prod/QC/20240613/14/d08e5128-eb5f-38e7-8c81-91fcc53fa0c7/1_org_zoom.jpg" className='collection-image' alt="" />
                <img src="https://cdn.dsmcdn.com/mnresize/200/300/ty1472/product/media/images/prod/QC/20240808/09/9e81588c-97b9-3b78-af52-e2d2f11db392/1_org_zoom.jpg" className='collection-image' alt="" />
                    </div>
                    <div className="collection-footer">
                        <div className="collection-footer-info">
                            <p className="collection-product-count">11 Ürün</p>
                            <p className="collection-reviewed-count">41<img className="collection-reviewed-count-icon" loading="lazy" src="https://cdn.dsmcdn.com/web/production/icon-eye.svg"></img> </p>
                        </div>
                    </div>
                        </Link>
                </div>
                <div>
                    <Link className="collection" to="/koleksiyonlar/eslik-eden-urunler-k-8f503981-4e9a-4ea2-9744-e66ce3df4de5?referrer=pdp">
                        <div className="collection-header">
                            <p className="collection-title">Eşlik Eden Ürünler!</p>
                        </div>
                    <div className="collection-images">
                        <img className="collection-image"  src="https://cdn.dsmcdn.com/mnresize/200/300/ty510/product/media/images/20220819/9/162662968/547695847/1/1_org_zoom.jpg"/>
                <img src="https://cdn.dsmcdn.com/mnresize/200/300/ty1362/product/media/images/prod/QC/20240613/14/d08e5128-eb5f-38e7-8c81-91fcc53fa0c7/1_org_zoom.jpg" className='collection-image' alt="" />
                <img src="https://cdn.dsmcdn.com/mnresize/200/300/ty1472/product/media/images/prod/QC/20240808/09/9e81588c-97b9-3b78-af52-e2d2f11db392/1_org_zoom.jpg" className='collection-image' alt="" />
                    </div>
                    <div className="collection-footer">
                        <div className="collection-footer-info">
                            <p className="collection-product-count">11 Ürün</p>
                            <p className="collection-reviewed-count">41<img className="collection-reviewed-count-icon" loading="lazy" src="https://cdn.dsmcdn.com/web/production/icon-eye.svg"></img> </p>
                        </div>
                    </div>
                        </Link>
                </div>
                <div>
                    <Link className="collection" to="/koleksiyonlar/eslik-eden-urunler-k-8f503981-4e9a-4ea2-9744-e66ce3df4de5?referrer=pdp">
                        <div className="collection-header">
                            <p className="collection-title">Eşlik Eden Ürünler!</p>
                        </div>
                    <div className="collection-images">
                        <img className="collection-image"  src="https://cdn.dsmcdn.com/mnresize/200/300/ty510/product/media/images/20220819/9/162662968/547695847/1/1_org_zoom.jpg"/>
                <img src="https://cdn.dsmcdn.com/mnresize/200/300/ty1362/product/media/images/prod/QC/20240613/14/d08e5128-eb5f-38e7-8c81-91fcc53fa0c7/1_org_zoom.jpg" className='collection-image' alt="" />
                <img src="https://cdn.dsmcdn.com/mnresize/200/300/ty1472/product/media/images/prod/QC/20240808/09/9e81588c-97b9-3b78-af52-e2d2f11db392/1_org_zoom.jpg" className='collection-image' alt="" />
                    </div>
                    <div className="collection-footer">
                        <div className="collection-footer-info">
                            <p className="collection-product-count">11 Ürün</p>
                            <p className="collection-reviewed-count">41<img className="collection-reviewed-count-icon" loading="lazy" src="https://cdn.dsmcdn.com/web/production/icon-eye.svg"></img> </p>
                        </div>
                    </div>
                        </Link>
                </div>
            
                </Slider>
                </div>
                </div>
            </div>
        </div>
    )
    }

    export default Collection