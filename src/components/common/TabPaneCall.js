import React from "react";

const TabPaneCall = () => {
  return (
    <div>
      <div className="px-4 pt-4">
        <div className="d-flex align-items-start">
          <div className="flex-grow-1">
            <h4 className="mb-3">Calls</h4>
          </div>
        </div>
      </div>
      {/* <!-- end p-4 --> */}

      {/* <!-- Start contact lists --> */}
      <div className="chat-message-list chat-call-list" data-simplebar>
        <ul className="list-unstyled chat-list" id="callList"></ul>
      </div>
      {/* <!-- end contact lists --> */}
    </div>
  );
};

export default TabPaneCall;
