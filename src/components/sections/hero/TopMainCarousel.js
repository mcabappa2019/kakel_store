import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMjo/PBQAD3gGQa5kMIgAAAABJRU5ErkJggg==';
const placeholder = 'blur';

const SlideImage = ({ imgSrc }) => {
  return (
    <Image
      src={imgSrc}
      width={1000}
      height={840}
      layout="responsive"
      priority={false}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      alt=""
      quality={30}
    />
  );
};

const TopMainCarousel = () => {
  return (
    <div
      id="carouselIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <div className="header-carousel carousel-inner">
        <div className="carousel-item active">
          <SlideImage imgSrc={'/img/slides/Slider.png'} />
          <div className="section_content">
            <span className="title_2">
              ready-made planning solutions for your home
            </span>
            <span className="title_1">
              with new <br />
              collectioncs
            </span>
            <span className="title_3">kitchens, bathrooms</span>

            <span className="btn_round">Utforska vår shop</span>
          </div>
        </div>
        <div className="carousel-item">
          <SlideImage imgSrc={'/img/slides/Slider.png'} />
          <div className="section_content">
            <span className="title_2">
              ready-made planning solutions for your home
            </span>
            <span className="title_1">
              with new <br />
              collectioncs
            </span>
            <span className="title_3">kitchens, bathrooms</span>

            <span className="btn_round">Utforska vår shop</span>
          </div>
        </div>
        <div className="carousel-item">
          <SlideImage imgSrc={'/img/slides/Slider.png'} />
          <div className="section_content">
            <span className="title_2">
              ready-made planning solutions for your home
            </span>
            <span className="title_1">
              with new <br />
              collectioncs
            </span>
            <span className="title_3">kitchens, bathrooms</span>

            <span className="btn_round">Utforska vår shop</span>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default React.memo(TopMainCarousel);
