/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const ChatInput = () => {
  return (
    <div class="position-relative">
      <div class="chat-input-section p-4 border-top">
        <form id="chatinput-form" enctype="multipart/form-data">
          <div class="row g-0 align-items-center">
            <div class="file_Upload"></div>
            <div class="col-auto">
              <div class="chat-input-links me-md-2">
                <div
                  class="links-list-item"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                  title="More"
                >
                  <button
                    type="button"
                    class="btn btn-link text-decoration-none btn-lg waves-effect"
                    data-bs-toggle="collapse"
                    data-bs-target="#chatinputmorecollapse"
                    aria-expanded="false"
                    aria-controls="chatinputmorecollapse"
                  >
                    <i class="bx bx-dots-horizontal-rounded align-middle"></i>
                  </button>
                </div>
                <div
                  class="links-list-item"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                  title="Emoji"
                >
                  <button
                    type="button"
                    class="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn"
                    id="emoji-btn"
                  >
                    <i class="bx bx-smile align-middle"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="position-relative">
                <div class="chat-input-feedback">Please Enter a Message</div>
                <input
                  autocomplete="off"
                  type="text"
                  class="form-control form-control-lg bg-light border-0 chat-input"
                  autofocus
                  id="chat-input"
                  placeholder="Type your message..."
                />
                <div class="chat-input-typing">
                  <span class="typing-user d-flex">
                    Victoria Lane is typing
                    <span class="typing ms-2">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <div class="chat-input-links ms-2 gap-md-1">
                <div
                  class="links-list-item d-none d-sm-block"
                  data-bs-container=".chat-input-links"
                  data-bs-toggle="popover"
                  data-bs-trigger="focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  data-bs-content="<div class='loader-line'><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div></div>"
                >
                  <button
                    type="button"
                    class="btn btn-link text-decoration-none btn-lg waves-effect"
                    onclick="audioPermission()"
                  >
                    <i class="bx bx-microphone align-middle"></i>
                  </button>
                </div>
                <div class="links-list-item">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg chat-send waves-effect waves-light"
                    data-bs-toggle="collapse"
                    data-bs-target=".chat-input-collapse1.show"
                  >
                    <i class="bx bxs-send align-middle" id="submit-btn"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div
          class="chat-input-collapse chat-input-collapse1 collapse"
          id="chatinputmorecollapse"
        >
          <div class="card mb-0">
            <div class="card-body py-3">
              {/* <!-- Swiper --> */}
              <div class="swiper chatinput-links">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="text-center px-2 position-relative">
                      <div>
                        <input
                          id="attachedfile-input"
                          type="file"
                          class="d-none"
                          accept=".zip,.rar,.7zip,.pdf"
                          multiple
                        />
                        <label
                          for="attachedfile-input"
                          class="avatar-sm mx-auto stretched-link"
                        >
                          <span class="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                            <i class="bx bx-paperclip"></i>
                          </span>
                        </label>
                      </div>
                      <h5 class="fs-11 text-uppercase mt-3 mb-0 text-body text-truncate">
                        Attached
                      </h5>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="text-center px-2">
                      <div class="avatar-sm mx-auto">
                        <div class="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                          <i class="bx bxs-camera"></i>
                        </div>
                      </div>
                      <h5 class="fs-11 text-uppercase text-truncate mt-3 mb-0">
                        <a
                          href="#"
                          class="text-body stretched-link"
                          onclick="cameraPermission()"
                        >
                          Camera
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="text-center px-2 position-relative">
                      <div>
                        <input
                          id="galleryfile-input"
                          type="file"
                          class="d-none"
                          accept="image/png, image/gif, image/jpeg"
                          multiple
                        />
                        <label
                          for="galleryfile-input"
                          class="avatar-sm mx-auto stretched-link"
                        >
                          <span class="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                            <i class="bx bx-images"></i>
                          </span>
                        </label>
                      </div>
                      <h5 class="fs-11 text-uppercase text-truncate mt-3 mb-0">
                        Gallery
                      </h5>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="text-center px-2">
                      <div>
                        <input
                          id="audiofile-input"
                          type="file"
                          class="d-none"
                          accept="audio/*"
                          multiple
                        />
                        <label
                          for="audiofile-input"
                          class="avatar-sm mx-auto stretched-link"
                        >
                          <span class="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                            <i class="bx bx-headphone"></i>
                          </span>
                        </label>
                      </div>
                      <h5 class="fs-11 text-uppercase text-truncate mt-3 mb-0">
                        Audio
                      </h5>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="text-center px-2">
                      <div class="avatar-sm mx-auto">
                        <div class="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                          <i class="bx bx-current-location"></i>
                        </div>
                      </div>

                      <h5 class="fs-11 text-uppercase text-truncate mt-3 mb-0">
                        <a
                          href="#"
                          class="text-body stretched-link"
                          onclick="getLocation()"
                        >
                          Location
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="text-center px-2">
                      <div class="avatar-sm mx-auto">
                        <div class="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                          <i class="bx bxs-user-circle"></i>
                        </div>
                      </div>
                      <h5 class="fs-11 text-uppercase text-truncate mt-3 mb-0">
                        <a
                          href="#"
                          class="text-body stretched-link"
                          data-bs-toggle="modal"
                          data-bs-target=".contactModal"
                        >
                          Contacts
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div class="swiper-slide d-block d-sm-none">
                    <div class="text-center px-2">
                      <div class="avatar-sm mx-auto">
                        <div class="avatar-title fs-18 bg-soft-primary text-primary rounded-circle">
                          <i class="bx bx-microphone"></i>
                        </div>
                      </div>
                      <h5 class="fs-11 text-uppercase text-truncate mt-3 mb-0">
                        <a href="#" class="text-body stretched-link">
                          Audio
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="replyCard">
        <div class="card mb-0">
          <div class="card-body py-3">
            <div class="replymessage-block mb-0 d-flex align-items-start">
              <div class="flex-grow-1">
                <h5 class="conversation-name"></h5>
                <p class="mb-0"></p>
              </div>
              <div class="flex-shrink-0">
                <button
                  type="button"
                  id="close_toggle"
                  class="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                >
                  <i class="bx bx-x align-middle"></i>
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
