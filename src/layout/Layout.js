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
    <div className="topbar ">
      <div className="d-flex gap-2 align-items-center h-100 topbar_icons  ps-2 ps-sm-3">
        <i class="bx bxs-inbox"></i>
        <i class="bx bx-calendar"></i>
        <i class="bx bxs-contact"></i>
        <i class="bx bx-stats"></i>
      </div>
      <form class="d-flex bg-topbar_search rounded topbar_search_wrapper">
        <i class="bx bx-search-alt-2"></i>
        <input
          class="topbar_search h-75 bg-topbar_search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <i class="bx bx-filter pe-2"></i>
      </form>
      <div className="topbar_icons pe-2">
        <i class="bx bx-help-circle "></i>
        <i class="bx bx-cog "></i>
        <i class="bx bxl-google"></i>
      </div>
    </div>
  );
};

export default Layout;
