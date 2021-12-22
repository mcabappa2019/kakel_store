import React from 'react';
import NextImageLoader from '../../utilities/NextImageLoader';
import TopMainCarousel from './TopMainCarousel';
import SingleProductCarousel from './SingleProductCarousel';

const HeroSection = () => {
  return (
    <div className="row small-gutters pt-3">
      <div className="col-7 p-0 m-0 ">
        <TopMainCarousel />
      </div>
      <div className="col-5 p-0 m-0">
        <div className="row small-gutters mb-3">
          <div className="col pr-0 pl-3 hero-top-right">
            <NextImageLoader
              src="/img/slides/R1.png"
              alt=""
              width={546}
              height={250}
              layout="responsive"
            />
            <div className="section_content">
              <span className="title_2">
                REA 30-70% <br />
                KÖP NU, BETALA SENARE
              </span>
            </div>
          </div>
        </div>
        <div className="row small-gutters">
          <div className="col pr-0 pl-3">
            <SingleProductCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
