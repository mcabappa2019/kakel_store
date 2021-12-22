import React from 'react';
import NextHead from 'next/head';

const Help2 = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>
        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/faq.css" rel="stylesheet" />
      </NextHead>

      <main className="bg_gray">
        <div className="container margin_90_65">
          <div className="main_title">
            <h1>Help and Support Center</h1>
            <p>What are you looking for?</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="search-input white">
                <input
                  type="text"
                  placeholder="Search question or article..."
                />
                <button type="submit">
                  <i className="ti-search"></i>
                </button>
              </div>
              {/* <!-- /search-input --> */}
            </div>
          </div>
        </div>
        {/* <!-- /container --> */}

        <div className="bg_white">
          <div className="container margin_90_65">
            <div className="main_title">
              <h2>Our Support Sections</h2>
              <p>Read articles and questions</p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <a className="box_topic_2" href="#0">
                  <i className="ti-wallet"></i>
                  <h3>Payments</h3>
                  <p>
                    Eu qui mundi lucilius petentium, mea amet libris prodesset
                    in, ei unum delectus vituperata eum. Ne usu omittam
                    menandri.
                  </p>
                </a>
              </div>
              <div className="col-md-6">
                <a className="box_topic_2" href="#0">
                  <i className="ti-user"></i>
                  <h3>Account</h3>
                  <p>
                    Eu qui mundi lucilius petentium, mea amet libris prodesset
                    in, ei unum delectus vituperata eum. Ne usu omittam
                    menandri.
                  </p>
                </a>
              </div>
            </div>
            {/* <!-- /row --> */}

            <div className="row">
              <div className="col-md-6">
                <a className="box_topic_2" href="#0">
                  <i className="ti-help"></i>
                  <h3>General help</h3>
                  <p>
                    Eu qui mundi lucilius petentium, mea amet libris prodesset
                    in, ei unum delectus vituperata eum. Ne usu omittam
                    menandri.
                  </p>
                </a>
              </div>
              <div className="col-md-6">
                <a className="box_topic_2" href="#0">
                  <i className="ti-truck"></i>
                  <h3>Shipping</h3>
                  <p>
                    Eu qui mundi lucilius petentium, mea amet libris prodesset
                    in, ei unum delectus vituperata eum. Ne usu omittam
                    menandri.
                  </p>
                </a>
              </div>
            </div>
            {/* <!-- /row --> */}

            <div className="row">
              <div className="col-md-6">
                <a className="box_topic_2" href="#0">
                  <i className="ti-eraser"></i>
                  <h3>Refunds</h3>
                  <p>
                    Eu qui mundi lucilius petentium, mea amet libris prodesset
                    in, ei unum delectus vituperata eum. Ne usu omittam
                    menandri.
                  </p>
                </a>
              </div>
              <div className="col-md-6">
                <a className="box_topic_2" href="#0">
                  <i className="ti-comments"></i>
                  <h3>Reviews</h3>
                  <p>
                    Eu qui mundi lucilius petentium, mea amet libris prodesset
                    in, ei unum delectus vituperata eum. Ne usu omittam
                    menandri.
                  </p>
                </a>
              </div>
            </div>
            {/* <!-- /row -->					 */}
          </div>
          {/* <!-- /container -->	 */}
        </div>
        {/* <!-- /bg_white --> */}
      </main>
    </div>
  );
};

export default Help2;
