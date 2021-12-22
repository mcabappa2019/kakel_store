import React, { Children, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

const MultiItemsCarousel = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 80;
  return (
    <div className="multi-carousel" style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={
          <span>
            <i className="ti ti-arrow-circle-left" />
          </span>
        }
        rightChevron={
          <span>
            <i className="ti ti-arrow-circle-right" />
          </span>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {props?.children}
      </ItemsCarousel>
    </div>
  );
};

export default MultiItemsCarousel;
