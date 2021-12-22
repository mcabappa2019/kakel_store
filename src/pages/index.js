import NextHead from 'next/head';
import React from 'react';
import Brands from '../components/sections/Brands';
import Appearance from '../components/sections/appearance';
import Categories from '../components/sections/category_section';

import Patterns from '../components/sections/patterns';
import AboutUsBanner from '../components/sections/AboutUsBanner';
import SectionLast from '../components/sections/SectionLast';
import HeroSection from '../components/sections/hero';
import MultiItemsCarousel from '../components/utilities/MultiItemsCarousel';
import ProductCard from '../components/productComponents/ProductCard';

const index = () => {
  return (
    <>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>
        {/* <!-- SPECIFIC CSS --> */}
        <link
          href="/css/home.css"
          rel="stylesheet preload prefetch"
          as="style"
          type="text/css"
        />
      </NextHead>

      <main>
        <div className="container">
          <HeroSection />
        </div>

        <div className="container margin_60_35">
          <Brands />
        </div>

        <div className="container margin_60_35">
          <div className="main_title">
            <span>Handla efter utseende</span>
          </div>
          <div>
            <Appearance />
          </div>
        </div>

        <div className="container margin_60_35 patterns">
          <div className="main_title">
            <span>Handla efter stil</span>
          </div>
          <Patterns />
        </div>

        <div className="container margin_60_35 category-tab">
          <div className="main_title">
            <span>kategorier</span>
          </div>
          <Categories />
        </div>

        <div className="container margin_60_35 patterns">
          <div className="main_title">
            <span>Nya Produkter</span>
          </div>
          <MultiItemsCarousel show={2}>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
            <div>
              <ProductCard />
            </div>
          </MultiItemsCarousel>
        </div>

        <div className="margin_60_35 add_bottom_90">
          <AboutUsBanner />
        </div>

        <div className="container lastsection margin_60_35">
          <SectionLast />
        </div>
      </main>
    </>
  );
};

export default index;
