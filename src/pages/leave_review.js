import React from 'react';
import NextHead from 'next/head';

const LeaveReview = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>

        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/leave_review.css" rel="stylesheet" />
      </NextHead>

      <main>
        <div className="container margin_60_35">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="write_review">
                <h1>Write a review for Armor Air X Fear</h1>
                <div className="rating_submit">
                  <div className="form-group">
                    <label className="d-block">Overall rating</label>
                    <span className="rating mb-0">
                      <input
                        type="radio"
                        className="rating-input"
                        id="5_star"
                        name="rating-input"
                        value="5 Stars"
                      />
                      <label htmlFor="5_star" className="rating-star"></label>
                      <input
                        type="radio"
                        className="rating-input"
                        id="4_star"
                        name="rating-input"
                        value="4 Stars"
                      />
                      <label htmlFor="4_star" className="rating-star"></label>
                      <input
                        type="radio"
                        className="rating-input"
                        id="3_star"
                        name="rating-input"
                        value="3 Stars"
                      />
                      <label htmlFor="3_star" className="rating-star"></label>
                      <input
                        type="radio"
                        className="rating-input"
                        id="2_star"
                        name="rating-input"
                        value="2 Stars"
                      />
                      <label htmlFor="2_star" className="rating-star"></label>
                      <input
                        type="radio"
                        className="rating-input"
                        id="1_star"
                        name="rating-input"
                        value="1 Star"
                      />
                      <label htmlFor="1_star" className="rating-star"></label>
                    </span>
                  </div>
                </div>
                {/* <!-- /rating_submit --> */}
                <div className="form-group">
                  <label>Title of your review</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="If you could say it in one sentence, what would you say?"
                  />
                </div>
                <div className="form-group">
                  <label>Your review</label>
                  <textarea
                    className="form-control"
                    style={{ height: '180px' }}
                    placeholder="Write your review to help others learn about this online business"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Add your photo (optional)</label>
                  <div className="fileupload">
                    <input type="file" name="fileupload" accept="image/*" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkboxes float-left add_bottom_15 add_top_15">
                    <label className="container_check">
                      Eos tollit ancillae ea, lorem consulatu qui ne, eu eros
                      eirmod scaevola sea. Et nec tantas accusamus salutatus,
                      sit commodo veritus te, erat legere fabulas has ut. Rebum
                      laudem cum ea, ius essent fuisset ut. Viderer petentium cu
                      his.
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <a href="confirm.js" className="btn_1">
                  Submit review
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </main>
    </div>
  );
};

export default LeaveReview;
