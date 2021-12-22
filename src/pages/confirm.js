import React from 'react';
import NextHead from 'next/head';

const confirm = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>

        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/checkout.css" rel="stylesheet" />
      </NextHead>

      <main className="bg_gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div id="confirm">
                <div className="icon icon--order-success svg add_bottom_15">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="72"
                  >
                    <g fill="none" stroke="#8EC343" strokeWidth="2">
                      <circle
                        cx="36"
                        cy="36"
                        r="35"
                        // style="stroke-dasharray:240px, 240px; stroke-dashoffset: 480px;"
                      ></circle>
                      <path
                        d="M17.417,37.778l9.93,9.909l25.444-25.393"
                        // style="stroke-dasharray:50px, 50px; stroke-dashoffset: 0px;"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h2>Order completed!</h2>
                <p>You will receive a confirmation email soon!</p>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </main>
    </div>
  );
};

export default confirm;
