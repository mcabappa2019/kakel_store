import React from 'react';
import NextHead from 'next/head';

const About2 = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>

        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/about.css" rel="stylesheet" />
      </NextHead>

      <main className="bg_gray">
        <div className="top_banner general">
          <div
            className="opacity-mask d-flex align-items-md-center"
            data-opacity-mask="rgba(0, 0, 0, 0.1)"
          >
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6 text-right">
                  <h1>
                    Dolor docendi fuisset ad
                    <br />
                    movet mucius diceret et qui
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <img src="/img/top_about.jpg" className="img-fluid" alt="" />
        </div>
        {/* <!--/top_banner--> */}

        <div className="bg_white">
          <div className="container margin_90_0">
            <div className="row justify-content-between align-items-center flex-lg-row-reverse content_general_row">
              <div className="col-lg-5 text-center">
                <figure>
                  <img
                    src="/img/about_placeholder.jpg"
                    data-src="/img/about_1.svg"
                    alt=""
                    className="img-fluid lazy"
                    width="350"
                    height="268"
                  />
                </figure>
              </div>
              <div className="col-lg-6">
                <h2>Per quot choro cetero eu</h2>
                <p className="lead">
                  Eu qui mundi lucilius petentium, mea amet libris prodesset in.
                </p>
                <p>
                  His dolor docendi fuisset ad, movet mucius diceret et qui.
                  Esse ferri integre sit id. Nec iusto eleifend definitionem ne,
                  persius argumentum sed ut. Ut mel dicta latine. Ut dicta
                  tempor omittantur pro, ne mea magna idque. Nulla ancillae et
                  his, ei vim lorem accusam.
                </p>
              </div>
            </div>
            {/* <!--/row--> */}
            <div className="row justify-content-between align-items-center content_general_row">
              <div className="col-lg-5 text-left">
                <figure>
                  <img
                    src="/img/about_placeholder.jpg"
                    data-src="/img/about_3.svg"
                    alt=""
                    className="img-fluid lazy"
                    width="350"
                    height="268"
                  />
                </figure>
              </div>
              <div className="col-lg-6">
                <h2>Per quot choro cetero eu</h2>
                <p className="lead">
                  Eu qui mundi lucilius petentium, mea amet libris prodesset in.
                </p>
                <p>
                  His dolor docendi fuisset ad, movet mucius diceret et qui.
                  Esse ferri integre sit id. Nec iusto eleifend definitionem ne,
                  persius argumentum sed ut. Ut mel dicta latine. Ut dicta
                  tempor omittantur pro, ne mea magna idque. Nulla ancillae et
                  his, ei vim lorem accusam.
                </p>
              </div>
            </div>
            {/* <!--/row--> */}
            <div className="row justify-content-between align-items-center flex-lg-row-reverse content_general_row">
              <div className="col-lg-5 text-center">
                <figure>
                  <img
                    src="/img/about_placeholder.jpg"
                    data-src="/img/about_2.svg"
                    alt=""
                    className="img-fluid lazy"
                    width="350"
                    height="316"
                  />
                </figure>
              </div>
              <div className="col-lg-6">
                <h2>Per quot choro cetero eu</h2>
                <p className="lead">
                  Eu qui mundi lucilius petentium, mea amet libris prodesset in.
                </p>
                <p>
                  His dolor docendi fuisset ad, movet mucius diceret et qui.
                  Esse ferri integre sit id. Nec iusto eleifend definitionem ne,
                  persius argumentum sed ut. Ut mel dicta latine.
                </p>
                <ul className="list_ok">
                  <li>At pro tale omnes iuvaret</li>
                  <li>Persius argumentum sed ut tempor omittantur pro</li>
                  <li>His dolor docendi fuisset ad, movet mucius</li>
                </ul>
              </div>
            </div>
            {/* <!--/row--> */}
          </div>
          {/* <!--/container--> */}
        </div>
        {/* <!--/bg_white--> */}
        <div id="carousel-home">
          <div className="owl-carousel owl-theme">
            <div
              className="owl-slide cover"
              // style="background-image: url(/img/testimonial_1.jpg)"
            >
              <div
                className="opacity-mask d-flex align-items-center"
                data-opacity-mask="rgba(0, 0, 0, 0.5)"
              >
                <div className="container">
                  <div className="row justify-content-center justify-content-md-start">
                    <div className="col-lg-6 static">
                      <div className="slide-text white">
                        <h2 className="owl-slide-animated owl-slide-title">
                          Awesome Experience
                        </h2>
                        <p className="owl-slide-animated owl-slide-subtitle">
                          <em>
                            His dolor docendi fuisset ad, movet mucius diceret
                            et qui. Esse ferri integre sit id. Nec iusto
                            eleifend definitionem ne, persius argumentum sed ut.
                          </em>
                        </p>
                        <div className="owl-slide-animated owl-slide-cta">
                          <small>Susan - Photographer</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--/owl-slide--> */}
            <div
              className="owl-slide cover"
              // style="background-image: url(/img/testimonial_2.jpg);"
            >
              <div
                className="opacity-mask d-flex align-items-center"
                data-opacity-mask="rgba(0, 0, 0, 0.5)"
              >
                <div className="container">
                  <div className="row justify-content-center justify-content-md-start">
                    <div className="col-lg-6 static">
                      <div className="slide-text white">
                        <h2 className="owl-slide-animated owl-slide-title">
                          Great Support
                        </h2>
                        <p className="owl-slide-animated owl-slide-subtitle">
                          <em>
                            His dolor docendi fuisset ad, movet mucius diceret
                            et qui. Esse ferri integre sit id. Nec iusto
                            eleifend definitionem ne.
                          </em>
                        </p>
                        <div className="owl-slide-animated owl-slide-cta">
                          Mary - Doctor
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--/owl-slide--> */}
            <div
              className="owl-slide cover"
              // style="background-image: url(/img/testimonial_3.jpg);"
            >
              <div
                className="opacity-mask d-flex align-items-center"
                data-opacity-mask="rgba(255, 255, 255, 0.5)"
              >
                <div className="container">
                  <div className="row justify-content-center justify-content-md-start">
                    <div className="col-lg-12 static">
                      <div className="slide-text text-center black">
                        <h2 className="owl-slide-animated owl-slide-title">
                          Satisfied
                        </h2>
                        <p className="owl-slide-animated owl-slide-subtitle">
                          <em>
                            His dolor docendi fuisset ad, movet mucius diceret
                            et qui. Esse ferri integre sit id.
                          </em>
                        </p>
                        <div className="owl-slide-animated owl-slide-cta">
                          Katrin - Student
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/owl-slide--> */}
            </div>
          </div>
          <div id="icon_drag_mobile"></div>
        </div>
        {/* <!--/carousel--> */}
      </main>
    </div>
  );
};

export default About2;
