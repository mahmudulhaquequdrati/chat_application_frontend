/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const UserProfileDetails = () => {
  return (
    <div className="user-profile-sidebar">
      <div className="p-3 border-bottom">
        <div className="user-profile-img">
          <img
            src="assets/images/users/avatar-2.jpg"
            className="profile-img rounded"
            alt=""
          />
          <div className="overlay-content rounded">
            <div className="user-chat-nav p-2">
              <div className="d-flex w-100">
                <div className="flex-grow-1">
                  <button
                    type="button"
                    className="btn nav-btn text-white user-profile-show d-none d-lg-block"
                  >
                    <i className="bx bx-x"></i>
                  </button>
                  <button
                    type="button"
                    className="btn nav-btn text-white user-profile-show d-block d-lg-none"
                  >
                    <i className="bx bx-left-arrow-alt"></i>
                  </button>
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
                        className="dropdown-item d-flex justify-content-between align-items-center d-lg-none user-profile-show"
                        href="#"
                      >
                        View Profile <i className="bx bx-user text-muted"></i>
                      </a>
                      <a
                        className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target=".audiocallModal"
                      >
                        Audio <i className="bx bxs-phone-call text-muted"></i>
                      </a>
                      <a
                        className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target=".videocallModal"
                      >
                        Video <i className="bx bx-video text-muted"></i>
                      </a>
                      <a
                        className="dropdown-item d-flex justify-content-between align-items-center"
                        href="#"
                      >
                        Archive <i className="bx bx-archive text-muted"></i>
                      </a>
                      <a
                        className="dropdown-item d-flex justify-content-between align-items-center"
                        href="#"
                      >
                        Muted{" "}
                        <i className="bx bx-microphone-off text-muted"></i>
                      </a>
                      <a
                        className="dropdown-item d-flex justify-content-between align-items-center"
                        href="#"
                      >
                        Delete <i className="bx bx-trash text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto p-3">
              <h5 className="user-name mb-0 text-truncate">Victoria Lane</h5>
              <p className="fs-14 text-truncate user-profile-status mt-1 mb-0">
                <i className="bx bxs-circle fs-10 text-success me-1 ms-0"></i>{" "}
                Online
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End profile user --> */}

      {/* <!-- Start user-profile-desc --> */}
      <div className="p-4 user-profile-desc" data-simplebar>
        <div className="text-center border-bottom border-bottom-dashed">
          <div className="d-flex gap-2 justify-content-center mb-4">
            <button type="button" className="btn avatar-sm p-0">
              <span className="avatar-title rounded bg-soft-info text-info">
                <i className="bx bxs-message-alt-detail"></i>
              </span>
            </button>
            <button type="button" className="btn avatar-sm p-0 favourite-btn">
              <span className="avatar-title rounded bg-soft-danger text-body">
                <i className="bx bx-heart"></i>
              </span>
            </button>
            <button
              type="button"
              className="btn avatar-sm p-0"
              data-bs-toggle="modal"
              data-bs-target=".audiocallModal"
            >
              <span className="avatar-title rounded bg-soft-success text-success">
                <i className="bx bxs-phone-call"></i>
              </span>
            </button>
            <button
              type="button"
              className="btn avatar-sm p-0"
              data-bs-toggle="modal"
              data-bs-target=".videocallModal"
            >
              <span className="avatar-title rounded bg-soft-warning text-warning">
                <i className="bx bx-video"></i>
              </span>
            </button>
            <div className="dropdown">
              <button
                className="btn avatar-sm p-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="avatar-title bg-soft-primary text-primary rounded">
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </span>
              </button>

              <div className="dropdown-menu dropdown-menu-end">
                <a
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  href="#"
                >
                  Archive <i className="bx bx-archive text-muted"></i>
                </a>
                <a
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  href="#"
                >
                  Muted <i className="bx bx-microphone-off text-muted"></i>
                </a>
                <a
                  className="dropdown-item d-flex justify-content-between align-items-center"
                  href="#"
                >
                  Delete <i className="bx bx-trash text-muted"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-muted pt-4">
          <h5 className="fs-12 text-muted text-uppercase">Status :</h5>
          <p className="mb-4">
            A professional profile is a brief summary of your skills, strengths,
            and key experiences.
          </p>
        </div>

        <div className="pb-4 border-bottom border-bottom-dashed mb-4">
          <h5 className="fs-12 text-muted text-uppercase mb-2">Info :</h5>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="ri-user-line align-middle fs-15 text-muted"></i>
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="fs-14 text-truncate mb-0">Victoria Lane</h5>
            </div>
          </div>

          <div className="d-flex align-items-center mt-3">
            <div className="flex-shrink-0">
              <i className="ri-mail-line align-middle fs-15 text-muted"></i>
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="fs-14 text-truncate mb-0">bellacote@vhato.com</h5>
            </div>
          </div>

          <div className="d-flex align-items-center mt-3">
            <div className="flex-shrink-0">
              <i className="ri-phone-line align-middle fs-15 text-muted"></i>
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="fs-14 text-truncate mb-0">+(345) 3216 48751</h5>
            </div>
          </div>

          <div className="d-flex align-items-center mt-3">
            <div className="flex-shrink-0">
              <i className="ri-mail-line align-middle fs-15 text-muted"></i>
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="fs-14 text-truncate mb-0">California, USA</h5>
            </div>
          </div>
        </div>

        <div className="pb-4 border-bottom border-bottom-dashed mb-4">
          <div className="d-flex">
            <div className="flex-grow-1">
              <h5 className="fs-12 text-muted text-uppercase">
                Group in common
              </h5>
            </div>
          </div>

          <ul className="list-unstyled chat-list mx-n4">
            <li>
              <a href="javascript: void(0);">
                <div className="d-flex align-items-center">
                  <img
                    src="assets/images/users/group-img.jpg"
                    alt=""
                    className="avatar-sm rounded-circle me-3"
                  />
                  <div className="flex-grow-1 overflow-hidden">
                    <h6 className="text-truncate mb-0">Landing Design</h6>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript: void(0);">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 avatar-sm me-3">
                    <span className="avatar-title rounded-circle bg-light text-dark">
                      SM
                    </span>
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <h6 className="text-truncate mb-0">Sales & Marketing</h6>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="pb-4 border-bottom border-bottom-dashed mb-4">
          <div className="d-flex align-items-center mb-3">
            <div className="flex-grow-1">
              <h5 className="fs-12 text-muted text-uppercase mb-0">
                Shared Images
              </h5>
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="fs-12 fw-medium d-block">
                Show all
              </a>
            </div>
          </div>
          <div className="profile-media-img">
            <div className="row g-1">
              <div className="col-lg-4 col-6">
                <a href="#">
                  <img
                    src="assets/images/small/img-1.jpg"
                    alt="media img"
                    className="img-fluid rounded"
                  />
                </a>
              </div>
              <div className="col-lg-4 col-6">
                <a href="#">
                  <img
                    src="assets/images/small/img-2.jpg"
                    alt="media img"
                    className="img-fluid rounded"
                  />
                </a>
              </div>
              <div className="col-lg-4 col-6">
                <a href="#">
                  <img
                    src="assets/images/small/img-3.jpg"
                    alt="media img"
                    className="img-fluid rounded"
                  />
                </a>
              </div>
              <div className="col-lg-4 col-6">
                <a href="#">
                  <img
                    src="assets/images/small/img-4.jpg"
                    alt="media img"
                    className="img-fluid rounded"
                  />
                </a>
              </div>
              <div className="col-lg-4 col-6">
                <a href="#">
                  <img
                    src="assets/images/small/img-5.jpg"
                    alt="media img"
                    className="img-fluid rounded"
                  />
                </a>
              </div>
              <div className="col-lg-4 col-6">
                <div className="position-relative rounded overflow-hidden">
                  <a href="javascript:void(0);" className="d-block">
                    <img
                      src="assets/images/small/img-6.jpg"
                      alt="media img"
                      className="img-fluid rounded"
                    />

                    <div className="bg-overlay"></div>
                    <div className="position-absolute top-50 start-50 text-white translate-middle fs-16">
                      +10
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h5 className="fs-11 text-muted text-uppercase mb-3">
              Attached Files
            </h5>
          </div>

          <div>
            <div className="card mb-2 border border-dashed">
              <div className="card-body p-2">
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
                            Delete{" "}
                            <i className="bx bx-trash ms-2 text-muted"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border border-dashed mb-2">
              <div className="card-body p-2">
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
                            Delete{" "}
                            <i className="bx bx-trash ms-2 text-muted"></i>
                          </a>
                        </div>
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

export default UserProfileDetails;
