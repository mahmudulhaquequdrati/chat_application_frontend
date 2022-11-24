/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const GroupVideo = () => {
  return (
    <div
      className="modal fade groupvideocallModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-body p-0 overflow-hidden">
            <div className="videocall-overlay"></div>
            <div className="video-call-title position-absolute top-0 start-0 mt-3 ms-3">
              <h5 className="user-profile-show fs-22 text-truncate text-white">
                Reporting
              </h5>
              <span className="badge text-white fs-11">05:27</span>
            </div>
            <img
              src="assets/images/users/avatar-7.jpg"
              alt=""
              className="videocallModal-bg rounded"
            />
            <ul className="list-unstyled groud-call-user vstack gap-3 position-absolute end-0 top-0 p-3">
              <li>
                <a href="javascript:void(0);">
                  <img
                    src="assets/images/users/avatar-11.jpg"
                    alt=""
                    className="avatar-lg rounded"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img
                    src="assets/images/users/avatar-6.jpg"
                    alt=""
                    className="avatar-lg rounded"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img
                    src="assets/images/users/avatar-3.jpg"
                    alt=""
                    className="avatar-lg rounded"
                  />
                </a>
              </li>
            </ul>
            <div className="position-absolute video-call-menu start-0 end-0 bottom-0 mb-3">
              <div className="hstack justify-content-center gap-3">
                <a
                  href="javascript:void(0);"
                  className="btn btn-light avatar-sm rounded-circle"
                >
                  <span className="avatar-title bg-transparent fs-20">
                    <i className="bx bx-microphone-off"></i>
                  </span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="btn btn-light avatar-sm rounded-circle me-4"
                >
                  <span className="avatar-title bg-transparent fs-20">
                    <i className="bx bx-video-off"></i>
                  </span>
                </a>
                <button
                  type="button"
                  className="btn btn-danger avatar-sm call-close-btn shadow-none rounded-circle"
                  data-bs-dismiss="modal"
                >
                  <span className="avatar-title bg-transparent fs-24">
                    <i className="mdi mdi-phone-hangup"></i>
                  </span>
                </button>
                <a
                  href="javascript:void(0);"
                  className="btn btn-light avatar-sm rounded-circle ms-4"
                >
                  <span className="avatar-title bg-transparent fs-20">
                    <i className="bx bx-volume-full"></i>
                  </span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="btn btn-light avatar-sm rounded-circle"
                >
                  <span className="avatar-title bg-transparent fs-20">
                    <i className="bx bx-refresh"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupVideo;
