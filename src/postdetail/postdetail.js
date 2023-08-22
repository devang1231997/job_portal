function Postdetail() {
  return (
    <>
      <div className="container-fluid">
        <div className="page-titles">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="javascript:void(0)">App</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="javascript:void(0)">Profile</a>
            </li>
          </ol>
        </div>
        {/* <!-- row --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="profile card card-body px-3 pt-3 pb-0">
              <div className="profile-head">
                <div className="photo-content">
                  <div className="cover-photo"></div>
                </div>
                <div className="profile-info">
                  <div className="profile-photo">
                    {/* <img src="public/images/profile/profile.png" className="img-fluid rounded-circle" alt=""/> */}
                    <img
                      src={require("./images/profile/profile.png")}
                      className="img-fluid rounded-circle"
                    ></img>
                  </div>
                  <div className="profile-details">
                    <div className="profile-name px-3 pt-2">
                      <h4 className="text-primary mb-0">Mitchell C. Shay</h4>
                      <p>UX / UI Designer</p>
                    </div>
                    <div className="profile-email px-2 pt-2">
                      <h4 className="text-muted mb-0">hello@email.com</h4>
                      <p>Email</p>
                    </div>
                    <div className="dropdown ms-auto">
                      {/* <a href="#" className="btn btn-primary light sharp" data-bs-toggle="dropdown" aria-expanded="true"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg></a> */}
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li className="dropdown-item">
                          <i className="fa fa-user-circle text-primary me-2"></i>{" "}
                          View profile
                        </li>
                        <li className="dropdown-item">
                          <i className="fa fa-users text-primary me-2"></i> Add
                          to close friends
                        </li>
                        <li className="dropdown-item">
                          <i className="fa fa-plus text-primary me-2"></i> Add
                          to group
                        </li>
                        <li className="dropdown-item">
                          <i className="fa fa-ban text-primary me-2"></i> Block
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <div className="profile-statistics mb-5">
                  <div className="text-center">
                    <div className="row">
                      <div className="col">
                        <h3 className="m-b-0">150</h3>
                        <span>Follower</span>
                      </div>
                      <div className="col">
                        <h3 className="m-b-0">140</h3>
                        <span>Place Stay</span>
                      </div>
                      <div className="col">
                        <h3 className="m-b-0">45</h3>
                        <span>Reviews</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-primary mb-1 me-1"
                      >
                        Follow
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-primary mb-1"
                        data-bs-toggle="modal"
                        data-target="#sendMessageModal"
                      >
                        Send Message
                      </a>
                    </div>
                  </div>
                  {/* <!-- Modal --> */}
                  <div className="modal fade" id="sendMessageModal">
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Send Message</h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                          >
                            <span>&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form className="comment-form">
                            <input
                              type="hidden"
                              name="_token"
                              value="ofzBOpner7w7kkAbDdywER22eRVO9z5A4eBOr0Bq"
                            />{" "}
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label
                                    for="author"
                                    className="text-black font-w600"
                                  >
                                    Name <span className="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="Author"
                                    name="Author"
                                    placeholder="Author"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label
                                    for="email"
                                    className="text-black font-w600"
                                  >
                                    Email <span className="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="Email"
                                    placeholder="Email"
                                    name="Email"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label
                                    for="comment"
                                    className="text-black font-w600"
                                  >
                                    Comment
                                  </label>
                                  <textarea
                                    rows="8"
                                    className="form-control"
                                    name="comment"
                                    placeholder="Comment"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    value="Post Comment"
                                    className="submit btn btn-primary"
                                    name="submit"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-blog mb-5">
                  <h5 className="text-primary d-inline">Today Highlights</h5>
                  {/* <img src="public/images/profile/1.jpg" alt="" className="img-fluid mt-4 mb-4 w-100"/> */}
                  <img
                    src={require("./images/profile/1.jpg")}
                    className="img-fluid mt-4 mb-4 w-100"
                  ></img>

                  <h4>
                    <a href="post-details.html" className="text-black">
                      Darwin Creative Agency Theme
                    </a>
                  </h4>
                  <p className="mb-0">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
                <div className="profile-interest mb-5">
                  <h5 className="text-primary d-inline">Interest</h5>
                  <div className="row mt-4 sp4" id="lightgallery">
                    <a
                      href="public/images/profile/2.jpg"
                      data-exthumbimage="https://jobie.dexignzone.com/laravel/demo/images/profile/2.jpg"
                      data-src="https://jobie.dexignzone.com/laravel/demo/images/profile/2.jpg"
                      className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6"
                    >
                      {/* <img src="public/images/profile/2.jpg" alt="" className="img-fluid"/> */}
                      <img
                        src={require("./images/profile/2.jpg")}
                        className="img-fluid"
                      ></img>
                    </a>
                    <a
                      href="public/images/profile/3.jpg"
                      data-exthumbimage="https://jobie.dexignzone.com/laravel/demo/images/profile/3.jpg"
                      data-src="https://jobie.dexignzone.com/laravel/demo/images/profile/3.jpg"
                      className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6"
                    >
                      {/* <img src="public/images/profile/3.jpg" alt="" className="img-fluid"/> */}
                      <img
                        src={require("./images/profile/3.jpg")}
                        className="img-fluid"
                      ></img>
                    </a>
                    <a
                      href="public/images/profile/4.jpg"
                      data-exthumbimage="https://jobie.dexignzone.com/laravel/demo/images/profile/4.jpg"
                      data-src="https://jobie.dexignzone.com/laravel/demo/images/profile/4.jpg"
                      className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6"
                    >
                      {/* <img src="public/images/profile/4.jpg" alt="" className="img-fluid"/> */}
                      <img
                        src={require("./images/profile/4.jpg")}
                        className="img-fluid"
                      ></img>
                    </a>
                    <a
                      href="public/images/profile/3.jpg"
                      data-exthumbimage="https://jobie.dexignzone.com/laravel/demo/images/profile/3.jpg"
                      data-src="https://jobie.dexignzone.com/laravel/demo/images/profile/3.jpg"
                      className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6"
                    >
                      {/* <img src="public/images/profile/3.jpg" alt="" className="img-fluid"/> */}
                      <img
                        src={require("./images/profile/3.jpg")}
                        className="img-fluid"
                      ></img>
                    </a>
                    <a
                      href="public/images/profile/4.jpg"
                      data-exthumbimage="https://jobie.dexignzone.com/laravel/demo/images/profile/4.jpg"
                      data-src="https://jobie.dexignzone.com/laravel/demo/images/profile/4.jpg"
                      className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6"
                    >
                      {/* <img src="public/images/profile/4.jpg" alt="" className="img-fluid"/> */}
                      <img
                        src={require("./images/profile/4.jpg")}
                        className="img-fluid"
                      ></img>
                    </a>
                    <a
                      href="public/images/profile/2.jpg"
                      data-exthumbimage="https://jobie.dexignzone.com/laravel/demo/images/profile/2.jpg"
                      data-src="https://jobie.dexignzone.com/laravel/demo/images/profile/2.jpg"
                      className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6"
                    >
                      {/* <img src="public/images/profile/2.jpg" alt="" className="img-fluid"/> */}
                      <img
                        src={require("./images/profile/2.jpg")}
                        className="img-fluid"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="profile-news">
                  <h5 className="text-primary d-inline">Our Latest News</h5>
                  <div className="media pt-3 pb-3">
                    {/* <img src="public/images/profile/5.jpg" alt="image" className="me-3 rounded" width="75"/> */}
                    <img
                      src={require("./images/profile/5.jpg")}
                      className="me-3 rounded"
                      width="75"
                    ></img>

                    <div className="media-body">
                      <h5 className="m-b-5">
                        <a href="post-details.html" className="text-black">
                          Collection of textile samples
                        </a>
                      </h5>
                      <p className="mb-0">
                        I shared this on my fb wall a few months back, and I
                        thought.
                      </p>
                    </div>
                  </div>
                  <div className="media pt-3 pb-3">
                    {/* <img
                      src="public/images/profile/6.jpg"
                      alt="image"
                      className="me-3 rounded"
                      width="75"
                    /> */}
                    <img
                      src={require("./images/profile/6.jpg")}
                      className="me-3 rounded"
                      width="75"
                    ></img>
                    <div className="media-body">
                      <h5 className="m-b-5">
                        <a href="post-details.html" className="text-black">
                          Collection of textile samples
                        </a>
                      </h5>
                      <p className="mb-0">
                        I shared this on my fb wall a few months back, and I
                        thought.
                      </p>
                    </div>
                  </div>
                  <div className="media pt-3 pb-3">
                    {/* <img
                      src="public/images/profile/7.jpg"
                      alt="image"
                      className="me-3 rounded"
                      width="75"
                    /> */}
                     <img
                      src={require("./images/profile/7.jpg")}
                      className="me-3 rounded"
                      width="75"
                    ></img>
                    <div className="media-body">
                      <h5 className="m-b-5">
                        <a href="post-details.html" className="text-black">
                          Collection of textile samples
                        </a>
                      </h5>
                      <p className="mb-0">
                        I shared this on my fb wall a few months back, and I
                        thought.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <div className="post-details">
                  <h3 className="mb-2 text-black">
                    Collection of textile samples lay spread
                  </h3>
                  <ul className="mb-4 post-meta">
                    <li className="post-author">By Admin</li>
                    <li className="post-date">
                      <i className="fa fa-calender"></i>18 Nov 2020
                    </li>
                    <li className="post-comment">
                      <i className="fa fa-comments-o"></i> 28
                    </li>
                  </ul>
                  <img
                    src="public/images/profile/8.jpg"
                    alt=""
                    className="img-fluid mb-3"
                  />
                  <p>
                    A wonderful serenity has take possession of my entire soul
                    like these sweet morning of spare which enjoy whole heart.A
                    wonderful serenity has take possession of my entire soul
                    like these sweet morning of spare which enjoy whole heart.
                  </p>
                  <p>
                    A collection of textile samples lay spread out on the table
                    - Samsa was a travelling salesman - and above it there hung
                    a picture that he had recently cut out of an illustrated
                    magazine and housed in a nice, gilded frame.
                  </p>
                  <blockquote>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Has been the industry's standard text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimencenturies.
                  </blockquote>
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence was
                    created for the bliss of souls like mine.I am so happy, my
                    dear friend, so absorbed in the exquisite sense of mere
                    tranquil existence, that I neglect my talents.
                  </p>
                  <div className="profile-skills mt-5 mb-5">
                    <h4 className="text-primary mb-2">Skills</h4>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary light btn-xs mb-1"
                    >
                      Admin
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary light btn-xs mb-1"
                    >
                      Dashboard
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary light btn-xs mb-1"
                    >
                      Photoshop
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary light btn-xs mb-1"
                    >
                      Bootstrap
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary light btn-xs mb-1"
                    >
                      Responsive
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary light btn-xs mb-1"
                    >
                      Crypto
                    </a>
                  </div>
                  <div className="comment-respond" id="respond">
                    <h4
                      className="comment-reply-title text-primary mb-3"
                      id="reply-title"
                    >
                      Leave a Reply{" "}
                    </h4>
                    <form
                      className="comment-form"
                      id="commentform"
                      method="post"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="ofzBOpner7w7kkAbDdywER22eRVO9z5A4eBOr0Bq"
                      />{" "}
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              for="author"
                              className="text-black font-w600"
                            >
                              Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value="Author"
                              name="Author"
                              placeholder="Author"
                              id="author"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label for="email" className="text-black font-w600">
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value="Email"
                              placeholder="Email"
                              name="Email"
                              id="email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label
                              for="comment"
                              className="text-black font-w600"
                            >
                              Comment
                            </label>
                            <textarea
                              rows="8"
                              className="form-control"
                              name="comment"
                              placeholder="Comment"
                              id="comment"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Post Comment"
                              className="submit btn btn-primary"
                              id="submit"
                              name="submit"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postdetail;
