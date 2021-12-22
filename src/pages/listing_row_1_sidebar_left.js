import React from 'react';
import NextHead from 'next/head';

const ListingRrow_1_sidebar_left = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>

        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/listing.css" rel="stylesheet" />
      </NextHead>

      <main>
        <div className="top_banner">
          <div
            className="opacity-mask d-flex align-items-center"
            data-opacity-mask="rgba(0, 0, 0, 0.3)"
          >
            <div className="container">
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Category</a>
                  </li>
                  <li>Page active</li>
                </ul>
              </div>
              <h1>Shoes - Grid listing</h1>
            </div>
          </div>
          <img src="img/bg_cat_shoes.jpg" className="img-fluid" alt="" />
        </div>
        {/* <!-- /top_banner --> */}
        <div id="stick_here"></div>
        <div className="toolbox elemento_stick">
          <div className="container">
            <ul className="clearfix">
              <li>
                <div className="sort_select">
                  <select name="sort" id="sort">
                    <option value="popularity" selected="selected">
                      Sort by popularity
                    </option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low{' '}
                    </option>
                  </select>
                </div>
              </li>
              <li>
                <a href="#0">
                  <i className="ti-view-grid"></i>
                </a>
                <a href="listing-row-1-sidebar-left.js">
                  <i className="ti-view-list"></i>
                </a>
              </li>
              <li>
                <a href="#0" className="open_filters">
                  <i className="ti-filter"></i>
                  <span>Filters</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /toolbox --> */}
        <div className="container margin_30">
          <div className="row">
            <aside className="col-lg-3" id="sidebar_fixed">
              <div className="filter_col">
                <div className="inner_bt">
                  <a href="#" className="open_filters">
                    <i className="ti-close"></i>
                  </a>
                </div>
                <div className="filter_type version_2">
                  <h4>
                    <a
                      href="#filter_1"
                      data-toggle="collapse"
                      className="opened"
                    >
                      Categories
                    </a>
                  </h4>
                  <div className="collapse show" id="filter_1">
                    <ul>
                      <li>
                        <label className="container_check">
                          Men <small>12</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          Women <small>24</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          Running <small>23</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          Training <small>11</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- /filter_type --> */}
                </div>
                {/* <!-- /filter_type --> */}
                <div className="filter_type version_2">
                  <h4>
                    <a
                      href="#filter_2"
                      data-toggle="collapse"
                      className="opened"
                    >
                      Color
                    </a>
                  </h4>
                  <div className="collapse show" id="filter_2">
                    <ul>
                      <li>
                        <label className="container_check">
                          Blue <small>06</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          Red <small>12</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          Orange <small>17</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          Black <small>43</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /filter_type --> */}
                <div className="filter_type version_2">
                  <h4>
                    <a
                      href="#filter_3"
                      data-toggle="collapse"
                      className="closed"
                    >
                      Brands
                    </a>
                  </h4>
                  <div className="collapse" id="filter_3">
                    <ul>
                      <li>
                        <label className="container_check">
                          Adidas <small>11</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          Nike <small>08</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          Vans <small>05</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          Puma <small>18</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /filter_type --> */}
                <div className="filter_type version_2">
                  <h4>
                    <a
                      href="#filter_4"
                      data-toggle="collapse"
                      className="closed"
                    >
                      Price
                    </a>
                  </h4>
                  <div className="collapse" id="filter_4">
                    <ul>
                      <li>
                        <label className="container_check">
                          $0 — $50<small>11</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          $50 — $100<small>08</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          $100 — $150<small>05</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        <label className="container_check">
                          $150 — $200<small>18</small>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- /filter_type --> */}
                <div className="buttons">
                  <a href="#0" className="btn_1">
                    Filter
                  </a>{' '}
                  <a href="#0" className="btn_1 gray">
                    Reset
                  </a>
                </div>
              </div>
            </aside>
            {/* <!-- /col --> */}
            <div className="col-lg-9">
              <div className="row row_item">
                <div className="col-sm-4">
                  <figure>
                    <span className="ribbon off">-30%</span>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="img/products/product_placeholder_square_medium.jpg"
                        data-src="img/products/shoes/1.jpg"
                        alt=""
                      />
                    </a>
                    <div
                      data-countdown="2019/05/15"
                      className="countdown"
                    ></div>
                  </figure>
                </div>
                <div className="col-sm-8">
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
                  <a href="product-detail-1.js">
                    <h3>Armor Air x Fear</h3>
                  </a>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident...
                  </p>
                  <div className="price_box">
                    <span className="new_price">$48.00</span>
                    <span className="old_price">$60.00</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#0" className="btn_1">
                        Add to cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /row_item --> */}
              <div className="row row_item">
                <div className="col-sm-4">
                  <figure>
                    <span className="ribbon off">-30%</span>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="img/products/product_placeholder_square_medium.jpg"
                        data-src="img/products/shoes/2.jpg"
                        alt=""
                      />
                    </a>
                    <div
                      data-countdown="2019/05/15"
                      className="countdown"
                    ></div>
                  </figure>
                </div>
                <div className="col-sm-8">
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
                  <a href="product-detail-1.js">
                    <h3>Armor Okwahn II</h3>
                  </a>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident...
                  </p>
                  <div className="price_box">
                    <span className="new_price">$90.00</span>
                    <span className="old_price">$170.00</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#0" className="btn_1">
                        Add to cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /row_item --> */}
              <div className="row row_item">
                <div className="col-sm-4">
                  <figure>
                    <span className="ribbon off">-50%</span>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="img/products/product_placeholder_square_medium.jpg"
                        data-src="img/products/shoes/3.jpg"
                        alt=""
                      />
                    </a>
                    <div
                      data-countdown="2019/05/15"
                      className="countdown"
                    ></div>
                  </figure>
                </div>
                <div className="col-sm-8">
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
                  <a href="product-detail-1.js">
                    <h3>Armor Air Wildwood ACG</h3>
                  </a>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident...
                  </p>
                  <div className="price_box">
                    <span className="new_price">$75.00</span>
                    <span className="old_price">$155.00</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#0" className="btn_1">
                        Add to cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /row_item -->  */}
              <div className="row row_item">
                <div className="col-sm-4">
                  <figure>
                    <span className="ribbon new">New</span>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="img/products/product_placeholder_square_medium.jpg"
                        data-src="img/products/shoes/4.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
                <div className="col-sm-8">
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
                  <a href="product-detail-1.js">
                    <h3>Armor ACG React Terra</h3>
                  </a>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident...
                  </p>
                  <div className="price_box">
                    <span className="new_price">$110.00</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#0" className="btn_1">
                        Add to cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /row_item --> */}
              <div className="row row_item">
                <div className="col-sm-4">
                  <figure>
                    <span className="ribbon new">New</span>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="img/products/product_placeholder_square_medium.jpg"
                        data-src="img/products/shoes/5.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
                <div className="col-sm-8">
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
                  <a href="product-detail-1.js">
                    <h3>Armor Air Zoom Alpha</h3>
                  </a>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident...
                  </p>
                  <div className="price_box">
                    <span className="new_price">$140.00</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#0" className="btn_1">
                        Add to cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /row_item --> */}
              <div className="row row_item">
                <div className="col-sm-4">
                  <figure>
                    <span className="ribbon new">New</span>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="img/products/product_placeholder_square_medium.jpg"
                        data-src="img/products/shoes/6.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
                <div className="col-sm-8">
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
                  <a href="product-detail-1.js">
                    <h3>Armor Air Alpha</h3>
                  </a>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident...
                  </p>
                  <div className="price_box">
                    <span className="new_price">$130.00</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#0" className="btn_1">
                        Add to cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /row_item --> */}
              <div className="row row_item">
                <div className="col-sm-4">
                  <figure>
                    <span className="ribbon hot">Hot</span>
                    <a href="product-detail-1.js">
                      <img
                        className="img-fluid lazy"
                        src="img/products/product_placeholder_square_medium.jpg"
                        data-src="img/products/shoes/7.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
                <div className="col-sm-8">
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
                  <a href="product-detail-1.js">
                    <h3>Armor Air 98</h3>
                  </a>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident...
                  </p>
                  <div className="price_box">
                    <span className="new_price">$115.00</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#0" className="btn_1">
                        Add to cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to favorites"
                      >
                        <i className="ti-heart"></i>
                        <span>Add to favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#0"
                        className="btn_1 gray tooltip-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to compare"
                      >
                        <i className="ti-control-shuffle"></i>
                        <span>Add to compare</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /row_item --> */}
              <div className="pagination__wrapper">
                <ul className="pagination">
                  <li>
                    <a href="#0" className="prev" title="previous page">
                      &#10094;
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#0">2</a>
                  </li>
                  <li>
                    <a href="#0">3</a>
                  </li>
                  <li>
                    <a href="#0">4</a>
                  </li>
                  <li>
                    <a href="#0" className="next" title="next page">
                      &#10095;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- /col --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </main>
    </div>
  );
};

export default ListingRrow_1_sidebar_left;
