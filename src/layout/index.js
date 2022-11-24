/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SideBar from "../components/common/SideBar";
import ProfileTabPane from "../components/common/ProfileTabPane";
import TabPaneBookmark from "../components/common/TabPaneBookmark";
import TabPaneCall from "../components/common/TabPaneCall";
import TabPaneChat from "../components/common/TabPaneChat";
import TabPaneContact from "../components/common/TabPaneContact";
import TabPaneSetting from "../components/common/TabPaneSetting";
import ConversationUser from "../components/common/ConversationUser";
import ConversationGroup from "../components/common/ConversationGroup";
import UserProfileDetails from "../components/common/UserProfileDetails";
import ChatInput from "../components/common/ChatInput";
import AddContact from "../components/common/Modals/AddContact";
import AudioCall from "../components/common/Modals/AudioCall";
import VideoCall from "../components/common/Modals/VideoCall";
import GroupVideo from "../components/common/Modals/GroupVideo";
import AddGroup from "../components/common/Modals/AddGroup";
import AddPinnedTab from "../components/common/Modals/AddPinnedTab";
import Forward from "../components/common/Modals/Forward";
import Contact from "../components/common/Modals/Contact";

const Layout = () => {
  return (
    <div className="layout-wrapper d-lg-flex">
      <SideBar />

      {/*  <!-- start chat-leftsidebar --> */}
      <div class="chat-leftsidebar">
        <div class="tab-content">
          {/* <!-- Start Profile tab-pane --> */}
          <div
            class="tab-pane"
            id="pills-user"
            role="tabpanel"
            aria-labelledby="pills-user-tab"
          >
            <ProfileTabPane />
          </div>
          {/* <!-- End Profile tab-pane --> */}

          {/* <!-- Start chats tab-pane --> */}
          <div
            class="tab-pane show active"
            id="pills-chat"
            role="tabpanel"
            aria-labelledby="pills-chat-tab"
          >
            <TabPaneChat />
          </div>
          {/* <!-- End chats tab-pane --> */}

          {/* <!-- Start contacts tab-pane --> */}
          <div
            class="tab-pane"
            id="pills-contacts"
            role="tabpanel"
            aria-labelledby="pills-contacts-tab"
          >
            <TabPaneContact />
          </div>
          {/* <!-- End contacts tab-pane --> */}

          {/* <!-- Start calls tab-pane --> */}
          <div
            class="tab-pane"
            id="pills-calls"
            role="tabpanel"
            aria-labelledby="pills-calls-tab"
          >
            <TabPaneCall />
          </div>
          {/* <!-- End calls tab-pane --> */}

          {/* <!-- Start bookmark tab-pane --> */}
          <div
            class="tab-pane"
            id="pills-bookmark"
            role="tabpanel"
            aria-labelledby="pills-bookmark-tab"
          >
            <TabPaneBookmark />
          </div>
          {/* <!-- End bookmark tab-pane --> */}

          {/* <!-- Start settings tab-pane --> */}
          <div
            class="tab-pane"
            id="pills-setting"
            role="tabpanel"
            aria-labelledby="pills-setting-tab"
          >
            <TabPaneSetting />
          </div>
          {/* <!-- End settings tab-pane --> */}
        </div>
        {/* <!-- end tab content --> */}
      </div>
      {/*  <!-- end chat-leftsidebar --> */}

      {/* <!-- Start User chat --> */}
      <div class="user-chat w-100 overflow-hidden">
        <div class="chat-content d-lg-flex">
          {/* <!-- start chat conversation section --> */}
          <div class="w-100 overflow-hidden position-relative">
            <ConversationUser />
            <ConversationGroup />
            <ChatInput />
          </div>
          {/* <!-- end chat conversation section --> */}
          <UserProfileDetails />
        </div>
        {/* <!-- end user chat content --> */}
      </div>
      {/* <!-- End User chat --> */}

      <AddContact />

      <AudioCall />
      <VideoCall />
      <GroupVideo />
      <AddGroup />
      <AddPinnedTab />
      <Forward />
      <Contact />
      {/* end */}
    </div>
  );
};

export default Layout;
