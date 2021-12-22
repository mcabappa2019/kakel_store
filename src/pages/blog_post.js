import React from 'react';
import NextHead from 'next/head';

const BlogPost = () => {
  return (
    <div>
      <NextHead>
        <title>KAKEL STORE | Tile Store</title>

        {/* <!-- SPECIFIC CSS --> */}
        <link href="/css/blog.css" rel="stylesheet" />
      </NextHead>

      <main className="bg_gray">
        <div className="container margin_30">
          <div className="page_header">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Category</a>
                </li>
                <li>Page active</li>
              </ul>
            </div>
          </div>
          {/* <!-- /page_header --> */}
          <div className="row">
            <div className="col-lg-9">
              <div className="singlepost">
                <figure>
                  <img
                    alt=""
                    className="img-fluid"
                    src="/img/blog-single.jpg"
                  />
                </figure>
                <h1>Ei pro alia placerat theophrastus</h1>
                <div className="postmeta">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-folder"></i> Category
                      </a>
                    </li>
                    <li>
                      <i className="ti-calendar"></i> 23/12/2015
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-user"></i> Admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-comment"></i> (14) Comments
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /post meta --> */}
                <div className="post-content">
                  <div className="dropcaps">
                    <p>
                      Aorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>

                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum, Lorem
                    ipsum dolor sit amet.., comes from a line in section
                    1.10.32.
                  </p>
                </div>
                {/* <!-- /post --> */}
              </div>
              {/* <!-- /single-post --> */}

              <div id="comments">
                <h5>Comments</h5>
                <ul>
                  <li>
                    <div className="avatar">
                      <a href="#">
                        <img src="/img/avatar1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="comment_right clearfix">
                      <div className="comment_info">
                        By <a href="#">Anna Smith</a>
                        <span>|</span>25/10/2019<span>|</span>
                        <a href="#">
                          <i className="icon-reply"></i>
                        </a>
                      </div>
                      <p>
                        Nam cursus tellus quis magna porta adipiscing. Donec et
                        eros leo, non pellentesque arcu. Curabitur vitae mi
                        enim, at vestibulum magna. Cum sociis natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus.
                        Sed sit amet sem a urna rutrumeger fringilla. Nam vel
                        enim ipsum, et congue ante.
                      </p>
                    </div>
                    <ul className="replied-to">
                      <li>
                        <div className="avatar">
                          <a href="#">
                            <img src="/img/avatar2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="comment_right clearfix">
                          <div className="comment_info">
                            By <a href="#">Anna Smith</a>
                            <span>|</span>25/10/2019<span>|</span>
                            <a href="#">
                              <i className="icon-reply"></i>
                            </a>
                          </div>
                          <p>
                            Nam cursus tellus quis magna porta adipiscing. Donec
                            et eros leo, non pellentesque arcu. Curabitur vitae
                            mi enim, at vestibulum magna. Cum sociis natoque
                            penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Sed sit amet sem a urna rutrumeger
                            fringilla. Nam vel enim ipsum, et congue ante.
                          </p>
                          <p>
                            Aenean iaculis sodales dui, non hendrerit lorem
                            rhoncus ut. Pellentesque ullamcorper venenatis elit
                            idaipiscingi Duis tellus neque, tincidunt eget
                            pulvinar sit amet, rutrum nec urna. Suspendisse
                            pretium laoreet elit vel ultricies. Maecenas
                            ullamcorper ultricies rhoncus. Aliquam erat
                            volutpat.
                          </p>
                        </div>
                        <ul className="replied-to">
                          <li>
                            <div className="avatar">
                              <a href="#">
                                <img src="/img/avatar2.jpg" alt="" />
                              </a>
                            </div>
                            <div className="comment_right clearfix">
                              <div className="comment_info">
                                By <a href="#">Anna Smith</a>
                                <span>|</span>25/10/2019<span>|</span>
                                <a href="#">
                                  <i className="icon-reply"></i>
                                </a>
                              </div>
                              <p>
                                Nam cursus tellus quis magna porta adipiscing.
                                Donec et eros leo, non pellentesque arcu.
                                Curabitur vitae mi enim, at vestibulum magna.
                                Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus. Sed
                                sit amet sem a urna rutrumeger fringilla. Nam
                                vel enim ipsum, et congue ante.
                              </p>
                              <p>
                                Aenean iaculis sodales dui, non hendrerit lorem
                                rhoncus ut. Pellentesque ullamcorper venenatis
                                elit idaipiscingi Duis tellus neque, tincidunt
                                eget pulvinar sit amet, rutrum nec urna.
                                Suspendisse pretium laoreet elit vel ultricies.
                                Maecenas ullamcorper ultricies rhoncus. Aliquam
                                erat volutpat.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="avatar">
                      <a href="#">
                        <img src="/img/avatar3.jpg" alt="" />
                      </a>
                    </div>

                    <div className="comment_right clearfix">
                      <div className="comment_info">
                        By <a href="#">Anna Smith</a>
                        <span>|</span>25/10/2019<span>|</span>
                        <a href="#">
                          <i className="icon-reply"></i>
                        </a>
                      </div>
                      <p>Cursus tellus quis magna porta adipiscin</p>
                    </div>
                  </li>
                </ul>
              </div>

              <hr />

              <h5>Leave a comment</h5>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name2"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      id="email2"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      id="website3"
                      className="form-control"
                      placeholder="Website"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="comments"
                  id="comments2"
                  rows="6"
                  placeholder="Comment"
                ></textarea>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  id="submit2"
                  className="btn_1 add_bottom_15"
                >
                  Submit
                </button>
              </div>
            </div>
            {/* <!-- /col --> */}

            <aside className="col-lg-3">
              <div className="widget search_blog">
                <div className="form-group">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="form-control"
                    placeholder="Search.."
                  />
                  <button type="submit">
                    <i className="ti-search"></i>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
              {/* <!-- /widget --> */}
              <div className="widget">
                <div className="widget-title">
                  <h4>Latest Post</h4>
                </div>
                <ul className="comments-list">
                  <li>
                    <div className="alignleft">
                      <a href="#0">
                        <img src="img/blog-5.jpg" alt="" />
                      </a>
                    </div>
                    <small>Category - 11.08.2016</small>
                    <h3>
                      <a href="#" title="">
                        Verear qualisque ex minimum...
                      </a>
                    </h3>
                  </li>
                  <li>
                    <div className="alignleft">
                      <a href="#0">
                        <img src="/img/blog-6.jpg" alt="" />
                      </a>
                    </div>
                    <small>Category - 11.08.2016</small>
                    <h3>
                      <a href="#" title="">
                        Verear qualisque ex minimum...
                      </a>
                    </h3>
                  </li>
                  <li>
                    <div className="alignleft">
                      <a href="#0">
                        <img src="/img/blog-4.jpg" alt="" />
                      </a>
                    </div>
                    <small>Category - 11.08.2016</small>
                    <h3>
                      <a href="#" title="">
                        Verear qualisque ex minimum...
                      </a>
                    </h3>
                  </li>
                </ul>
              </div>
              {/* <!-- /widget --> */}
              <div className="widget">
                <div className="widget-title">
                  <h4>Categories</h4>
                </div>
                <ul className="cats">
                  <li>
                    <a href="#">
                      Food <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Places to visit <span>(21)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      New Places <span>(44)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Suggestions and guides <span>(31)</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /widget --> */}
              <div className="widget">
                <div className="widget-title">
                  <h4>Popular Tags</h4>
                </div>
                <div className="tags">
                  <a href="#">Food</a>
                  <a href="#">Bars</a>
                  <a href="#">Cooktails</a>
                  <a href="#">Shops</a>
                  <a href="#">Best Offers</a>
                  <a href="#">Transports</a>
                  <a href="#">Restaurants</a>
                </div>
              </div>
              {/* <!-- /widget --> */}
            </aside>
            {/* <!-- /aside --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </main>
    </div>
  );
};
export default BlogPost;
