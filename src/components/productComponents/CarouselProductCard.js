import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMjo/PBQAD3gGQa5kMIgAAAABJRU5ErkJggg==';
const placeholder = 'blur';

const CarouselProductCard = () => {
  return (
    <div className="card">
      <Image
        src={'/img/slides/R2.png'}
        width={546}
        height={270}
        layout="responsive"
        priority={false}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        alt=""
        quality={30}
      />
      <div className="card-body">
        <span className="title">Kakel Alesso Svart Matt Marmor</span>
        <span className="old_price">800.00 kr</span>
        <span className="new_price">599.00 kr</span>
      </div>
    </div>
  );
};

export default CarouselProductCard;
