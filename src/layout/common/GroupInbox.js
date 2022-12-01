import React, { useState } from "react";
import ChatInput from "../../components/common/ChatInput";
import ConversationUser from "../../components/common/ConversationUser";

const inboxData = [
  {
    id: 1,
    name: "James Colin",
    time: "11D",
    message: "Hi, we have worked hard to build a career in this...",
    tags: ["daniel", "test", "design"],
    type: "SMS Message",
    active: true,
  },
  {
    id: 2,
    name: "Jhon Doe",
    time: "5D",
    message: "welcome to the world of react",
    tags: [],
    type: "SMS Message",
  },
];
const messageTab = [
  {
    id: 1,
    name: "All Messages",
    active: true,
  },
  {
    id: 2,
    name: "Unassigned",
  },
  {
    id: 3,
    name: "Assigned",
  },
];
const GroupInbox = () => {
  const [inboxActive, setInboxActive] = useState(1);
  const [messageTabActive, setMessageTabActive] = useState(1);
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
          <div className="d-flex align-items-center border-bottom border-start w-100 gap-3 pb-2 pt-1 ps-3 cursor">
            {messageTab.map((item) => (
              <div
                className={`fs-8 ${
                  messageTabActive === item?.id && "fw-semibold"
                } messageTab `}
                key={item?.id}
                onClick={() => setMessageTabActive(item.id)}
              >
                <span
                  className={`${
                    messageTabActive === item?.id
                      ? "text-dark"
                      : "text-gray-light"
                  }`}
                >
                  {item?.name}
                </span>
                {messageTabActive === item?.id && (
                  <div className="border-bottom border-2 rounded-4 border-dark w-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* message inbox */}
        <div className="d-flex flex-column gap-1 px-2 py-1">
          {inboxData.map((item) => (
            <div
              className={` ${
                inboxActive === item?.id
                  ? "chat_background_active border"
                  : "chat_background"
              }    position-relative `}
              key={item.id}
              onClick={() => setInboxActive(item?.id)}
            >
              <div className="">
                <div className="d-flex justify-content-between">
                  <p className="fw-medium m-0">{item?.name}</p>
                  <div className="">{item?.time}</div>
                </div>
                <div className="d-flex justify-content-between align-items-center gap-3 position-relative">
                  <p className="fw-medium sms mb-0">{item?.type}</p>
                  <div className=" tags_container fs-7">
                    {/* tags */}
                    {item?.tags.map((tag, index) => (
                      <p
                        className={`bg-white text-danger border border-danger  ${
                          inboxActive === item.id && "border-white "
                        } inbox_tag float-end ms-1 rounded`}
                        key={index}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>

                <p className=" m-0 fs-7">{item?.message}</p>
              </div>
            </div>
          ))}
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
