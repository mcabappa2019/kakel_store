import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMjo/PBQAD3gGQa5kMIgAAAABJRU5ErkJggg==';
const placeholder = 'blur';

const ProductCard = () => {
  return (
    <div className="card product-card">
      <Image
        src={'/img/products/product-image-2.png'}
        width={316}
        height={183}
        layout="responsive"
        priority={false}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        alt=""
        quality={30}
      />
      <div className="card-body">
        <span className="title d-block">Kakel Alesso Svart Matt Marmor</span>
        <span className="old_price d-block">800.00 kr</span>
        <span className="new_price d-block">599.00 kr</span>
        <div className="d-flex justify-content-between pt-3">
          <ul className="color-options p-0">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <span>+18</span>
          </ul>

          <div className="fev-icon">
            <i className="ti ti-heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
