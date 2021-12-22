import React from 'react';
import NextImageLoader from '../../utilities/NextImageLoader';

const Patterns = () => {
  return (
    <>
      <div className="row small-gutters pt-3 main">
        <div className="col p-0">
          <NextImageLoader
            src="/img/sections/patterns/Marockanskt_large.jpg"
            alt=""
            width={1680}
            height={470}
            layout="responsive"
          />
          <div className="content">
            <span className="title">
              Marockanskt / <br />
              Mönstrat
            </span>
            <span className="btn_round">Handla här</span>
          </div>
        </div>
      </div>
      <div className="row small-gutters pt-3 sub">
        <div className="col p-0 m-0 subbox">
          <NextImageLoader
            src="/img/sections/patterns/Metro.png"
            alt=""
            width={262}
            height={168}
            layout="responsive"
          />
          <span className="title">Metro</span>
        </div>
        <div className="col p-0 m-0 ml-3 subbox">
          <NextImageLoader
            src="/img/sections/patterns/Mosaik.png"
            alt=""
            width={262}
            height={168}
            layout="responsive"
          />
          <span className="title">Mosaik</span>
        </div>
        <div className="col p-0 m-0 ml-3 subbox">
          <NextImageLoader
            src="/img/sections/patterns/Hexagon.png"
            alt=""
            width={262}
            height={168}
            layout="responsive"
          />
          <span className="title">Hexagon</span>
        </div>
        <div className="col p-0 m-0 ml-3 subbox">
          <NextImageLoader
            src="/img/sections/patterns/Terrazzo.jpg"
            alt=""
            width={262}
            height={168}
            layout="responsive"
          />
          <span className="title">Terrazzo</span>
        </div>
        <div className="col p-0 m-0 ml-3 subbox">
          <NextImageLoader
            src="/img/sections/patterns/Dekor.png"
            alt=""
            width={262}
            height={168}
            layout="responsive"
          />
          <span className="title">Dekor</span>
        </div>
        <div className="col p-0 m-0 ml-3 subbox">
          <NextImageLoader
            src="/img/sections/patterns/Lister.png"
            alt=""
            width={262}
            height={168}
            layout="responsive"
          />
          <span className="title">Lister</span>
        </div>
      </div>
    </>
  );
};

export default Patterns;
