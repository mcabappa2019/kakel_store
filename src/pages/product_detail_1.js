import React from 'react';
import NextHead from 'next/head';

const ProductDetail_1 = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>

        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/product_page.css" rel="stylesheet" />
      </NextHead>

      <main className="bg_gray">
        <div className="container margin_30">
          <div className="page_header">
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
            <h1>Armor Air X Fear</h1>
          </div>
          {/* <!-- /page_header --> */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="owl-carousel owl-theme prod_pics magnific-gallery">
                <div className="item">
                  <a
                    href="/img/products/shoes/product_detail_1.jpg"
                    title="Photo title"
                    data-effect="mfp-zoom-in"
                  >
                    <img
                      src="/img/products/shoes/product_detail_1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                {/* <!-- /item --> */}
                <div className="item">
                  <a
                    href="/img/products/shoes/product_detail_2.jpg"
                    title="Photo title"
                    data-effect="mfp-zoom-in"
                  >
                    <img
                      src="/img/products/product_placeholder_detail_2.jpg"
                      data-src="/img/products/shoes/product_detail_2.jpg"
                      alt=""
                      className="owl-lazy"
                    />
                  </a>
                </div>
                {/* <!-- /item --> */}
              </div>
              {/* <!-- /carousel --> */}
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}

        <div className="bg_white">
          <div className="container margin_60_35">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="prod_info version_2">
                  <span className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                    <em>4 reviews</em>
                  </span>
                  <p>
                    <small>SKU: MTKRY-001</small>
                    <br />
                    Lorem ipsum dolor sit amet, his no adipisci pericula
                    conclusionemque. Qui labore salutandi ex, vivendum
                    argumentum mediocritatem vis eu, viris tritani per id. At
                    iudicabit maluisset vis, dicant diceret pri cu. Cum at rebum
                    vulputate forensibus, eruditi principes ad vel, pro denique
                    recusabo at. Ubique nominavi delicata sit cu, quo no reque
                    insolens suscipiantur.
                  </p>
                  <p>
                    Et phaedrum temporibus per. Antiopam posidonium et est. Eu
                    ius quas modus suavitate, ex sea feugiat laoreet voluptatum.
                    Quo at veritus ancillae complectitur, duo no assum omnes.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="prod_options version_2">
                  <div className="row">
                    <label className="col-xl-7 col-lg-5  col-md-6 col-6 pt-0">
                      <strong>Color</strong>
                    </label>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-6 colors">
                      <ul>
                        <li>
                          <a href="#0" className="color color_1 active"></a>
                        </li>
                        <li>
                          <a href="#0" className="color color_2"></a>
                        </li>
                        <li>
                          <a href="#0" className="color color_3"></a>
                        </li>
                        <li>
                          <a href="#0" className="color color_4"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-xl-7 col-lg-5 col-md-6 col-6">
                      <strong>Size</strong> - Size Guide{' '}
                      <a
                        href="#0"
                        data-toggle="modal"
                        data-target="#size-modal"
                      >
                        <i className="ti-help-alt"></i>
                      </a>
                    </label>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-6">
                      <div className="custom-select-form">
                        <select className="wide">
                          <option value="" selected="">
                            Small (S)
                          </option>
                          <option value="">M</option>
                          <option value=" ">L</option>
                          <option value=" ">XL</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-xl-7 col-lg-5  col-md-6 col-6">
                      <strong>Quantity</strong>
                    </label>
                    <div className="col-xl-5 col-lg-5 col-md-6 col-6">
                      <div className="numbers-row">
                        <input
                          type="text"
                          value="1"
                          id="quantity_1"
                          className="qty2"
                          name="quantity_1"
                        />
                        <div className="inc button_inc">+</div>
                        <div className="dec button_inc">-</div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-7 col-md-6">
                      <div className="price_main">
                        <span className="new_price">$148.00</span>
                        <span className="percentage">-20%</span>{' '}
                        <span className="old_price">$160.00</span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="btn_add_to_cart">
                        <a href="#0" className="btn_1">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
        </div>
        {/* <!-- /bg_white --> */}

        <div className="tabs_product bg_white version_2">
          <div className="container">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  id="tab-A"
                  href="#pane-A"
                  className="nav-link active"
                  data-toggle="tab"
                  role="tab"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="tab-B"
                  href="#pane-B"
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /tabs_product --> */}

        <div className="tab_content_wrapper">
          <div className="container">
            <div className="tab-content" role="tablist">
              <div
                id="pane-A"
                className="card tab-pane fade active show"
                role="tabpanel"
                aria-labelledby="tab-A"
              >
                <div className="card-header" role="tab" id="heading-A">
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      href="#collapse-A"
                      aria-expanded="false"
                      aria-controls="collapse-A"
                    >
                      Description
                    </a>
                  </h5>
                </div>

                <div
                  id="collapse-A"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading-A"
                >
                  <div className="card-body">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                        <h3>Details</h3>
                        <p>
                          Lorem ipsum dolor sit amet, in eleifend{' '}
                          <strong>inimicus elaboraret</strong> his, harum
                          efficiendi mel ne. Sale percipit vituperata ex mel,
                          sea ne essent aeterno sanctus, nam ea laoreet civibus
                          electram. Ea vis eius explicari. Quot iuvaret ad has.
                        </p>
                        <p>
                          Vis ei ipsum conclusionemque. Te enim suscipit
                          recusabo mea, ne vis mazim aliquando, everti insolens
                          at sit. Cu vel modo unum quaestio, in vide dicta has.
                          Ut his laudem explicari adversarium, nisl{' '}
                          <strong>laboramus hendrerit</strong> te his, alia
                          lobortis vis ea.
                        </p>
                        <p>
                          Perfecto eleifend sea no, cu audire voluptatibus eam.
                          An alii praesent sit, nobis numquam principes ea eos,
                          cu autem constituto suscipiantur eam. Ex graeci
                          elaboraret pro. Mei te omnis tantas, nobis viderer
                          vivendo ex has.
                        </p>
                      </div>
                      <div className="col-lg-5">
                        <h3>Specifications</h3>
                        <div className="table-responsive">
                          <table className="table table-sm table-striped">
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Color</strong>
                                </td>
                                <td>Blue, Purple</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Size</strong>
                                </td>
                                <td>150x100x100</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Weight</strong>
                                </td>
                                <td>0.6kg</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Manifacturer</strong>
                                </td>
                                <td>Manifacturer</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <!-- /table-responsive --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /TAB A --> */}
              <div
                id="pane-B"
                className="card tab-pane fade"
                role="tabpanel"
                aria-labelledby="tab-B"
              >
                <div className="card-header" role="tab" id="heading-B">
                  <h5 className="mb-0">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      href="#collapse-B"
                      aria-expanded="false"
                      aria-controls="collapse-B"
                    >
                      Reviews
                    </a>
                  </h5>
                </div>
                <div
                  id="collapse-B"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading-B"
                >
                  <div className="card-body">
                    <div className="row justify-content-between">
                      <div className="col-lg-5">
                        <div className="review_content">
                          <div className="clearfix add_bottom_10">
                            <span className="rating">
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <em>5.0/5.0</em>
                            </span>
                            <em>Published 54 minutes ago</em>
                          </div>
                          <h4>Commpletely satisfied</h4>
                          <p>
                            Eos tollit ancillae ea, lorem consulatu qui ne, eu
                            eros eirmod scaevola sea. Et nec tantas accusamus
                            salutatus, sit commodo veritus te, erat legere
                            fabulas has ut. Rebum laudem cum ea, ius essent
                            fuisset ut. Viderer petentium cu his.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="review_content">
                          <div className="clearfix add_bottom_10">
                            <span className="rating">
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star empty"></i>
                              <i className="icon-star empty"></i>
                              <em>4.0/5.0</em>
                            </span>
                            <em>Published 1 day ago</em>
                          </div>
                          <h4>Always the best</h4>
                          <p>
                            Et nec tantas accusamus salutatus, sit commodo
                            veritus te, erat legere fabulas has ut. Rebum laudem
                            cum ea, ius essent fuisset ut. Viderer petentium cu
                            his.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /row --> */}
                    <div className="row justify-content-between">
                      <div className="col-lg-5">
                        <div className="review_content">
                          <div className="clearfix add_bottom_10">
                            <span className="rating">
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star empty"></i>
                              <em>4.5/5.0</em>
                            </span>
                            <em>Published 3 days ago</em>
                          </div>
                          <h4>Outstanding</h4>
                          <p>
                            Eos tollit ancillae ea, lorem consulatu qui ne, eu
                            eros eirmod scaevola sea. Et nec tantas accusamus
                            salutatus, sit commodo veritus te, erat legere
                            fabulas has ut. Rebum laudem cum ea, ius essent
                            fuisset ut. Viderer petentium cu his.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="review_content">
                          <div className="clearfix add_bottom_10">
                            <span className="rating">
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <i className="icon-star"></i>
                              <em>5.0/5.0</em>
                            </span>
                            <em>Published 4 days ago</em>
                          </div>
                          <h4>Excellent</h4>
                          <p>
                            Sit commodo veritus te, erat legere fabulas has ut.
                            Rebum laudem cum ea, ius essent fuisset ut. Viderer
                            petentium cu his.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /row --> */}
                    <p className="text-right">
                      <a href="leave-review.js" className="btn_1">
                        Leave a review
                      </a>
                    </p>
                  </div>
                  {/* <!-- /card-body --> */}
                </div>
              </div>
              {/* <!-- /tab B --> */}
            </div>
            {/* <!-- /tab-content --> */}
          </div>
          {/* <!-- /container --> */}
        </div>
        {/* <!-- /tab_content_wrapper --> */}

        <div className="bg_white">
          <div className="container margin_60_35">
            <div className="main_title">
              <h2>Related</h2>
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
                        className="owl-lazy"
                        src="/img/products/product_placeholder_square_medium.jpg"
                        data-src="/img/products/shoes/4.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
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
                        className="owl-lazy"
                        src="img/products/product_placeholder_square_medium.jpg"
                        data-src="img/products/shoes/5.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
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
                        className="owl-lazy"
                        src="/img/products/product_placeholder_square_medium.jpg"
                        data-src="/img/products/shoes/8.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
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
                        className="owl-lazy"
                        src="img/products/product_placeholder_square_medium.jpg"
                        data-src="img/products/shoes/2.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
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
                        className="owl-lazy"
                        src="/img/products/product_placeholder_square_medium.jpg"
                        data-src="/img/products/shoes/3.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                  <div className="rating">
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star voted"></i>
                    <i className="icon-star"></i>
                  </div>
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
      {/* <!-- /main --> */}

      {/* <!-- page --> */}

      <div className="top_panel">
        <div className="container header_panel">
          <a href="#0" className="btn_close_top_panel">
            <i className="ti-close"></i>
          </a>
          <label>1 product added to cart</label>
        </div>
        {/* <!-- /header_panel --> */}
        <div className="item">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="item_panel">
                  <figure>
                    <img
                      src="/img/products/product_placeholder_square_small.jpg"
                      data-src="/img/products/shoes/1.jpg"
                      className="lazy"
                      alt=""
                    />
                  </figure>
                  <h4>1x Armor Air X Fear</h4>
                  <div className="price_panel">
                    <span className="new_price">$148.00</span>
                    <span className="percentage">-20%</span>{' '}
                    <span className="old_price">$160.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-5 btn_panel">
                <a href="/cart" className="btn_1 outline">
                  View cart
                </a>{' '}
                <a href="/checkout" className="btn_1">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /item --> */}
        <div className="container related">
          <h4>Who bought this product also bought</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="item_panel">
                <a href="#0">
                  <figure>
                    <img
                      src="/img/products/product_placeholder_square_small.jpg"
                      data-src="/img/products/shoes/2.jpg"
                      alt=""
                      className="lazy"
                    />
                  </figure>
                </a>
                <a href="#0">
                  <h5>Armor Okwahn II</h5>
                </a>
                <div className="price_panel">
                  <span className="new_price">$90.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item_panel">
                <a href="#0">
                  <figure>
                    <img
                      src="/img/products/product_placeholder_square_small.jpg"
                      data-src="/img/products/shoes/3.jpg"
                      alt=""
                      className="lazy"
                    />
                  </figure>
                </a>
                <a href="#0">
                  <h5>Armor Air Wildwood ACG</h5>
                </a>
                <div className="price_panel">
                  <span className="new_price">$75.00</span>
                  <span className="percentage">-20%</span>{' '}
                  <span className="old_price">$155.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item_panel">
                <a href="#0">
                  <figure>
                    <img
                      src="/img/products/product_placeholder_square_small.jpg"
                      data-src="/img/products/shoes/4.jpg"
                      alt=""
                      className="lazy"
                    />
                  </figure>
                </a>
                <a href="#0">
                  <h5>Armor ACG React Terra</h5>
                </a>
                <div className="price_panel">
                  <span className="new_price">$110.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /related --> */}
      </div>
      {/* <!-- /add_cart_panel --> */}

      {/* <!-- Size modal --> */}
      <div
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="size-modal"
        id="size-modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Size guide</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti-close"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet, et velit propriae invenire mea, ad
                nam alia intellegat. Aperiam mediocrem rationibus nec te. Tation
                persecuti accommodare pro te. Vis et augue legere, vel labitur
                habemus ocurreret ex.
              </p>
              <div className="table-responsive">
                <table className="table table-striped table-sm sizes">
                  <tbody>
                    <tr>
                      <th scope="row">US Sizes</th>
                      <td>6</td>
                      <td>6,5</td>
                      <td>7</td>
                      <td>7,5</td>
                      <td>8</td>
                      <td>8,5</td>
                      <td>9</td>
                      <td>9,5</td>
                      <td>10</td>
                      <td>10,5</td>
                    </tr>
                    <tr>
                      <th scope="row">Euro Sizes</th>
                      <td>39</td>
                      <td>39</td>
                      <td>40</td>
                      <td>40-41</td>
                      <td>41</td>
                      <td>41-42</td>
                      <td>42</td>
                      <td>42-43</td>
                      <td>43</td>
                      <td>43-44</td>
                    </tr>
                    <tr>
                      <th scope="row">UK Sizes</th>
                      <td>5,5</td>
                      <td>6</td>
                      <td>6,5</td>
                      <td>7</td>
                      <td>7,5</td>
                      <td>8</td>
                      <td>8,5</td>
                      <td>9</td>
                      <td>9,5</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <th scope="row">Inches</th>
                      <td>9.25</td>
                      <td>9.5</td>
                      <td>9.625</td>
                      <td>9.75</td>
                      <td>9.9375</td>
                      <td>10.125</td>
                      <td>10.25</td>
                      <td>10.5</td>
                      <td>10.625</td>
                      <td>10.75</td>
                    </tr>
                    <tr>
                      <th scope="row">CM</th>
                      <td>23,5</td>
                      <td>24,1</td>
                      <td>24,4</td>
                      <td>24,8</td>
                      <td>25,4</td>
                      <td>25,7</td>
                      <td>26</td>
                      <td>26,7</td>
                      <td>27</td>
                      <td>27,3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- /table --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail_1;
