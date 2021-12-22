import React from 'react';
import NextImageLoader from '../utilities/NextImageLoader';

const AboutUsBanner = () => {
  return (
    <div className="row  mx-0 px-0 feat_section">
      <div className=" col-6 ">
        <div className="section_content">
          <span className="title_2">
            Vårt arbete är ett uttryck för vilka vi är. <br />
            Vad vi älskar och vad inspirerar oss.
          </span>
          <span className="title_1">KAKEL STORE</span>
          <span className="btn_round">Läs mer här</span>
        </div>
      </div>
      <div className="col-6 mx-0 px-0">
        <NextImageLoader
          src="/img/sections/feat/feat.png"
          alt=""
          width={960}
          height={440}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default AboutUsBanner;
