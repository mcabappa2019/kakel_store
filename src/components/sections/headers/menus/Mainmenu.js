import React, { useState } from 'react';
import Link from 'next/link';
import NextImageLoader from '../../../utilities/NextImageLoader';
import ProductCard from '../../../productComponents/ProductCard';
import MainMenuDrawer from './MainMenuDrawer';

const Mainmenu = () => {
  const [openMainDwr, setOpenMainDwr] = useState(false);
  return (
    <div className="main-menu ">
      <ul className="d-flex menu-box">
        <li className="megamenu submenu position-static">
          <a href="" className="show-submenu">
            KAKEL & KLINKER
          </a>
          <div className="menu-wrapper w-100">
            <div className="container">
              <div className="row small-gutters d-flex">
                <div className="col-7">
                  <div className="row pr-5 mr-4">
                    {[
                      'betong',
                      'decor',
                      'enfargat',
                      'hexagon',
                      'lera',
                      'lister',
                      'marmor',
                      'metall',
                      'metro',
                      'monstrat',
                      'mosaik',
                      'sten',
                      'storstorlek',
                      'textil',
                      'tra',
                    ].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="col-lg-2 small-gutters appearance-item"
                        >
                          <NextImageLoader
                            alt="textil"
                            height={72}
                            width={168}
                            src={`/img/sections/menudrop/${item}.png`}
                            layout="responsive"
                          />
                          <span className="title">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-5">
                  <div className="row pl-5 justify-content-center">
                    <div className="col-lg-6">
                      <ProductCard />
                    </div>
                    <div className="col-lg-6">
                      <ProductCard />
                    </div>
                    <span className="btn_round my-4">Utforska vår shop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="megamenu submenu position-static">
          <a href="" className="show-submenu-mega">
            BADRUM
          </a>
          <div className="menu-wrapper w-100">
            <div className="container">
              <div className="row small-gutters d-flex">
                <div className="col-7">
                  <div className="row  mr-4">
                    {[
                      'Badrumsmobler',
                      'speglar',
                      'tvattatall',
                      'tvattatallsskap',
                      'vaggskap',
                    ].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="col-lg-2 appearance-item p-0 m-0 mr-4"
                        >
                          <NextImageLoader
                            alt="textil"
                            height={400}
                            width={200}
                            src={`/img/sections/menudrop/${item}.png`}
                            layout="responsive"
                          />
                          <span className="title">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-5">
                  <div className="row pl-5 justify-content-center">
                    <div className="col-lg-6">
                      <ProductCard />
                    </div>
                    <div className="col-lg-6">
                      <ProductCard />
                    </div>
                    <span className="btn_round my-4">Utforska vår shop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link href="/" passHref={true}>
            <a>ART DECO/EXCLUSIVE</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref={true}>
            <a>UTOMHUS</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref={true}>
            <a>STOR STORLEK</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref={true}>
            <a>INSPIRATION</a>
          </Link>
        </li>
        <li className="ml-4">
          <a
            href="#"
            onClick={() => {
              setOpenMainDwr(true);
            }}
          >
            <i className="ti ti-menu mr-2"></i>MENU
          </a>
        </li>
      </ul>
      <MainMenuDrawer
        openDrawer={openMainDwr}
        requestToClose={setOpenMainDwr}
      />
    </div>
  );
};

export default Mainmenu;
