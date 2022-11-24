/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Contact = () => {
  return (
    <div
      className="modal fade contactModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="pinnedtabModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content modal-header-colored border-0">
          <div className="modal-header">
            <h5
              className="modal-title text-white fs-16"
              id="pinnedtabModalLabel"
            >
              Contacts
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search here.."
                id="searchContactModal"
                onkeyup="searchContactOnModal()"
                aria-label="Example text with button"
                aria-describedby="contactSearchbtn-addon"
              />
              <button
                className="btn btn-danger"
                type="button"
                id="contactSearchbtn-addon"
              >
                <i className="bx bx-search align-middle"></i>
              </button>
            </div>
            <div className="d-flex align-items-center px-1">
              <div className="flex-grow-1">
                <h4 className=" fs-12 text-muted text-uppercase">Contacts</h4>
              </div>
            </div>
            <div
              className="contact-modal-list px-1"
              data-simplebar
              style={{ maxHeight: "258px" }}
            >
              <div>
                <div className="contact-list-title">A</div>

                <ul className="list-unstyled contact-list mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-info rounded-circle">
                          A
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Albert Rodarte</h5>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-10.jpg"
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Allison Etter</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list A --> */}

              <div className="mt-2">
                <div className="contact-list-title">C</div>

                <ul className="list-unstyled contact-list mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-danger rounded-circle">
                          C
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Craig Smiley</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list C --> */}

              <div className="mt-2">
                <div className="contact-list-title">D</div>

                <ul className="list-unstyled contact-list mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Daniel Clay</h5>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-8.jpg"
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Doris Brown</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list D --> */}

              <div className="mt-2">
                <div className="contact-list-title">I</div>

                <ul className="list-unstyled contact-list mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-12.jpg"
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Iris Wells</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list I --> */}

              <div className="mt-2">
                <div className="contact-list-title">J</div>

                <ul className="list-unstyled contact-list mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-success rounded-circle">
                          J
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Juan Flakes</h5>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-info rounded-circle">
                          J
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">John Hall</h5>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Joy Southern</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list J --> */}

              <div className="mt-2">
                <div className="contact-list-title">M</div>

                <ul className="list-unstyled contact-list mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-primary rounded-circle">
                          M
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Mary Farmer</h5>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-dark rounded-circle">
                          M
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Mark Messer</h5>
                    </div>
                    <div></div>
                  </li>

                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-warning rounded-circle">
                          M
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Michael Hinton</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list M --> */}

              <div className="mt-2">
                <div className="contact-list-title">O</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-6.jpg"
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Ossie Wilson</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list O --> */}

              <div className="mt-2">
                <div className="contact-list-title mb-0">P</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-10.jpg"
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Phillis Griffin</h5>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-info rounded-circle">
                          P
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Paul Haynes</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list P --> */}

              <div className="mt-2">
                <div className="contact-list-title mb-0">R</div>

                <ul className="list-unstyled contact-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-success rounded-circle">
                          R
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Rocky Jackson</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list R --> */}

              <div className="mt-2">
                <div className="contact-list-title">S</div>

                <ul className="list-unstyled contact-list mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-11.jpg"
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Sara Muller</h5>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-warning rounded-circle">
                          S
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Simon Velez</h5>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-sm">
                        <div className="avatar-title bg-danger rounded-circle">
                          S
                        </div>
                      </div>
                      <h5 className="fs-14 mb-0 ms-2">Steve Walker</h5>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- end contact list S --> */}
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="javascript:void(0);"
              className="btn btn-link"
              data-bs-dismiss="modal"
            >
              <i className="ri-close-fill align-bottom"></i> Cancel
            </a>
            <button type="button" className="btn btn-primary">
              <i className="bx bxs-send align-middle"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
