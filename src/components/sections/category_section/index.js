import React from 'react';
import SubCategories from './SubCategories';

const Categories = () => {
  return (
    <div className=" small-gutters pt-3 tab_categories">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="category1"
            data-toggle="tab"
            href="#category_1"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            KAKEL & KLINKER
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="category2"
            data-toggle="tab"
            href="#category_2"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            badrum
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="category3"
            data-toggle="tab"
            href="#category_3"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            art deco & exclusive
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="category4"
            data-toggle="tab"
            href="#category_4"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            utomhus
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="category5"
            data-toggle="tab"
            href="#category_5"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Stor Storlek
          </a>
        </li>
      </ul>
      <div className="tab-content category-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="category_1"
          role="tabpanel"
          aria-labelledby="Category-1"
        >
          <SubCategories id="1" />
        </div>
        <div
          className="tab-pane fade"
          id="category_2"
          role="tabpanel"
          aria-labelledby="Category-2"
        >
          <SubCategories id="2" />
        </div>
        <div
          className="tab-pane fade"
          id="category_3"
          role="tabpanel"
          aria-labelledby="Category-3"
        >
          <SubCategories id="3" />
        </div>
        <div
          className="tab-pane fade"
          id="category_4"
          role="tabpanel"
          aria-labelledby="Category-4"
        >
          <SubCategories id="4" />
        </div>
        <div
          className="tab-pane fade"
          id="category_5"
          role="tabpanel"
          aria-labelledby="Category-5"
        >
          <SubCategories id="5" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
