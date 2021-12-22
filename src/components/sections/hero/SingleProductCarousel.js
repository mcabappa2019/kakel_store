import React from 'react';
import CarouselProductCard from '../../productComponents/CarouselProductCard';

const SingleProductCarousel = () => {
  return (
    <div
      id="carouselWithCaption"
      className="carousel slide sigle-product-carousel"
      data-ride="carousel"
      // data-ride="false"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselWithCaption"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselWithCaption" data-slide-to="1"></li>
        <li data-target="#carouselWithCaption" data-slide-to="2"></li>
        <li data-target="#carouselWithCaption" data-slide-to="3"></li>
        <li data-target="#carouselWithCaption" data-slide-to="4"></li>
        <li data-target="#carouselWithCaption" data-slide-to="5"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-caption d-block p-0">
            <CarouselProductCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-block p-0">
            <CarouselProductCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-none d-block p-0">
            <CarouselProductCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-none d-block p-0">
            <CarouselProductCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-none d-block p-0">
            <CarouselProductCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-none d-block p-0">
            <CarouselProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SingleProductCarousel);
