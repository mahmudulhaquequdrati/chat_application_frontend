import React from "react";

const AddContact = () => {
  return (
    <div
      className="modal fade"
      id="addContact-exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addContact-exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content modal-header-colored shadow-lg border-0">
          <div className="modal-header">
            <h5
              className="modal-title text-white fs-16"
              id="addContact-exampleModalLabel"
            >
              Create Contact
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
              <div className="mb-3">
                <label for="addcontactemail-input" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="addcontactemail-input"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <label for="addcontactname-input" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addcontactname-input"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-0">
                <label
                  for="addcontact-invitemessage-input"
                  className="form-label"
                >
                  Invatation Message
                </label>
                <textarea
                  className="form-control"
                  id="addcontact-invitemessage-input"
                  rows="3"
                  placeholder="Enter Message"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-link"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
