import React from 'react';
import NextHead from 'next/head';

const blog = () => {
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
            <h1>kakel Blog &amp; News</h1>
          </div>
          {/* <!-- /page_header --> */}
          <div className="row">
            <div className="col-lg-9">
              <div className="widget search_blog d-block d-sm-block d-md-block d-lg-none">
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
              <div className="row">
                <div className="col-md-6">
                  <article className="blog">
                    <figure>
                      <a href="blog-post.js">
                        <img src="/img/blog-1.jpg" alt="" />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="post_info">
                      <small>Category - 20 Nov. 2017</small>
                      <h2>
                        <a href="blog-post.js">Ea exerci option hendrerit</a>
                      </h2>
                      <p>
                        Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                        enim offendit salutandi, in eos quod omnes epicurei, ex
                        veri qualisque scriptorem mei.
                      </p>
                      <ul>
                        <li>
                          <div className="thumb">
                            <img src="/img/avatar.jpg" alt="" />
                          </div>{' '}
                          Admin
                        </li>
                        <li>
                          <i className="ti-comment"></i>20
                        </li>
                      </ul>
                    </div>
                  </article>
                  {/* <!-- /article --> */}
                </div>
                {/* <!-- /col --> */}
                <div className="col-md-6">
                  <article className="blog">
                    <figure>
                      <a href="blog-post.js">
                        <img src="/img/blog-2.jpg" alt="" />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="post_info">
                      <small>Category - 20 Nov. 2017</small>
                      <h2>
                        <a href="blog-post.js">At usu sale dolorum offendit</a>
                      </h2>
                      <p>
                        Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                        enim offendit salutandi, in eos quod omnes epicurei, ex
                        veri qualisque scriptorem mei.
                      </p>
                      <ul>
                        <li>
                          <div className="thumb">
                            <img src="/img/avatar.jpg" alt="" />
                          </div>{' '}
                          Admin
                        </li>
                        <li>
                          <i className="ti-comment"></i>20
                        </li>
                      </ul>
                    </div>
                  </article>
                  {/* <!-- /article --> */}
                </div>
                {/* <!-- /col --> */}
                <div className="col-md-6">
                  <article className="blog">
                    <figure>
                      <a href="blog-post.js">
                        <img src="/img/blog-3.jpg" alt="" />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="post_info">
                      <small>Category - 20 Nov. 2017</small>
                      <h2>
                        <a href="blog-post.js">Iusto nominavi petentium in</a>
                      </h2>
                      <p>
                        Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                        enim offendit salutandi, in eos quod omnes epicurei, ex
                        veri qualisque scriptorem mei.
                      </p>
                      <ul>
                        <li>
                          <div className="thumb">
                            <img src="/img/avatar.jpg" alt="" />
                          </div>{' '}
                          Admin
                        </li>
                        <li>
                          <i className="ti-comment"></i>20
                        </li>
                      </ul>
                    </div>
                  </article>
                  {/* <!-- /article --> */}
                </div>
                {/* <!-- /col --> */}
                <div className="col-md-6">
                  <article className="blog">
                    <figure>
                      <a href="blog-post.js">
                        <img src="/img/blog-4.jpg" alt="" />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="post_info">
                      <small>Category - 20 Nov. 2017</small>
                      <h2>
                        <a href="blog-post.js">Assueverit concludaturque quo</a>
                      </h2>
                      <p>
                        Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                        enim offendit salutandi, in eos quod omnes epicurei, ex
                        veri qualisque scriptorem mei.
                      </p>
                      <ul>
                        <li>
                          <div className="thumb">
                            <img src="/img/avatar.jpg" alt="" />
                          </div>{' '}
                          Admin
                        </li>
                        <li>
                          <i className="ti-comment"></i>20
                        </li>
                      </ul>
                    </div>
                  </article>
                  {/* <!-- /article --> */}
                </div>
                {/* <!-- /col --> */}
                <div className="col-md-6">
                  <article className="blog">
                    <figure>
                      <a href="blog-post.js">
                        <img src="/img/blog-5.jpg" alt="" />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="post_info">
                      <small>Category - 20 Nov. 2017</small>
                      <h2>
                        <a href="blog-post.js">
                          Nec nihil menandri appellantur
                        </a>
                      </h2>
                      <p>
                        Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                        enim offendit salutandi, in eos quod omnes epicurei, ex
                        veri qualisque scriptorem mei.
                      </p>
                      <ul>
                        <li>
                          <div className="thumb">
                            <img src="/img/avatar.jpg" alt="" />
                          </div>{' '}
                          Admin
                        </li>
                        <li>
                          <i className="ti-comment"></i>20
                        </li>
                      </ul>
                    </div>
                  </article>
                  {/* <!-- /article --> */}
                </div>
                {/* <!-- /col --> */}
                <div className="col-md-6">
                  <article className="blog">
                    <figure>
                      <a href="blog-post.js">
                        <img src="/img/blog-6.jpg" alt="" />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="post_info">
                      <small>Category - 20 Nov. 2017</small>
                      <h2>
                        <a href="blog-post.js">
                          Te congue everti his salutandi
                        </a>
                      </h2>
                      <p>
                        Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                        enim offendit salutandi, in eos quod omnes epicurei, ex
                        veri qualisque scriptorem mei.
                      </p>
                      <ul>
                        <li>
                          <div className="thumb">
                            <img src="/img/avatar.jpg" alt="" />
                          </div>{' '}
                          Admin
                        </li>
                        <li>
                          <i className="ti-comment"></i>20
                        </li>
                      </ul>
                    </div>
                  </article>
                  {/* <!-- /article --> */}
                </div>
                {/* <!-- /col --> */}
              </div>
              {/* <!-- /row --> */}

              <div className="pagination__wrapper no_border add_bottom_30">
                <ul className="pagination">
                  <li>
                    <a href="#0" className="prev" title="previous page">
                      &#10094;
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#0">2</a>
                  </li>
                  <li>
                    <a href="#0">3</a>
                  </li>
                  <li>
                    <a href="#0">4</a>
                  </li>
                  <li>
                    <a href="#0" className="next" title="next page">
                      &#10095;
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /pagination --> */}
            </div>
            {/* <!-- /col --> */}

            <aside className="col-lg-3">
              <div className="widget search_blog d-none d-sm-none d-md-none d-lg-block">
                <div className="form-group">
                  <input
                    type="text"
                    name="search"
                    id="search_blog"
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
                        <img src="/img/blog-5.jpg" alt="" />
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

export default blog;
