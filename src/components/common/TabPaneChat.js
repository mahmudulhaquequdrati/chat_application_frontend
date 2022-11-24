import React from "react";

const TabPaneChat = () => {
  return (
    <div>
      <div className="px-4 pt-4">
        <div className="d-flex align-items-start">
          <div className="flex-grow-1">
            <h4 className="mb-4">
              Messages <span className="text-primary fs-13">(128)</span>
            </h4>
          </div>
        </div>
        <form>
          <div className="input-group search-panel mb-3">
            <input
              type="text"
              className="form-control bg-light border-0"
              id="searchChatUser"
              onkeyup="searchUser()"
              placeholder="Search here..."
              aria-label="Example text with button addon"
              aria-describedby="searchbtn-addon"
              autocomplete="off"
            />
            <button
              className="btn btn-light p-0"
              type="button"
              id="searchbtn-addon"
            >
              <i className="bx bx-search align-middle"></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- .p-4 --> */}

      <div className="chat-room-list" data-simplebar>
        {/* <!-- Start chat-message-list --> */}
        <h5 className="mb-3 px-4 mt-4 fs-11 text-muted text-uppercase">
          Favourites
        </h5>

        <div className="chat-message-list">
          <ul
            className="list-unstyled chat-list chat-user-list"
            id="favourite-users"
          ></ul>
        </div>

        <div className="d-flex align-items-center px-4 mt-5 mb-2">
          <div className="flex-grow-1">
            <h4 className="mb-0 fs-11 text-muted text-uppercase">
              Direct Messages
            </h4>
          </div>
          <div className="flex-shrink-0">
            <div
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-placement="top"
              title="New Message"
            >
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-success btn-sm"
                data-bs-toggle="modal"
                data-bs-target=".contactModal"
              >
                <i className="bx bx-plus align-middle"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="chat-message-list">
          <ul
            className="list-unstyled chat-list chat-user-list"
            id="usersList"
          ></ul>
        </div>

        <div className="d-flex align-items-center px-4 mt-5 mb-2">
          <div className="flex-grow-1">
            <h4 className="mb-0 fs-11 text-muted text-uppercase">Channels</h4>
          </div>
          <div className="flex-shrink-0">
            <div
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-placement="top"
              title="Create group"
            >
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-success btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#addgroup-exampleModal"
              >
                <i className="bx bx-plus align-middle"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="chat-message-list">
          <ul
            className="list-unstyled chat-list chat-user-list mb-3"
            id="channelList"
          ></ul>
        </div>
        {/* <!-- End chat-message-list --> */}
      </div>
    </div>
  );
};

export default TabPaneChat;
