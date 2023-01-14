import React, { useEffect, useState } from "react";
import ChatInput from "../../components/common/ChatInput";
import ConversationUser from "../../components/common/ConversationUser";
import { useParams } from "react-router-dom";

const messageTab = [
  {
    id: 1,
    name: "All Messages",
    active: true,
  },
];
const TagInbox = () => {
  const [inboxActive, setInboxActive] = useState(1);
  const [messageTabActive, setMessageTabActive] = useState(1);
  const [inboxDataActive, setInboxDataActive] = useState(false);
  const [conversationData, setConversationData] = useState([]);
  const [messageData, setMessageData] = useState([]);
  const [conversationUserName, setConversationUserName] = useState("");
  const [conversationTags, setConversationTags] = useState([]);

  const { tagName } = useParams();

  const handleInboxActive = (id) => {
    setInboxActive(id);
    setInboxDataActive(!inboxDataActive);
  };

  useEffect(() => {
    const response = () =>
      fetch(
        `https://chat-app-backend-9pfz.onrender.com/api/v1/conversations/all-conversations/${tagName}`
      )
        .then((res) => res.json())
        .then((data) => {
          setConversationData(data?.conversation);
        });
    response();
  }, [tagName]);

  const handleGetMessages = async (id) => {
    const response = await fetch(
      `https://chat-app-backend-9pfz.onrender.com/api/v1/messages/all-messages/${id}`
    );
    const data = await response.json();
    setMessageData(data?.message?.messages);
  };

  return (
    <div className="groupInboxRow groupInbox-container cursor">
      <div
        className=""
        style={{
          maxHeight: `calc(100vh - 26px)`,
          // overflowY: "auto",
        }}
      >
        {/* message Tab */}
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
        {conversationData.length ? (
          <div className="d-flex flex-column gap-1 px-2 py-1">
            {conversationData?.map((item) => (
              <div
                className={` ${
                  inboxActive === item?._id
                    ? "chat_background_active border"
                    : "chat_background"
                }    position-relative `}
                key={item._id}
                onClick={() => {
                  handleInboxActive(item?._id);
                  handleGetMessages(item?._id);
                  setConversationUserName(item?.username);
                  setConversationTags(item?.tags);
                }}
              >
                <div className="">
                  <div className="d-flex justify-content-between">
                    <p className="fw-medium m-0">{item?.username}</p>
                    <div className="">{item?.time ? item?.time : "7D"}</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center gap-3 position-relative">
                    <p className="fw-medium sms mb-0">{item?.smsType}</p>
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

                  <p className=" m-0 fs-7">{item?.lastmessage}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center flex-column w-100  "
            style={{ height: "calc(100vh - 124px)" }}
          >
            <p className="fs-5 text-gray-light">
              No conversation found for this tag.
            </p>
          </div>
        )}
      </div>
      {messageData?.length && conversationData.length ? (
        <div
          className={` d-flex flex-column chat_user_conversation ${
            inboxDataActive ? "chat_user_conversation_active " : ""
          }`}
        >
          <ConversationUser
            messageData={messageData}
            setInboxDataActive={setInboxDataActive}
            inboxDataActive={inboxDataActive}
            conversationUserName={conversationUserName}
            conversationTags={conversationTags}
          />
          <ChatInput />
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-column w-100 chat-topbar-bg">
          <p className="fs-5 text-gray-light">
            Click any conversation to see the messages.
          </p>
        </div>
      )}
    </div>
  );
};

export default TagInbox;
