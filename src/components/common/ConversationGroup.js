/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ConversationGroup = () => {
  return (
    <div id="channel-chat" className="position-relative">
      <div className="py-3 user-chat-topbar">
        <div className="row align-items-center">
          <div className="col-sm-4 col-8">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 d-block d-lg-none me-3">
                <a
                  href="javascript: void(0);"
                  className="btn-primary user-chat-remove fs-18 p-1"
                >
                  <i className="bx bx-chevron-left align-middle"></i>
                </a>
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3">
                    <img
                      src="assets/images/users/user-dummy-img.jpg"
                      className="rounded-circle avatar-sm"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <h6 className="text-truncate mb-0 fs-18">
                      <a href="#" className="user-profile-show text-reset">
                        Design Phase 2
                      </a>
                    </h6>
                    <p className="text-truncate text-muted mb-0">
                      <small>24 Members</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-4">
            <ul className="list-inline user-chat-nav text-end mb-0">
              <li className="list-inline-item">
                <div className="dropdown">
                  <button
                    className="btn nav-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-search"></i>
                  </button>
                  <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                    <div className="search-box p-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search.."
                      />
                    </div>
                  </div>
                </div>
              </li>

              <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                <button
                  type="button"
                  className="btn nav-btn"
                  data-bs-toggle="modal"
                  data-bs-target=".groupvideocallModal"
                >
                  <i className="bx bx-video"></i>
                </button>
              </li>

              <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                <button type="button" className="btn nav-btn user-profile-show">
                  <i className="bx bxs-info-circle"></i>
                </button>
              </li>

              <li className="list-inline-item">
                <div className="dropdown">
                  <button
                    className="btn nav-btn dropdown-toggle"
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
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- end chat user head --> */}

      {/* <!-- start chat conversation --> */}

      <div
        className="chat-conversation p-3 p-lg-4"
        id="chat-conversation"
        data-simplebar
      >
        <ul
          className="list-unstyled chat-conversation-list"
          id="channel-conversation"
        ></ul>
      </div>
      <div
        className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show "
        id="copyClipBoardChannel"
        role="alert"
      >
        message copied
      </div>
      {/* <!-- end chat conversation end --> */}
    </div>
  );
};

export default ConversationGroup;
