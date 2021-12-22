import React from 'react';
import NextImageLoader from '../utilities/NextImageLoader';

const SectionLast = () => {
  return (
    <>
      <div className="main_title ">
        <span className="add_bottom_30">
          Funderar du över något mera? <br />
          Låt dig inspireras utav allt vi har att erbjuda
        </span>
      </div>
      <div className="row small-gutters ">
        <div className="col-6 p-0 m-0">
          <NextImageLoader
            src="/img/sections/lastsection/LastSection_3.png"
            alt=""
            width={830}
            height={622}
            layout="responsive"
          />
          <div className="section_content">
            <span className="title_2">
              Följ de senaste trenderna. <br />
              Gå in på vår Instagram sida för design <br />
              och projektidéer
            </span>
            <span className="btn_round">FÖLJ OSS</span>
          </div>
        </div>

        <div className="col-6 p-0 m-0">
          <div className="row small-gutters mb-4">
            <div className="col pr-0 pl-4">
              <NextImageLoader
                src="/img/sections/lastsection/LastSection_1.png"
                alt=""
                width={830}
                height={302}
                layout="responsive"
              />
              <div className="section_content">
                <span className="title_2">inspirations</span>
                <span className="btn_round">Se mer här</span>
              </div>
            </div>
          </div>
          <div className="row small-gutters">
            <div className="col pr-0 pl-4">
              <NextImageLoader
                src="/img/sections/lastsection/LastSection_2.png"
                alt=""
                width={830}
                height={302}
                layout="responsive"
              />
              <div className="section_content">
                <span className="title_2">
                  Varför välja <br />
                  Granitkeramik?
                </span>
                <span className="btn_round">Läs mer här</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionLast;
