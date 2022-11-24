/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AudioCall = () => {
  return (
    <div className="modal fade audiocallModal" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border border-0 overflow-hidden">
          <div className="modal-body p-0">
            <div className="text-center p-4 pb-0">
              <div className="avatar-xl mx-auto mb-4">
                <img
                  src="assets/images/users/avatar-7.jpg"
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <div>
                <h5 className="fs-22 text-truncate mb-0">Victoria Lane</h5>
                <p className="text-muted">05:45</p>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                <a href="" className="avatar-sm">
                  <div className="avatar-title bg-soft-danger text-danger fs-20 rounded-circle">
                    <i className="bx bx-video-recording"></i>
                  </div>
                </a>
                <a href="" className="avatar-sm">
                  <div className="avatar-title bg-soft-success text-success fs-20 rounded-circle">
                    <i className="bx bx-volume-full"></i>
                  </div>
                </a>
                <a href="javascript:void(0)" className="avatar-sm">
                  <div className="avatar-title bg-soft-info text-info fs-20 rounded-circle">
                    <i className="bx bx-user-plus"></i>
                  </div>
                </a>
              </div>

              <div className="mt-4">
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
            </div>

            <div className="p-4 bg-primary-gradient mt-n4">
              <div className="d-flex audio-call-menu">
                <div className="flex-grow-1">
                  <button type="button" className="btn btn-light avatar-sm">
                    <span className="avatar-title bg-transparent fs-20">
                      <i className="ri-question-answer-line"></i>
                    </span>
                  </button>
                </div>
                <div className="flex-shrink-0">
                  <button type="button" className="btn btn-light avatar-sm">
                    <span className="avatar-title bg-transparent fs-20">
                      <i className="bx bx-microphone-off"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCall;
