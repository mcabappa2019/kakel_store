import React from 'react';

const ModalAdvertise = () => {
  return (
    <div className="popup_wrapper">
      <div className="popup_content">
        <span className="popup_close">Close</span>
        <a href="listing-grid-1-full.js">
          <img
            className="img-fluid"
            src="img/banner_popup.png"
            alt=""
            width="500"
            height="500"
          />
        </a>
      </div>
    </div>
  );
};

export default ModalAdvertise;
