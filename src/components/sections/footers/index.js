import React, { useState } from 'react';

const Footer = () => {
  return (
    <footer className="revealed justify-content-center">
      <div className="container">
        <div className="row p-0">
          <div className="col p-0">
            <img src="/img/footerLogo.png" height="74" width="361" alt="" />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-6 text-white">
            <p>
              Vi använder cookies, för att öka användarvänligheten i enlighet
              med lagen om elektronisk kommunikation.
            </p>
            <p>
              Genom att fortsätta använda vår webplats förutsätter vi att du
              godkänner detta. Läs mer om integritetspolicy.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 pl-5">
            <h3 data-target="#collapse_1">KUNDSERVICE</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_1">
              <ul>
                <li>
                  <a href="/about">Villkor & Frakt</a>
                </li>
                <li>
                  <a href="/help">Försändelse Spårning</a>
                </li>
                <li>
                  <a href="/help">Vanliga Frågor</a>
                </li>
                <li>
                  <a href="/account">Integritetspolicy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 data-target="#collapse_2">INFORMATION</h3>
            <div className="collapse dont-collapse-sm links" id="collapse_2">
              <ul>
                <li>
                  <a href="/listing-grid-1-full">Om Oss</a>
                </li>
                <li>
                  <a href="/listing-grid-2-full">Kontakta Oss</a>
                </li>
                <li>
                  <a href="/listing-grid-1-full">Inspirations</a>
                </li>
                <li>
                  <a href="/listing-grid-3">Varför välja Granitkeramik?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col p-0">
            <ul className="social-icons d-flex p-0">
              <li>
                <a href="#">
                  <i className="ti ti-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti ti-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti ti-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="container">
          <div className="row p-4 mt-5 align-items-center">
            <div className="col-3 col-md-6">
              <span className="bottom-text">
                2021 All rights reserved to Kakel store ab
              </span>
            </div>
            <div className="col-9 col-md-6">
              <img
                src="/img/payment_methods.png"
                height="40"
                width="580"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
