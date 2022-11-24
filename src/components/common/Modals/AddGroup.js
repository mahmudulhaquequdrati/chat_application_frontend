import React from "react";

const AddGroup = () => {
  return (
    <div
      className="modal fade"
      id="addgroup-exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addgroup-exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content modal-header-colored border-0">
          <div className="modal-header">
            <h5
              className="modal-title text-white fs-16"
              id="addgroup-exampleModalLabel"
            >
              Create New Group
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-4">
            <form>
              <div className="mb-4">
                <label for="addgroupname-input" className="form-label">
                  Group Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addgroupname-input"
                  placeholder="Enter Group Name"
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Group Members</label>
                <div className="mb-3">
                  <button
                    className="btn btn-light btn-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#groupmembercollapse"
                    aria-expanded="false"
                    aria-controls="groupmembercollapse"
                  >
                    Select Members
                  </button>
                </div>

                <div className="collapse" id="groupmembercollapse">
                  <div className="card border">
                    <div className="card-header">
                      <h5 className="fs-15 mb-0">Contacts</h5>
                    </div>
                    <div className="card-body py-2 px-0">
                      <div data-simplebar style={{ maxHeight: "180px" }}>
                        <div>
                          <div className="contact-list-title">A</div>

                          <ul className="list-unstyled contact-list">
                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck1"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck1"
                                >
                                  Albert Rodarte
                                </label>
                              </div>
                            </li>

                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck2"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck2"
                                >
                                  Allison Etter
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="contact-list-title">C</div>

                          <ul className="list-unstyled contact-list">
                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck3"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck3"
                                >
                                  Craig Smiley
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="contact-list-title">D</div>

                          <ul className="list-unstyled contact-list">
                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck4"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck4"
                                >
                                  Daniel Clay
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="contact-list-title">I</div>

                          <ul className="list-unstyled contact-list">
                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck5"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck5"
                                >
                                  Iris Wells
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="contact-list-title">J</div>

                          <ul className="list-unstyled contact-list">
                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck6"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck6"
                                >
                                  Juan Flakes
                                </label>
                              </div>
                            </li>

                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck7"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck7"
                                >
                                  John Hall
                                </label>
                              </div>
                            </li>

                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck8"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck8"
                                >
                                  Joy Southern
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="contact-list-title">M</div>

                          <ul className="list-unstyled contact-list">
                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck9"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck9"
                                >
                                  Michael Hinton
                                </label>
                              </div>
                            </li>

                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck10"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck10"
                                >
                                  Mary Farmer
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="contact-list-title">P</div>

                          <ul className="list-unstyled contact-list">
                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck11"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck11"
                                >
                                  Phillis Griffin
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="contact-list-title">R</div>

                          <ul className="list-unstyled contact-list">
                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck12"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck12"
                                >
                                  Rocky Jackson
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <div className="contact-list-title">S</div>

                          <ul className="list-unstyled contact-list">
                            <li>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="memberCheck13"
                                />
                                <label
                                  className="form-check-label"
                                  for="memberCheck13"
                                >
                                  Simon Velez
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label for="addgroupdescription-input" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="addgroupdescription-input"
                  rows="3"
                  placeholder="Enter Description"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer border-top-dashed">
            <button
              type="button"
              className="btn btn-link link-danger m-0"
              data-bs-dismiss="modal"
            >
              <i className="ri-close-line"></i> Close
            </button>
            <button type="button" className="btn btn-primary m-0">
              Create Groups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
