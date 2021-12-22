import React from 'react';

const ModalNewsletter = () => {
  return (
    <div className="popup_wrapper">
      <div className="popup_content newsletter">
        <span className="popup_close">Close</span>
        <div className="row no-gutters">
          <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center">
            <figure>
              <img src="img/newsletter_img.jpg" alt="" />
            </figure>
          </div>
          <div className="col-md-7">
            <div className="content">
              <div className="wrapper">
                <img src="img/logo_black.svg" alt="" width="100" height="35" />
                <h3>Sign up our newsletter</h3>
                <p>
                  Ne qui aliquam probatus moderatius, ad sint cotidieque qui,
                  sea id cetero laoreet principes.
                </p>
                <form action="#">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button type="submit" className="btn_1 mt-2 mb-4">
                    Subscribe
                  </button>
                  <div className="form-group">
                    <label className="container_check d-inline">
                      Do not show this PopUp again
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- row --> */}
      </div>
    </div>
  );
};

export default ModalNewsletter;
