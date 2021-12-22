import React from 'react';
import NextImageLoader from '../utilities/NextImageLoader';

const Brands = () => {
  return (
    <div className="row brands mx-2">
      <div className="box col ">
        <NextImageLoader
          src="/img/sections/brands/shiping_car.png"
          alt=""
          height={50}
          width={78}
          layout="fixed"
          className="brand-img"
        />
        <p>Snabba leveranser</p>
      </div>
      <div className="box col ">
        <NextImageLoader
          src="/img/sections/brands/security_credit_card.png"
          alt=""
          height={60}
          width={61}
          layout="fixed"
          className="brand-img"
        />
        <p>security credit card</p>
      </div>
      <div className="box col ">
        <NextImageLoader
          src="/img/sections/brands/smidig_finansiering.png"
          alt=""
          height={56}
          width={60}
          layout="fixed"
          className="brand-img"
        />
        <p>Smidig Finansiering</p>
      </div>
      <div className="box col ">
        <NextImageLoader
          src="/img/sections/brands/14_dagars_oppet_kop.png"
          alt=""
          height={62}
          width={66}
          layout="fixed"
          className="brand-img"
        />
        <p>14 dagars öppet köp</p>
      </div>
      <div className="box col ">
        <NextImageLoader
          src="/img/sections/brands/made_in_Italy.png"
          alt=""
          height={60}
          width={75}
          layout="fixed"
          className="brand-img"
        />
        <p>Premium Quality</p>
      </div>
      <div className="box col ">
        <NextImageLoader
          src="/img/sections/brands/made_in_Spain.png"
          alt=""
          height={60}
          width={75}
          layout="fixed"
          className="brand-img"
        />
        <p>Premium Quality</p>
      </div>
      <div className="box col ">
        <NextImageLoader
          src="/img/sections/brands/eco_friendly.png"
          alt=""
          height={60}
          width={75}
          layout="fixed"
          className="brand-img"
        />
        <p>Eco Friendly</p>
      </div>
    </div>
  );
};

export default React.memo(Brands);
