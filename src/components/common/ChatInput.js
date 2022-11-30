/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const ChatInput = () => {
  return (
    <div className="position-relative">
      <div className="chat-input-section p-3 pb-4 border-top">
        <form id="chatinput-form" encType="multipart/form-data">
          <div className="row g-0 align-items-center">
            <div className="file_Upload"></div>
            <div className="col-auto">
              <div className="chat-input-links me-md-2">
                <div
                  className="links-list-item"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                  title="More"
                >
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none btn-lg waves-effect"
                    data-bs-toggle="collapse"
                    data-bs-target="#chatinputmorecollapse"
                    aria-expanded="false"
                    aria-controls="chatinputmorecollapse"
                  >
                    <i className="bx bx-dots-horizontal-rounded align-middle"></i>
                  </button>
                </div>
                <div
                  className="links-list-item"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                  title="Emoji"
                >
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn"
                    id="emoji-btn"
                  >
                    <i className="bx bx-smile align-middle"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="position-relative ">
                <div className="chat-input-feedback">
                  Please Enter a Message
                </div>
                <input
                  complete="off"
                  type="text"
                  className="form-control form-control-lg bg-input_bg border-0 chat-input"
                  autoFocus
                  id="chat-input"
                  placeholder="Type your message..."
                />
                <div className="chat-input-typing">
                  <span className="typing-user d-flex">
                    Victoria Lane is typing
                    <span className="typing ms-2">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="chat-input-links ms-2 gap-md-1">
                <div
                  className="links-list-item d-none d-sm-block"
                  data-bs-container=".chat-input-links"
                  data-bs-toggle="popover"
                  data-bs-trigger="focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  data-bs-content="<div className='loader-line'><div className='line'></div><div className='line'></div><div className='line'></div><div className='line'></div><div className='line'></div></div>"
                >
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none btn-lg waves-effect"
                    // onClick="audioPermission()"
                  >
                    <i className="bx bx-microphone align-middle"></i>
                  </button>
                </div>
                <div className="links-list-item">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg chat-send waves-effect waves-light"
                    data-bs-toggle="collapse"
                    data-bs-target=".chat-input-collapse1.show"
                  >
                    <i className="bx bxs-send align-middle" id="submit-btn"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* check down */}
      </div>
      <div className="replyCard">
        <div className="card mb-0">
          <div className="card-body py-3">
            <div className="replymessage-block mb-0 d-flex align-items-start">
              <div className="flex-grow-1">
                <h5 className="conversation-name"></h5>
                <p className="mb-0"></p>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="button"
                  id="close_toggle"
                  className="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                >
                  <i className="bx bx-x align-middle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
