/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const VideoCall = () => {
  return (
    <div className="modal fade videocallModal" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-body p-0">
            <div className="videocall-overlay"></div>
            <div className="video-call-title position-absolute top-0 start-50 translate-middle-x mt-3 text-center">
              <h5 className="fs-22 text-truncate text-white">Victoria Lane</h5>
              <span className="badge text-white fs-12">05:27</span>
            </div>

            <img
              src="assets/images/users/avatar-2.jpg"
              alt=""
              className="videocallModal-bg"
            />
            <div>
              <img
                src="assets/images/users/avatar-1.jpg"
                alt=""
                className="avatar-lg video-call-profile rounded"
              />
            </div>
            <div className="position-absolute start-0 end-0 bottom-0">
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-danger avatar-md call-close-btn rounded-circle"
                  data-bs-dismiss="modal"
                >
                  <span className="avatar-title bg-transparent fs-24">
                    <i className="mdi mdi-phone-hangup"></i>
                  </span>
                </button>
              </div>

              <div className="p-4 bg-primary-gradient mt-n4">
                <div className="d-flex gap-4 justify-content-center video-call-menu mt-2">
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
                  <a
                    href="javascript:void(0);"
                    className="btn btn-light avatar-sm rounded-circle ms-5"
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
    </div>
  );
};

export default VideoCall;
