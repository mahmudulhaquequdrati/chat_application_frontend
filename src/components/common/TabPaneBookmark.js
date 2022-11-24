/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const TabPaneBookmark = () => {
  return (
    <div>
      <div className="px-4 pt-4">
        <div className="d-flex align-items-start">
          <div className="flex-grow-1">
            <h4 className="mb-3">Bookmark</h4>
          </div>
        </div>
        <form>
          <div className="input-group search-panel mb-3">
            <input
              type="text"
              className="form-control bg-light border-0"
              id="searchbookmark"
              onkeyup="searchBookmark()"
              placeholder="Search here..."
              aria-label="Example text with button addon"
              aria-describedby="searchbookmark-addon"
              autocomplete="off"
            />
            <button
              className="btn btn-light p-0"
              type="button"
              id="searchbookmark-addon"
            >
              <i className="bx bx-search align-middle"></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- end p-4 --> */}

      {/* <!-- Start contact lists --> */}
      <div
        className="chat-message-list chat-bookmark-list"
        id="chat-bookmark-list"
        data-simplebar
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    design-phase-1-approved.pdf
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">12.5 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Bg Pattern
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Image-001.jpg
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">4.2 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Images
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Bg Gradient
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Image-012.jpg
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">3.1 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    analytics dashboard.zip
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">6.7 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Image-031.jpg
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">4.2 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
          </li>
          <li>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 ms-1 me-3">
                <img
                  src="assets/images/txt-file.png"
                  alt=""
                  className="avatar-xs"
                />
              </div>
              <div className="flex-grow-1 overflow-hidden">
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Changelog.txt
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">6.7 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Widgets.zip
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">6.7 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    logo-light.png
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">4.2 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Image-2.jpg
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">3.1 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
                <h5 className="fs-14 mb-1">
                  <a href="#" className="text-truncate p-0">
                    Landing-A.zip
                  </a>
                </h5>
                <p className="text-muted text-truncate fs-13 mb-0">6.7 MB</p>
              </div>

              <div className="flex-shrink-0 ms-3">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle fs-16 text-muted px-1"
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
                      Open
                      <i className="bx bx-folder-open ms-2 text-muted"></i>
                    </a>
                    <a
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                    >
                      Edit
                      <i className="bx bx-pencil ms-2 text-muted"></i>
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
          </li>
        </ul>
      </div>
      {/* <!-- end contact lists --> */}
    </div>
  );
};

export default TabPaneBookmark;
