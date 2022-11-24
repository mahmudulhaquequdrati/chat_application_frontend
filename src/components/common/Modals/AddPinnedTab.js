/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AddPinnedTab = () => {
  return (
    <div
      className="modal fade pinnedtabModal"
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
              Bookmark
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="flex-grow-1">
                <div>
                  <h5 className="fs-16 mb-0">10 Pinned tabs</h5>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div>
                  <button type="button" className="btn btn-sm btn-warning">
                    <i className="bx bx-plus align-middle"></i> Pin
                  </button>
                </div>
              </div>
            </div>
            <div
              className="chat-bookmark-list mx-n4"
              data-simplebar
              style={{ maxHeight: "299px" }}
            >
              <ul className="list-unstyled chat-list">
                <li>
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
                        <a href="#" className="p-0">
                          design-phase-1-approved.pdf
                        </a>
                      </h5>
                      <p className="text-muted fs-13 mb-0">12.5 MB</p>
                    </div>

                    <div className="flex-shrink-0 ms-3">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle fs-18 text-muted px-1"
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
                            Open{" "}
                            <i className="bx bx-folder-open ms-2 text-muted"></i>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="#"
                          >
                            Edit{" "}
                            <i className="bx bx-pencil ms-2 text-muted"></i>
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
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 ms-1 me-3">
                      <img
                        src="assets/images/link-file.png"
                        alt=""
                        className="avatar-xs"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="fs-14 text-truncate mb-1">
                        <a href="#" className="p-0">
                          Bg Pattern
                        </a>
                      </h5>
                      <p className="text-muted fs-13 mb-0">
                        https://bgpattern.com/
                      </p>
                    </div>

                    <div className="flex-shrink-0 ms-3">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle fs-18 text-muted px-1"
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
                            Open{" "}
                            <i className="bx bx-folder-open ms-2 text-muted"></i>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="#"
                          >
                            Edit{" "}
                            <i className="bx bx-pencil ms-2 text-muted"></i>
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
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 ms-1 me-3">
                      <img
                        src="assets/images/image-file.png"
                        alt=""
                        className="avatar-xs"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="fs-14 text-truncate mb-1">
                        <a href="#" className="p-0">
                          Image-001.jpg
                        </a>
                      </h5>
                      <p className="text-muted fs-13 mb-0">4.2 MB</p>
                    </div>

                    <div className="flex-shrink-0 ms-3">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle fs-18 text-muted px-1"
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
                            Open{" "}
                            <i className="bx bx-folder-open ms-2 text-muted"></i>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="#"
                          >
                            Edit{" "}
                            <i className="bx bx-pencil ms-2 text-muted"></i>
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
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 ms-1 me-3">
                      <img
                        src="assets/images/link-file.png"
                        alt=""
                        className="avatar-xs"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="fs-14 text-truncate mb-1">
                        <a href="#" className="p-0">
                          Images
                        </a>
                      </h5>
                      <p className="text-muted fs-13 mb-0">
                        https://images123.com/
                      </p>
                    </div>

                    <div className="flex-shrink-0 ms-3">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle fs-18 text-muted px-1"
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
                            Open{" "}
                            <i className="bx bx-folder-open ms-2 text-muted"></i>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="#"
                          >
                            Edit{" "}
                            <i className="bx bx-pencil ms-2 text-muted"></i>
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
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 ms-1 me-3">
                      <img
                        src="assets/images/link-file.png"
                        alt=""
                        className="avatar-xs"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="fs-14 text-truncate mb-1">
                        <a href="#" className="p-0">
                          Bg Gradient
                        </a>
                      </h5>
                      <p className="text-muted fs-13 mb-0">
                        https://bggradient.com/
                      </p>
                    </div>

                    <div className="flex-shrink-0 ms-3">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle fs-18 text-muted px-1"
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
                            Open{" "}
                            <i className="bx bx-folder-open ms-2 text-muted"></i>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="#"
                          >
                            Edit{" "}
                            <i className="bx bx-pencil ms-2 text-muted"></i>
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
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 ms-1 me-3">
                      <img
                        src="assets/images/image-file.png"
                        alt=""
                        className="avatar-xs"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="fs-14 text-truncate mb-1">
                        <a href="#" className="p-0">
                          Image-012.jpg
                        </a>
                      </h5>
                      <p className="text-muted fs-13 mb-0">3.1 MB</p>
                    </div>

                    <div className="flex-shrink-0 ms-3">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle fs-18 text-muted px-1"
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
                            Open{" "}
                            <i className="bx bx-folder-open ms-2 text-muted"></i>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="#"
                          >
                            Edit{" "}
                            <i className="bx bx-pencil ms-2 text-muted"></i>
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
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 ms-1 me-3">
                      <img
                        src="assets/images/zip-file.png"
                        alt=""
                        className="avatar-xs"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="fs-14 text-truncate mb-1">
                        <a href="#" className="p-0">
                          analytics dashboard.zip
                        </a>
                      </h5>
                      <p className="text-muted fs-13 mb-0">6.7 MB</p>
                    </div>

                    <div className="flex-shrink-0 ms-3">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle fs-18 text-muted px-1"
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
                            Open{" "}
                            <i className="bx bx-folder-open ms-2 text-muted"></i>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center justify-content-between"
                            href="#"
                          >
                            Edit{" "}
                            <i className="bx bx-pencil ms-2 text-muted"></i>
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
                </li>
              </ul>
              <div className="text-center">
                <a href="#pills-bookmark" className="link-success">
                  View All{" "}
                  <i className="ri-arrow-right-line ms-2 align-bottom"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPinnedTab;
