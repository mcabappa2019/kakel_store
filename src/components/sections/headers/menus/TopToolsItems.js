import React from 'react';

const TopToolsItems = () => {
  return (
    <ul className="d-flex top_tools my-0">
      <div className="search-box m-0 d-flex flex-grow-1">
        <span className="search-btn">
          <i className="ti ti-search"></i>
        </span>
        <input type="text" placeholder="Search" className="search-input-box" />
      </div>

      <li className=" px-4 icon-box m-0">
        <a href="#0" className="history">
          <span>History</span>
        </a>
      </li>

      <li className=" px-4 icon-box m-0">
        <a href="#0" className="wishlist">
          <span>Wishlist</span>
        </a>
      </li>

      <li className=" px-4 icon-box m-0">
        <div className="dropdown dropdown-access">
          <a href="/account" className="access_link">
            <span>Account</span>
          </a>
          <div className="dropdown-menu">
            <a href="account" className="btn_1">
              Sign In or Sign Up
            </a>
            <ul>
              <li>
                <a href="/track-order">
                  <i className="ti-truck"></i>Track your Order
                </a>
              </li>
              <li>
                <a href="/account">
                  <i className="ti-package"></i>My Orders
                </a>
              </li>
              <li>
                <a href="/account">
                  <i className="ti-user"></i>My Profile
                </a>
              </li>
              <li>
                <a href="/help">
                  <i className="ti-help-alt"></i>Help and Faq
                </a>
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li className=" px-4 icon-box m-0">
        <div className="dropdown dropdown-cart">
          <a href="/cart" className="cart_bt">
            <strong>2</strong>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default TopToolsItems;
