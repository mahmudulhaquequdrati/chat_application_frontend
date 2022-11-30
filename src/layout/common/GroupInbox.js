import React from "react";
import ChatInput from "../../components/common/ChatInput";
import ConversationUser from "../../components/common/ConversationUser";

const GroupInbox = () => {
  return (
    <div className="groupInboxRow groupInbox-container cursor ">
      <div
        className=""
        style={{
          maxHeight: `calc(100vh - 26px)`,
          overflowY: "auto",
        }}
      >
        <div className="d-flex align-items-center justify-content-start  py-2">
          <div className="d-flex align-items-center border-bottom border-start w-100 gap-3 pb-2 pt-1 ps-2 cursor">
            <div className="fs-8 fw-semibold ms-1">
              <span className="text-dark">All Messages</span>
              {/*  a horizental bar down that */}
              <div className="border-bottom border-2 rounded-4 border-dark w-100"></div>
            </div>
            <div className="fs-8 text-gray-light">Unassigned</div>
            <div className="fs-8 text-gray-light">Assigned</div>
          </div>
        </div>
        {/*  */}
        <div className="d-flex flex-column gap-1 px-2 py-1">
          <div className="chat_background_active   position-relative border">
            <div className="">
              <div className="d-flex justify-content-between">
                <p className="fw-medium m-0">James Colin</p>
                <div className="">11D</div>
              </div>
              <div className="d-flex justify-content-between align-items-center gap-3 position-relative">
                <p className="fw-medium sms mb-0">SMS Message</p>
                <div className=" tags_container fs-7">
                  {/* tags */}
                  <p className="bg-white text-danger px-1 float-end ms-1 rounded">
                    daniel
                  </p>
                  <p className="bg-white text-danger px-1 float-end ms-1 rounded">
                    test
                  </p>
                  <p className="bg-white text-danger px-1 float-end ms-1 rounded">
                    design
                  </p>
                </div>
              </div>

              <p className=" m-0 fs-7">
                Hi, we have worked hard to build a career in this...
              </p>
            </div>
          </div>

          <div className="chat_background   position-relative">
            <div className="">
              <div className="d-flex justify-content-between">
                <p className="fw-medium m-0">James Colin</p>
                <div className="">11D</div>
              </div>
              <div className="d-flex justify-content-between align-items-center gap-3 position-relative">
                <p className="fw-medium sms mb-0">SMS Message</p>
              </div>

              <p className=" m-0 fs-7">
                Hi, we have worked hard to build a career in this...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex flex-column justify-content-between">
        <ConversationUser />
        <ChatInput />
      </div>
    </div>
  );
};

export default GroupInbox;
