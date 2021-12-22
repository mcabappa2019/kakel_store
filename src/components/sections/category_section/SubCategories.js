import React from 'react';
import ProductCard from '../../productComponents/ProductCard';

const SubCategories = ({ id }) => {
  return (
    <div className="row tab_sub_categories">
      <div className="col-3">
        <div
          className="nav flex-column nav-pills"
          id={id}
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="v-pills-home-tab"
            data-toggle="pill"
            href={`#sub_cat_1_${id}`}
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            badrumsmöbler
          </a>
          <a
            className="nav-link"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href={`#sub_cat_2_${id}`}
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            tvättställ
          </a>
          <a
            className="nav-link"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href={`#sub_cat_3_${id}`}
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            speglar
          </a>
          <a
            className="nav-link"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href={`#sub_cat_4_${id}`}
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            tvättställsskåp
          </a>
          <a
            className="nav-link"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href={`#sub_cat_5_${id}`}
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            väggskåp
          </a>
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id={`sub_cat_1_${id}`}
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div className="d-flex justify-content-around">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id={`sub_cat_2_${id}`}
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <div className="d-flex justify-content-around">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id={`sub_cat_3_${id}`}
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            <div className="d-flex justify-content-around">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id={`sub_cat_4_${id}`}
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <div className="d-flex justify-content-around">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div
            className="tab-pane fade "
            id={`sub_cat_5_${id}`}
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <div className="d-flex justify-content-around">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
