import React from "react";

import "./Blogs.css";

const Posts = () => {
  return (
    <section id="blog" className="section bg-dark-1">
      <div className="position-relative d-flex text-center mb-5">
        <h2 className="text-24 text-muted opacity-1 text-uppercase font-weight-600 w-100 mb-0">
          Blogs
        </h2>
        <p className="text-9 text-white font-weight-600 position-absolute w-100 align-self-center line-height-4 mb-0">
          Latest Posts
          <span className="heading-separator-line border-bottom border-3 border-primary position-abolute d-block mx-auto"></span>
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <article className="blog-figure text-white">
              <figure className="blog-figure ">
                <a
                  href="https://dev.to/vikkastiwari/getting-started-with-kubernetes-2dpp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid"
                    src="/assests/images/blog/blog-post-4.png"
                    alt=""
                  />
                </a>
                <div className="post-date">
                  <span>05</span>
                  <span>MAR</span>
                </div>
              </figure>
              <a
                href="https://dev.to/vikkastiwari/getting-started-with-kubernetes-2dpp"
                target="_blank"
                rel="noreferrer"
                className="title"
              >
                <h4 className="text-white">Getting Started With Kubernetes</h4>
              </a>
              <div className="blog-excerpt">
                <p>
                  Kubernetes has now become the de facto standard for deploying
                  containerized applications at scale in private, public, and
                  hybrid cloud environments.
                </p>
              </div>
            </article>
          </div>

          <div className="col-12 col-sm-6">
            <article>
              <figure className="blog-figure">
                <a
                  href="https://dev.to/vikkastiwari/mongodb-a-beginner-s-guide-4o8l"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid"
                    src="/assests/images/blog/blog-post-1.png"
                    alt=""
                  />
                </a>
                <div className="post-date">
                  {" "}
                  <span>07</span>
                  <span>apr</span>
                </div>
              </figure>
              <a
                href="https://dev.to/vikkastiwari/mongodb-a-beginner-s-guide-4o8l"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="text-white">MongoDB: A Beginner’s Guide</h4>
              </a>
              <div className="blog-excerpt">
                <p className="text-white">
                  MongoDB is a very impressive document store database that can
                  be used in most types of app development projects.
                </p>
              </div>
            </article>
          </div>

          <div className="col-12 col-sm-6">
            <article>
              <figure className="blog-figure">
                <a
                  href="https://medium.com/geekculture/docker-tutorial-for-beginners-8af6a4967378"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid"
                    src="/assests/images/blog/blog-post-3.png"
                    alt="docker"
                  />
                </a>
                <div className="post-date">
                  <span>28</span>
                  <span>apr</span>
                </div>
              </figure>
              <a
                href="https://medium.com/geekculture/docker-tutorial-for-beginners-8af6a4967378"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="text-white">Docker Tutorial for Beginners</h4>
              </a>
              <div className="blog-excerpt">
                <p className="text-white">
                  A platform for building, running, and shipping applications in
                  a consistent manner....
                </p>
              </div>
            </article>
          </div>

          <div className="col-12 col-sm-6">
            <article>
              <figure className="blog-figure">
                <a
                  href="https://tiwarivikas.medium.com/working-with-docker-hub-3a0ba1d7cc05"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid"
                    src="/assests/images/blog/blog-post-2.png"
                    alt=""
                  />
                </a>
                <div className="post-date">
                  {" "}
                  <span>28</span>
                  <span>apr</span>
                </div>
              </figure>
              <a
                href="https://tiwarivikas.medium.com/working-with-docker-hub-3a0ba1d7cc05"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="text-white">Working With Docker-Hub</h4>
              </a>
              <div className="blog-excerpt">
                <p className="text-white">
                  Let’s push and pull images from and on the machines ...
                </p>
              </div>
            </article>
          </div>
          {/* <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 allposts">
            <a
              href=""
              className="btn btn-outline-secondary rounded-pill shadow-none"
            >
              <span className="">
                <i className="fas fa-comments"></i>
              </span>{" "}
              All Posts
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Posts;
