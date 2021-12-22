import NextHead from 'next/head';
import React from 'react';

const Error = () => {
  return (
    <>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>

        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/error_track.css" rel="stylesheet" />
      </NextHead>

      <main className="bg_gray">
        <div id="error_page">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-7 col-lg-9">
                <img
                  src="/img/404.svg"
                  alt=""
                  className="img-fluid"
                  width="400"
                  height="212"
                />
                <p>The page you are looking is not founded!</p>
                <form>
                  <div className="search_bar">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What are you looking for?"
                    />
                    <input type="submit" value="Search" />
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /error_page --> */}
      </main>
    </>
  );
};

export default Error;
