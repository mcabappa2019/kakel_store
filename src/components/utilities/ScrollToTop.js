import React, { useState } from 'react';
import { useScrollPosition } from '../utilities/scroll-utility-function';

const ScrollToTop = () => {
  const [show, setShow] = useState();
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y < -600) {
        setShow(true);
      } else {
        setShow(false);
      }
    },
    [show]
  );
  return (
    <div
      className={show ? 'd-block' : 'd-none'}
      id="toTop"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    />
  );
};

export default React.memo(ScrollToTop);
