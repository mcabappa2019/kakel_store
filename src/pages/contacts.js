import React from 'react';
import NextHead from 'next/head';

const contacts = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>

        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/contact.css" rel="stylesheet" />
      </NextHead>

      <main className="bg_gray">
        <div className="container margin_60">
          <div className="main_title">
            <h2>Contact kakel</h2>
            <p>
              Euismod phasellus ac lectus fusce parturient cubilia a nisi
              blandit sem cras nec tempor adipiscing rcu ullamcorper ligula.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="box_contacts">
                <i className="ti-support"></i>
                <h2>kakel Help Center</h2>
                <a href="#0">+94 423-23-221</a> -{' '}
                <a href="#0">help@kakel.com</a>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_contacts">
                <i className="ti-map-alt"></i>
                <h2>kakel Showroom</h2>
                <div>6th Forrest Ray, London - 10001 UK</div>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_contacts">
                <i className="ti-package"></i>
                <h2>kakel Orders</h2>
                <a href="#0">+94 423-23-221</a> -{' '}
                <a href="#0">order@kakel.com</a>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
              </div>
            </div>
          </div>
          {/* <!-- /row -->				 */}
        </div>
        {/* <!-- /container --> */}
        <div className="bg_white">
          <div className="container margin_60_35">
            <h4 className="pb-3">Drop Us a Line</h4>
            <div className="row">
              <div className="col-lg-4 col-md-6 add_bottom_25">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name *"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email *"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    style={{ height: '150px' }}
                    placeholder="Message *"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    className="btn_1 full-width"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-6 add_bottom_25">
                <iframe
                  className="map_contact"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39714.47749917409!2d-0.13662037019554393!3d51.52871971170425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondra%2C+Regno+Unito!5e0!3m2!1sit!2ses!4v1557824540343!5m2!1sit!2ses"
                  style={{ border: '0' }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /bg_white --> */}
      </main>
    </div>
  );
};

export default contacts;
