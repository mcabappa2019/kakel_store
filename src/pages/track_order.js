import React from 'react';
import NextHead from 'next/head';

const TrackOrder = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>
        <link href="/css/error_track.css" rel="stylesheet" />
      </NextHead>

      <main className="bg_gray">
        <div id="track_order">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-7 col-lg-9">
                <img
                  src="/img/track_order.svg"
                  alt=""
                  className="img-fluid add_bottom_15"
                  width="200"
                  height="177"
                />
                <p>Quick Tracking Order</p>
                <form>
                  <div className="search_bar">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Invoice ID"
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
        {/* <!-- /track_order --> */}

        <div className="bg_white">
          <div className="container margin_60_35">
            <div className="main_title">
              <h2>New Entries</h2>
              <span>Products</span>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <div className="owl-carousel owl-theme products_carousel">
              <div className="item">
                <div className="grid_item">
                  <span className="ribbon new">New</span>
                  <figure>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="/img/products/product_placeholder_square_medium.jpg"
                        data-src="/img/products/shoes/4.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <a href="product-detail-1.js">
                    <h3>ACG React Terra</h3>
                  </a>
                  <div className="price_box">
                    <span className="new_price">$110.00</span>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <i className="ti-shopping-cart"></i>
                        <span>Add to cart</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /grid_item --> */}
              </div>
              {/* <!-- /item --> */}
              <div className="item">
                <div className="grid_item">
                  <span className="ribbon new">New</span>
                  <figure>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="/img/products/product_placeholder_square_medium.jpg"
                        data-src="/img/products/shoes/5.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <a href="product-detail-1.js">
                    <h3>Air Zoom Alpha</h3>
                  </a>
                  <div className="price_box">
                    <span className="new_price">$140.00</span>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <i className="ti-shopping-cart"></i>
                        <span>Add to cart</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /grid_item --> */}
              </div>
              {/* <!-- /item --> */}
              <div className="item">
                <div className="grid_item">
                  <span className="ribbon hot">Hot</span>
                  <figure>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="/img/products/product_placeholder_square_medium.jpg"
                        data-src="/img/products/shoes/8.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <a href="product-detail-1.js">
                    <h3>Air Color 720</h3>
                  </a>
                  <div className="price_box">
                    <span className="new_price">$120.00</span>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <i className="ti-shopping-cart"></i>
                        <span>Add to cart</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /grid_item --> */}
              </div>
              {/* <!-- /item --> */}
              <div className="item">
                <div className="grid_item">
                  <span className="ribbon off">-30%</span>
                  <figure>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="/img/products/product_placeholder_square_medium.jpg"
                        data-src="/img/products/shoes/2.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <a href="product-detail-1.js">
                    <h3>Okwahn II</h3>
                  </a>
                  <div className="price_box">
                    <span className="new_price">$90.00</span>
                    <span className="old_price">$170.00</span>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <i className="ti-shopping-cart"></i>
                        <span>Add to cart</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /grid_item --> */}
              </div>
              {/* <!-- /item --> */}
              <div className="item">
                <div className="grid_item">
                  <span className="ribbon off">-50%</span>
                  <figure>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="/img/products/product_placeholder_square_medium.jpg"
                        data-src="/img/products/shoes/3.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <a href="product-detail-1.js">
                    <h3>Air Wildwood ACG</h3>
                  </a>
                  <div className="price_box">
                    <span className="new_price">$75.00</span>
                    <span className="old_price">$155.00</span>
                  </div>
                  <ul>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="tooltip-1"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to cart"
                      >
                        <i className="ti-shopping-cart"></i>
                        <span>Add to cart</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /grid_item --> */}
              </div>
              {/* <!-- /item --> */}
            </div>
            {/* <!-- /products_carousel --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /bg_white --> */}
      </main>
    </div>
  );
};

export default TrackOrder;
