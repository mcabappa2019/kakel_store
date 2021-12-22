/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useScrollPosition } from '../../utilities/scroll-utility-function';
import NextImageLoader from '../../utilities/NextImageLoader';
import Mainmenu from './menus/Mainmenu';
import TopToolsItems from './menus/TopToolsItems';

const Header = () => {
  const [showSticky, setShowSticky] = useState();
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos?.y < -80) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    },
    [showSticky]
  );

  return (
    <>
      <header className="version_2">
        <div
          className={
            showSticky
              ? ' justify-content-center  main_header Sticky sticky_element'
              : ' justify-content-center  main_header Sticky '
          }
        >
          <div className="top_line version_1 plus_select justify-content-center">
            <div className="container p-0">
              <div className="row d-flex justify-content-center">
                <div className="col-6">
                  <ul className="top_links">
                    <li>
                      <span>SNABBA LEVERANSER</span>
                    </li>
                    <li>
                      <span>Hög kvalité</span>
                    </li>
                    <li>
                      <span>Miljötänk</span>
                    </li>
                  </ul>
                </div>
                <div className="google-img">
                  <img src="/img/Google.png" width="110" height="30" alt="" />
                </div>
              </div>
            </div>
            {/* <!-- End container--> */}
          </div>

          <nav>
            <div className="container">
              <div className="row small-gutters justify-content-end">
                <div className="align-self-center d-flex justify-content-start col-md-2  mr-3">
                  <Link href="/">
                    <a>
                      <NextImageLoader
                        src="/img/Logo2.png"
                        alt=""
                        width={204}
                        height={41}
                        // className="logo-img"
                        layout="fixed"
                      />
                    </a>
                  </Link>
                </div>

                <div className="flex-grow-1">
                  <div>
                    <TopToolsItems />
                  </div>
                  <Mainmenu />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- /header --> */}
      <div className="top_panel">
        <div className="container header_panel">
          <a href="#0" className="btn_close_top_panel">
            <i className="ti-close"></i>
          </a>
          <small>What are you looking for?</small>
        </div>
        {/* <!-- /header_panel --> */}

        <div className="container">
          <div className="search-input">
            <input type="text" placeholder="Search over 10.000 products..." />
            <button type="submit">
              <i className="ti-search"></i>
            </button>
          </div>
        </div>
        {/* <!-- /related --> */}
      </div>
      {/* <!-- /search_panel --> */}
    </>
  );
};

export default React.memo(Header);
