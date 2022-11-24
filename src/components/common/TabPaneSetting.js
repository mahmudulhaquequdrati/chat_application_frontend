/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const TabPaneSetting = () => {
  return (
    <div>
      <div className="user-profile-img">
        <img
          src="assets/images/small/img-4.jpg"
          className="profile-img profile-foreground-img"
          style={{ height: "160px" }}
          alt=""
        />
        <div className="overlay-content">
          <div>
            <div className="user-chat-nav p-3">
              <div className="d-flex w-100 align-items-center">
                <div className="flex-grow-1">
                  <h5 className="text-white mb-0">Settings</h5>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className="avatar-xs p-0 rounded-circle profile-photo-edit"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-placement="bottom"
                    title="Change Background"
                  >
                    <input
                      id="profile-foreground-img-file-input"
                      type="file"
                      className="profile-foreground-img-file-input"
                    />
                    <label
                      for="profile-foreground-img-file-input"
                      className="profile-photo-edit avatar-xs"
                    >
                      <span className="avatar-title rounded-circle bg-light text-body">
                        <i className="bx bxs-pencil"></i>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
        <div className="mb-3 profile-user">
          <img
            src="assets/images/users/avatar-1.jpg"
            className="rounded-circle avatar-lg img-thumbnail user-profile-image"
            alt="user-profile-image"
          />
          <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
            <input
              id="profile-img-file-input"
              type="file"
              className="profile-img-file-input"
            />
            <label
              for="profile-img-file-input"
              className="profile-photo-edit avatar-xs"
            >
              <span className="avatar-title rounded-circle bg-light text-body">
                <i className="bx bxs-camera"></i>
              </span>
            </label>
          </div>
        </div>

        <h5 className="fs-16 mb-1 text-truncate"></h5>

        <div className="dropdown d-inline-block">
          <a
            className="text-muted dropdown-toggle d-block"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bx bxs-circle text-success fs-10 align-middle"></i>{" "}
            Active <i className="mdi mdi-chevron-down"></i>
          </a>

          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              <i className="bx bxs-circle text-success fs-10 me-1 align-middle"></i>
              Active
            </a>
            <a className="dropdown-item" href="#">
              <i className="bx bxs-circle text-warning fs-10 me-1 align-middle"></i>
              Away
            </a>
            <a className="dropdown-item" href="#">
              <i className="bx bxs-circle text-danger fs-10 me-1 align-middle"></i>{" "}
              Do not disturb
            </a>
          </div>
        </div>
      </div>
      {/* <!-- End profile user --> */}

      {/* <!-- Start User profile description --> */}
      <div className="user-setting" data-simplebar>
        <div id="settingprofile" className="accordion accordion-flush">
          <div className="accordion-item">
            <div className="accordion-header" id="headerpersonalinfo">
              <a
                className="accordion-button fs-14 fw-medium"
                data-bs-toggle="collapse"
                href="#personalinfo"
                aria-expanded="true"
                aria-controls="personalinfo"
              >
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-3 avatar-xs">
                    <div className="avatar-title bg-soft-info text-info rounded">
                      <i className="bx bxs-user"></i>
                    </div>
                  </div>
                  Personal Info
                </div>
              </a>
            </div>
            <div
              id="personalinfo"
              className="accordion-collapse collapse show"
              aria-labelledby="headerpersonalinfo"
              data-bs-parent="#settingprofile"
            >
              <div className="accordion-body edit-input">
                <div className="float-end">
                  <a
                    href="#"
                    className="badge bg-light text-muted"
                    id="user-profile-edit-btn"
                  >
                    {" "}
                    <i
                      className="bx bxs-pencil align-middle"
                      id="edit-icon"
                    ></i>
                  </a>
                </div>

                <div>
                  <label
                    for="exampleInputPassword1"
                    className="form-label text-muted fs-13"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value="Dushane Daniel"
                    placeholder="Enter name"
                    disabled
                  />
                </div>

                <div>
                  <label
                    for="exampleInputPassword1"
                    className="form-label text-muted fs-13"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    value="dashanedaniel@vhato.com"
                    placeholder="Enter email"
                    disabled
                  />
                </div>

                <div className="mt-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label text-muted fs-13"
                  >
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value="+(245) 4577 14523"
                    placeholder="Enter phone no"
                    disabled
                  />
                </div>

                <div className="mt-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label text-muted fs-13"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value="California, USA"
                    placeholder="Location"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end personal info card --> */}

          <div className="accordion-item">
            <div className="accordion-header" id="privacy1">
              <a
                className="accordion-button fs-14 fw-medium collapsed"
                data-bs-toggle="collapse"
                href="#privacy"
                aria-expanded="false"
                aria-controls="privacy"
              >
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-3 avatar-xs">
                    <div className="avatar-title bg-soft-info text-info rounded">
                      <i className="bx bxs-lock"></i>
                    </div>
                  </div>
                  Privacy
                </div>
              </a>
            </div>
            <div
              id="privacy"
              className="accordion-collapse collapse"
              aria-labelledby="privacy1"
              data-bs-parent="#settingprofile"
            >
              <div className="accordion-body">
                <h6 className="mb-3">Who can see my personal info</h6>
                <ul className="list-unstyled vstack gap-4 mb-0">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="fs-13 mb-0 text-truncate">
                          Profile photo
                        </h5>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <select className="form-select form-select-sm">
                          <option value="Everyone" selected>
                            Everyone
                          </option>
                          <option value="Selected">Selected</option>
                          <option value="Nobody">Nobody</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="fs-13 mb-0 text-truncate">Status</h5>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <select className="form-select form-select-sm">
                          <option value="Everyone" selected>
                            Everyone
                          </option>
                          <option value="Selected">Selected</option>
                          <option value="Nobody">Nobody</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="fs-13 mb-0 text-truncate">Groups</h5>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <select className="form-select form-select-sm">
                          <option value="Everyone" selected>
                            Everyone
                          </option>
                          <option value="Selected">Selected</option>
                          <option value="Nobody">Nobody</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="fs-13 mb-0 text-truncate">Last seen</h5>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <div className="form-check form-switch">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="privacy-lastseenSwitch"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="privacy-lastseenSwitch"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="fs-13 mb-0 text-truncate">
                          Read receipts
                        </h5>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <div className="form-check form-switch">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="privacy-readreceiptSwitch"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="privacy-readreceiptSwitch"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- end privacy card --> */}

          <div className="accordion-item">
            <div className="accordion-header" id="headersecurity">
              <a
                className="accordion-button fs-14 fw-medium collapsed"
                data-bs-toggle="collapse"
                href="#collapsesecurity"
                aria-expanded="false"
                aria-controls="collapsesecurity"
              >
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-3 avatar-xs">
                    <div className="avatar-title bg-soft-info text-info rounded">
                      <i className="bx bxs-check-shield"></i>
                    </div>
                  </div>
                  Security
                </div>
              </a>
            </div>
            <div
              id="collapsesecurity"
              className="accordion-collapse collapse"
              aria-labelledby="headersecurity"
              data-bs-parent="#settingprofile"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-0">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="fs-13 mb-0 text-truncate">
                          Show security notification
                        </h5>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <div className="form-check form-switch">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="security-notificationswitch"
                          />
                          <label
                            className="form-check-label"
                            for="security-notificationswitch"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- end security card --> */}

          <div className="accordion-item">
            <div className="accordion-header" id="headerhelp">
              <button
                className="accordion-button fs-14 fw-medium collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsehelp"
                aria-expanded="false"
                aria-controls="collapsehelp"
              >
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 me-3 avatar-xs">
                    <div className="avatar-title bg-soft-info text-info rounded">
                      <i className="bx bxs-help-circle"></i>
                    </div>
                  </div>
                  Help
                </div>
              </button>
            </div>
            <div
              id="collapsehelp"
              className="accordion-collapse collapse"
              aria-labelledby="headerhelp"
              data-bs-parent="#settingprofile"
            >
              <div className="accordion-body">
                <ul className="list-unstyled vstack gap-4 mb-0">
                  <li>
                    <h5 className="fs-13 mb-0">
                      <a href="#" className="text-body d-block">
                        FAQs
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5 className="fs-13 mb-0">
                      <a href="#" className="text-body d-block">
                        Contact
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5 className="fs-13 mb-0">
                      <a href="#" className="text-body d-block">
                        Terms & Privacy policy
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end profile-setting-accordion --> */}
      </div>
      {/* <!-- End User profile description --> */}
    </div>
  );
};

export default TabPaneSetting;
