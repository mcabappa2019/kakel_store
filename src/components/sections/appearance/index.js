import React from 'react';
import NextImageLoader from '../../utilities/NextImageLoader';

const Appearance = () => {
  return (
    <div className="row appearance mx-2">
      <div className="box col-3 md-col-6 ">
        <NextImageLoader
          src="/img/sections/appearance/Betong.png"
          alt=""
          height={180}
          width={386}
          layout="responsive"
          className="brand-img"
        />
        <div className="justify-content-center">
          <p>Betong</p>
        </div>
      </div>
      <div className="box col-3 md-col-6 ">
        <NextImageLoader
          src="/img/sections/appearance/Marmor.png"
          alt=""
          height={180}
          width={386}
          layout="responsive"
          className="brand-img"
        />
        <div className="justify-content-center">
          <p>Marmor</p>
        </div>
      </div>
      <div className="box col-3 md-col-6 ">
        <NextImageLoader
          src="/img/sections/appearance/Lera.png"
          alt=""
          height={180}
          width={386}
          layout="responsive"
          className="brand-img"
        />
        <div className="justify-content-center">
          <p>Lera</p>
        </div>
      </div>
      <div className="box col-3 md-col-6 ">
        <NextImageLoader
          src="/img/sections/appearance/Sten.png"
          alt=""
          height={180}
          width={386}
          layout="responsive"
          className="brand-img"
        />
        <div className="justify-content-center">
          <p>Sten</p>
        </div>
      </div>
      <div className="box col-3 md-col-6 ">
        <NextImageLoader
          src="/img/sections/appearance/Marockanskt.png"
          alt=""
          height={180}
          width={386}
          layout="responsive"
          className="brand-img"
        />
        <div className="justify-content-center">
          <p>Marockanskt / Mönstrat</p>
        </div>
      </div>
      <div className="box col-3 md-col-6 ">
        <NextImageLoader
          src="/img/sections/appearance/Tra.png"
          alt=""
          height={180}
          width={386}
          layout="responsive"
          className="brand-img"
        />
        <div className="justify-content-center">
          <p>Trä</p>
        </div>
      </div>
      <div className="box col-3 md-col-6 ">
        <NextImageLoader
          src="/img/sections/appearance/Metall.png"
          alt=""
          height={180}
          width={386}
          layout="responsive"
          className="brand-img"
        />
        <div className="justify-content-center">
          <p>Metall</p>
        </div>
      </div>
      <div className="box col-3 md-col-6 ">
        <NextImageLoader
          src="/img/sections/appearance/Textil.png"
          alt=""
          height={180}
          width={386}
          layout="responsive"
          className="brand-img"
        />
        <div className="justify-content-center">
          <p>Textil</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Appearance);
