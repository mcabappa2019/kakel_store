import React from 'react';
import Image from 'next/image';

const imgBlurUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMjo+fBgAEBwG5k+U5UQAAAABJRU5ErkJggg==';

const NextImageLoader = ({
  src,
  height,
  width,
  layout,
  alt,
  objectFit,
  objectPosition,
  className,
}) => {
  // src=src.split(wooConfig.CMS_URL)[1]

  //https://cdn.statically.io/img/woocomnext.devraf.com/wp-content/uploads/2016/04/pant.png
  try {
    const imgSrc = src || imgBlurUrl;
    return layout === 'fill' ? (
      <Image
        src={imgSrc}
        layout={layout}
        objectFit={objectFit}
        objectPosition={objectPosition}
        alt={alt || 'kakel-store'}
        className={`next-image ${className}`}
        blurDataURL={imgBlurUrl}
        placeholder="blur"
        quality={25}
      />
    ) : (
      <Image
        src={imgSrc}
        height={height}
        width={width}
        layout={layout}
        alt={alt || 'kakel-store'}
        className="next-image"
        blurDataURL={imgBlurUrl}
        placeholder="blur"
        quality={25}
      />
    );
  } catch (e) {
    return <Image src={imgBlurUrl} alt="unable to load image" />;
  }
};

export default React.memo(NextImageLoader);
