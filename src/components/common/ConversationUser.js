/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img1 from "../../assets/images/users/avatar-2.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
const ConversationUser = ({ inboxDataActive, setInboxDataActive }) => {
  return (
    <div id="users-chat" className="position-relative ">
      <div className="chat-topbar-bg">
        <div>
          <div className="d-flex justify-content-between align-items-center px-3 py-2 pb-0">
            <div className="d-flex align-items-center gap-1">
              {/* dot icon */}
              <GoPrimitiveDot className="text-pink" />
              <p className="mb-0">
                <span className="fw-bold">Demo</span>
                <span className="text-gray-light"> +1(660) 827 - 5555</span>
              </p>
            </div>
            {/* other icons */}
            <div className="d-flex align-items-center gap-3">
              <BiDotsVerticalRounded className=" fs-5" />
              <FeatherIcon icon="tag" className="tag_icon" size={16} />
              <AiOutlineUserAdd className="user_add fs-5" />
              <button className="border-0 bg-white  btn-sm fs-8 py-1 px-2 rounded-4">
                Assaign
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 px-4 pb-2 mt-1">
            <p className="mb-0 fw-semibold fs-5">SMS Message</p>
            <div className="d-flex align-items-center gap-1 ">
              <div className=" text-danger px-1 ms-1 tags_chat_user  rounded m-0 border border-danger d-flex align-items-center gap-1">
                <p className="m-0 ">DANIEL</p>
                <FeatherIcon icon="lock" size={10} className="mb-1" />
              </div>

              <div className=" text-danger px-1 ms-1 tags_chat_user  rounded m-0 border border-danger d-flex align-items-center gap-1">
                <p className="m-0 ">Test</p>
                <FeatherIcon icon="lock" size={10} className="d-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* user-chat-topbar at line 50 */}
      <div className="pt-2 pb-0 user-chat-topbar">
        <div className="row align-items-center ">
          <div className="col-sm-4 col-8">
            <div className="d-flex align-items-center">
              <div
                className="flex-shrink-0 d-block d-lg-none me-3"
                onClick={() => setInboxDataActive(!inboxDataActive)}
              >
                <a className="btn-primary  user-chat-remove fs-18 p-1">
                  <i className="bx bx-chevron-left align-middle text-white"></i>
                </a>
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                    <img
                      src={img1}
                      className="rounded-circle avatar-sm"
                      alt=""
                    />
                    <span className="user-status"></span>
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <h6 className="text-truncate mb-0 fs-18">
                      <a href="#" className="user-profile-show text-reset">
                        Victoria Lane
                      </a>
                    </h6>
                    <p className="text-truncate text-muted mb-0">
                      <small>Online</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-4">
            <ul className="list-inline user-chat-nav text-end mb-0 fs-6">
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
                        id="searchChatMessage"
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
                  data-bs-target=".audiocallModal"
                >
                  <i className="bx bxs-phone-call"></i>
                </button>
              </li>

              <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                <button
                  type="button"
                  className="btn nav-btn"
                  data-bs-toggle="modal"
                  data-bs-target=".videocallModal"
                >
                  <i className="bx bx-video"></i>
                </button>
              </li>

              <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                <button
                  type="button"
                  className="btn nav-btn"
                  data-bs-toggle="modal"
                  data-bs-target=".pinnedtabModal"
                >
                  <i className="bx bx-bookmark"></i>
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
        className="chat-conversation p-3 p-lg-4 "
        id="chat-conversation"
        data-simplebar
      >
        {/* <ul
          className="list-unstyled chat-conversation-list"
          id="users-conversation"
        ></ul> */}

        {/* <!-- */}
        <div className="chat-list left" id="10">
          <div className="conversation-list mb-0">
            <div className="chat-avatar">
              <img src={img1} alt="" />
            </div>
            <div className="user-chat-content">
              {/* <div className="conversation">
                <p className="chat-msg-item">Hello</p>
              </div> */}
              <div className="ctext-wrap">
                <div className="message-img mb-0">
                  <div className="message-img-list">
                    <audio controls>
                      <source
                        src="http://w3codegenerator.com/audio/audio.mp3"
                        type="audio/mpeg"
                      />
                    </audio>
                  </div>
                </div>
              </div>
              <div className="ctext-wrap">
                <div className="message-img mb-0">
                  <div className="message-img-list">
                    <div>
                      <iframe
                        src="https://www.youtube.com/embed/PHcgN1GTjdU"
                        title="YouTube video"
                        className="w-100 rounded"
                        autoPlay
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="message-img-link">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-horizontal-rounded"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item d-flex align-items-center justify-content-between"
                              href="assets/images/small/img-1.jpg"
                              download=""
                            >
                              Download{" "}
                              <i className="bx bx-download ms-2 text-muted"></i>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center justify-content-between"
                              href="#"
                              data-bs-toggle="collapse"
                              data-bs-target=".replyCollapse"
                            >
                              Reply{" "}
                              <i className="bx bx-share ms-2 text-muted"></i>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center justify-content-between"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target=".forwardModal"
                            >
                              Forward{" "}
                              <i className="bx bx-share-alt ms-2 text-muted"></i>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center justify-content-between"
                              href="#"
                            >
                              Bookmark{" "}
                              <i className="bx bx-bookmarks text-muted ms-2"></i>
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center justify-content-between delete-image"
                              href="#"
                            >
                              Delete{" "}
                              <i className="bx bx-trash ms-2 text-muted"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="conversation-name">
                <small className="text-muted time">11:45 am</small>
                <span className="text-success check-message-icon">
                  <i className="bx bx-check-double"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-list right d-flex justify-content-end" id="10">
          <div className="conversation-list mb-2">
            {/* <div className="chat-avatar">
              <img src={img1} alt="" />
            </div> */}
            <div className="user-chat-content ">
              <div className="ctext-wrap mb-2">
                <div className="message-img mb-0">
                  <div className="message-img-list conversation py-2 px-3 rounded-3">
                    <p className="chat-msg-item mb-0">Wow that's great!</p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between gap-3">
                <div className=" text-danger px-1 ms-1 tags_chat_user  rounded m-0 border border-danger d-flex align-items-center gap-1 tags_chat_user">
                  <p className="m-0 ">DANIEL</p>
                  <FeatherIcon icon="lock" size={10} className="mb-1" />
                </div>
                <div className="conversation-name">
                  <small className="text-muted time">01:45 am</small>
                  <span className="text-success check-message-icon">
                    <i className="bx bx-check-double"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show"
        id="copyClipBoard"
        role="alert"
      >
        Message copied
      </div> */}
      {/* <!-- end chat conversation end --> */}
    </div>
  );
};

export default ConversationUser;
