import React from 'react';
import NextHead from 'next/head';

const cart = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>

        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/cart.css" rel="stylesheet" />
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
            <h1>Cart page</h1>
          </div>
          {/* <!-- /page_header --> */}
          <table className="table table-striped cart-list">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="thumb_cart">
                    <img
                      src="/img/products/product_placeholder_square_small.jpg"
                      data-src="/img/products/shoes/1.jpg"
                      className="lazy"
                      alt="Image"
                    />
                  </div>
                  <span className="item_cart">Armor Air x Fear</span>
                </td>
                <td>
                  <strong>$140.00</strong>
                </td>
                <td>
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
                </td>
                <td>
                  <strong>$140.00</strong>
                </td>
                <td className="options">
                  <a href="#">
                    <i className="ti-trash"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="thumb_cart">
                    <img
                      src="/img/products/product_placeholder_square_small.jpg"
                      data-src="/img/products/shoes/2.jpg"
                      className="lazy"
                      alt="Image"
                    />
                  </div>
                  <span className="item_cart">Armor Okwahn II</span>
                </td>
                <td>
                  <strong>$110.00</strong>
                </td>
                <td>
                  <div className="numbers-row">
                    <input
                      type="text"
                      value="1"
                      id="quantity_2"
                      className="qty2"
                      name="quantity_2"
                    />
                    <div className="inc button_inc">+</div>
                    <div className="dec button_inc">-</div>
                  </div>
                </td>
                <td>
                  <strong>$110.00</strong>
                </td>
                <td className="options">
                  <a href="#">
                    <i className="ti-trash"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="thumb_cart">
                    <img
                      src="/img/products/product_placeholder_square_small.jpg"
                      data-src="/img/products/shoes/3.jpg"
                      className="lazy"
                      alt="Image"
                    />
                  </div>
                  <span className="item_cart">Armor Air Wildwood ACG</span>
                </td>
                <td>
                  <strong>$90.00</strong>
                </td>

                <td>
                  <div className="numbers-row">
                    <input
                      type="text"
                      value="1"
                      id="quantity_3"
                      className="qty2"
                      name="quantity_3"
                    />
                    <div className="inc button_inc">+</div>
                    <div className="dec button_inc">-</div>
                  </div>
                </td>
                <td>
                  <strong>$90.00</strong>
                </td>
                <td className="options">
                  <a href="#">
                    <i className="ti-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="row add_top_30 flex-sm-row-reverse cart_actions">
            <div className="col-sm-4 text-right">
              <button type="button" className="btn_1 gray">
                Update Cart
              </button>
            </div>
            <div className="col-sm-8">
              <div className="apply-coupon">
                <div className="form-group form-inline">
                  <input
                    type="text"
                    name="coupon-code"
                    value=""
                    placeholder="Promo code"
                    className="form-control"
                  />
                  <button type="button" className="btn_1 outline">
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /cart_actions --> */}
        </div>
        {/* <!-- /container --> */}

        <div className="box_cart">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <ul>
                  <li>
                    <span>Subtotal</span> $240.00
                  </li>
                  <li>
                    <span>Shipping</span> $7.00
                  </li>
                  <li>
                    <span>Total</span> $247.00
                  </li>
                </ul>
                <a href="cart-2.js" className="btn_1 full-width cart">
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /box_cart --> */}
      </main>
    </div>
  );
};

export default cart;
