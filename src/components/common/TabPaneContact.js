import React from "react";

const TabPaneContact = () => {
  return (
    <div>
      <div className="px-4 pt-4">
        <div className="d-flex align-items-start">
          <div className="flex-grow-1">
            <h4 className="mb-4">Contacts</h4>
          </div>
          <div className="flex-shrink-0">
            <div>
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-soft-success btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#addContact-exampleModal"
              >
                <i className="bx bx-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <form>
          <div className="input-group search-panel mb-4">
            <input
              type="text"
              className="form-control bg-light border-0"
              id="searchContact"
              onkeyup="searchContacts()"
              placeholder="Search contacts..."
              aria-label="Search Contacts..."
              aria-describedby="button-searchcontactsaddon"
              autocomplete="off"
            />
            <button
              className="btn btn-light p-0"
              type="button"
              id="button-searchcontactsaddon"
            >
              <i className="bx bx-search align-middle"></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- end p-4 --> */}

      <div className="chat-message-list chat-group-list" data-simplebar>
        <div className="sort-contact"></div>
      </div>
      {/* <!-- end contact lists --> */}
    </div>
  );
};

export default TabPaneContact;
