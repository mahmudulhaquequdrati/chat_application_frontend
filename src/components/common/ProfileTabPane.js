/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ProfileTabPane = () => {
  return (
    <div>
      <div className="user-profile-img">
        <img
          src="assets/images/4902908.jpg"
          className="profile-img"
          style={{ height: "160px" }}
          alt=""
        />
        <div className="overlay-content">
          <div>
            <div className="user-chat-nav p-2 ps-3">
              <div className="d-flex w-100 align-items-center">
                <div className="flex-grow-1">
                  <h5 className="text-white mb-0">My Profile</h5>
                </div>
                <div className="flex-shrink-0">
                  <div className="dropdown">
                    <button
                      className="btn nav-btn text-white dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        Info{" "}
                        <i className="bx bx-info-circle ms-2 text-muted"></i>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        Setting <i className="bx bx-cog text-muted ms-2"></i>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        Help{" "}
                        <i className="bx bx-help-circle ms-2 text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center border-bottom border-bottom-dashed pt-2 pb-4 mt-n5 position-relative">
        <div className="mb-lg-3 mb-2">
          <img
            src="assets/images/users/avatar-1.jpg"
            className="rounded-circle avatar-lg img-thumbnail"
            alt=""
          />
        </div>

        <h5 className="fs-17 mb-1 text-truncate">Dushane Daniel</h5>
        <p className="text-muted fs-14 text-truncate mb-0">
          Front end Developer
        </p>
      </div>
      {/* <!-- End profile user --> */}

      {/* <!-- Start user-profile-desc --> */}
      <div className="p-4 profile-desc" data-simplebar>
        <div className="text-muted">
          <p className="mb-3">
            A professional profile is an introductory section on your resume
            that highlights your relevant qualifications and skills.
          </p>
        </div>

        <div className="border-bottom border-bottom-dashed mb-4 pb-2">
          <div className="d-flex py-2 align-items-center">
            <div className="flex-shrink-0 me-3">
              <i className="bx bx-user align-middle text-muted fs-19"></i>
            </div>
            <div className="flex-grow-1">
              <p className="mb-0">Dushane Daniel</p>
            </div>
          </div>

          <div className="d-flex py-2 align-items-center">
            <div className="flex-shrink-0 me-3">
              <i className="ri-phone-line align-middle text-muted fs-19"></i>
            </div>
            <div className="flex-grow-1">
              <p className="mb-0">+(365) 1456 12584</p>
            </div>
          </div>

          <div className="d-flex py-2 align-items-center">
            <div className="flex-shrink-0 me-3">
              <i className="ri-message-2-line align-middle text-muted fs-19"></i>
            </div>
            <div className="flex-grow-1">
              <p className="fw-medium mb-0">dushanedaniel@gmail.com</p>
            </div>
          </div>

          <div className="d-flex py-2 align-items-center">
            <div className="flex-shrink-0 me-3">
              <i className="ri-map-pin-2-line align-middle text-muted fs-19"></i>
            </div>
            <div className="flex-grow-1">
              <p className="mb-0">California, USA</p>
            </div>
          </div>
        </div>

        <div className="border-bottom border-bottom-dashed mb-4 pb-4">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-grow-1">
              <h5 className="fs-12 text-muted text-uppercase mb-0">Media</h5>
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="fw-medium fs-12 d-block">
                Show all
              </a>
            </div>
          </div>
          <div className="profile-media-img">
            <div className="media-img-list">
              <a href="#">
                <img
                  src="assets/images/small/img-1.jpg"
                  alt="media img"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="media-img-list">
              <a href="#">
                <img
                  src="assets/images/small/img-2.jpg"
                  alt="media img"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="media-img-list">
              <a href="#">
                <img
                  src="assets/images/small/img-4.jpg"
                  alt="media img"
                  className="img-fluid"
                />
                <div className="bg-overlay">+ 15</div>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex align-items-center mb-3">
            <div className="flex-grow-1">
              <h5 className="fs-12 text-muted text-uppercase mb-0">
                Attached Files
              </h5>
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="fw-medium fs-12 d-block">
                Show all
              </a>
            </div>
          </div>
          <div>
            <div className="card p-2 border border-dashed mb-2">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 ms-1 me-3">
                  <img
                    src="assets/images/pdf-file.png"
                    alt=""
                    className="avatar-xs"
                  />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="fs-14 text-truncate mb-1">
                    design-phase-1-approved.pdf
                  </h5>
                  <p className="text-muted fs-13 mb-0">12.5 MB</p>
                </div>

                <div className="flex-shrink-0 ms-3">
                  <div className="d-flex gap-2">
                    <div>
                      <a href="#" className="text-muted px-1">
                        <i className="bx bxs-download"></i>
                      </a>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-muted px-1"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Share{" "}
                          <i className="bx bx-share-alt ms-2 text-muted"></i>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Bookmark{" "}
                          <i className="bx bx-bookmarks text-muted ms-2"></i>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Delete <i className="bx bx-trash ms-2 text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-2 border border-dashed mb-2">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 ms-1 me-3">
                  <img
                    src="assets/images/image-file.png"
                    alt=""
                    className="avatar-xs"
                  />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="fs-14 text-truncate mb-1">Image-1.jpg</h5>
                  <p className="text-muted fs-13 mb-0">4.2 MB</p>
                </div>

                <div className="flex-shrink-0 ms-3">
                  <div className="d-flex gap-2">
                    <div>
                      <a href="#" className="text-muted px-1">
                        <i className="bx bxs-download"></i>
                      </a>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-muted px-1"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Share{" "}
                          <i className="bx bx-share-alt ms-2 text-muted"></i>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Bookmark{" "}
                          <i className="bx bx-bookmarks text-muted ms-2"></i>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Delete <i className="bx bx-trash ms-2 text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-2 border border-dashed mb-2">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 ms-1 me-3">
                  <img
                    src="assets/images/image-file.png"
                    alt=""
                    className="avatar-xs"
                  />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="fs-14 text-truncate mb-1">Image-2.jpg</h5>
                  <p className="text-muted fs-13 mb-0">3.1 MB</p>
                </div>

                <div className="flex-shrink-0 ms-3">
                  <div className="d-flex gap-2">
                    <div>
                      <a href="#" className="text-muted px-1">
                        <i className="bx bxs-download"></i>
                      </a>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-muted px-1"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Share{" "}
                          <i className="bx bx-share-alt ms-2 text-muted"></i>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Bookmark{" "}
                          <i className="bx bx-bookmarks text-muted ms-2"></i>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Delete <i className="bx bx-trash ms-2 text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-2 border border-dashed mb-0">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 ms-1 me-3">
                  <img
                    src="assets/images/zip-file.png"
                    alt=""
                    className="avatar-xs"
                  />
                </div>
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="fs-14 text-truncate mb-1">Landing-A.zip</h5>
                  <p className="text-muted fs-13 mb-0">6.7 MB</p>
                </div>

                <div className="flex-shrink-0 ms-3">
                  <div className="d-flex gap-2">
                    <div>
                      <a href="#" className="text-muted px-1">
                        <i className="bx bxs-download"></i>
                      </a>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle text-muted px-1"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-horizontal-rounded"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Share{" "}
                          <i className="bx bx-share-alt ms-2 text-muted"></i>
                        </a>
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Bookmark{" "}
                          <i className="bx bx-bookmarks text-muted ms-2"></i>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a
                          className="dropdown-item d-flex align-items-center justify-content-between"
                          href="#"
                        >
                          Delete <i className="bx bx-trash ms-2 text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end user-profile-desc --> */}
    </div>
  );
};

export default ProfileTabPane;
