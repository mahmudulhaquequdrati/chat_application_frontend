import React from "react";
import { AiFillCaretUp } from "react-icons/ai";

const NavData = () => {
  const menuItems = [
    {
      label: "Me",
      isHeader: true,
    },
    {
      id: "allInbox",
      label: "All Inbox",
      icon: "inbox",
      link: "/app/all-inbox", 
      // state: false,
      // subItems: [
      //   {
      //     id: "assigned to me",
      //     label: "Assigned to me",
      //     icon: "user",
      //     link: "/app/assigned-to-me",
      //     parentId: "inbox",
      //     number: 5,
      //   },
      //   {
      //     id: "shared with me",
      //     label: "Shared with me",
      //     icon: "user",
      //     link: "/app/shared-with-me",
      //     parentId: "inbox",
      //     number: 2,
      //   },
      //   {
      //     id: "discussion",
      //     label: "Discussion",
      //     icon: "message-circle",
      //     link: "/app/discussion",
      //     parentId: "inbox",
      //     number: 3,
      //   },
      //   {
      //     id: "precisioncom",
      //     label: "precisioncom...",
      //     icon: "circle",
      //     link: "/app/precisioncom",
      //     parentId: "inbox",
      //     number: 1,
      //   },
      // ],
    },
    // {
    //   id: "starred",
    //   label: "Starred",
    //   icon: "star",
    //   link: "/app/starred",
    //   click: function (e) {
    //     e.preventDefault();
    //     // setIsCurrentState("starred");
    //   },
    // },
    // {
    //   id: "drafts",
    //   label: "Drafts",
    //   icon: "file-text",
    //   link: "/app/drafts",
    //   click: function (e) {
    //     e.preventDefault();
    //     // setIsCurrentState("drafts");
    //   },
    // },
    // {
    //   id: "sent",
    //   label: "Sent",
    //   icon: "send",
    //   link: "/app/sent",
    //   click: function (e) {
    //     e.preventDefault();
    //     // setIsCurrentState("sent");
    //   },
    // },
    {
      id: "test",
      label: "Test",
      icon: "tag",
      link: "/app/tags/test",
      color: "primary",
    },
    {
      id: "deniel",
      label: "deniel",
      icon: "tag",
      link: "/app/tags/deniel",
      number: 2,
      color: "warning",
    },
    {
      id: "design",
      label: "Design",
      icon: "tag",
      link: "/app/tags/design",
      number: 23,
      color: "success",
    },
    {
      id: "michel",
      label: "Michel",
      icon: "tag",
      link: "/app/tags/michel",
      number: 43,
      color: "info",
    },
    {
      id: "development",
      label: "Development",
      icon: "tag",
      link: "/app/tags/development",
      number: 55,
      color: "danger",
    },
    {
      id: "hcpod",
      label: "HCPOD",
      icon: "tag",
      number: 125,
      color: "primary",
      state: true,
      subItems: [
        {
          id: "hcpod1",
          label: "HCPOD1",
          icon: "tag",
          link: "/app/tags/hcpod1",
          parentId: "hcpod",
          number: 75,
          color: "warning",
        },
        {
          id: "hcpod2",
          label: "HCPOD2",
          icon: "tag",
          link: "/app/tags/hcpod2",
          parentId: "hcpod",
          number: 50,
          color: "success",
        },
      ],
    },
    {
      id: "mark",
      label: "Mark",
      icon: "tag",
      link: "/app/tags/mark",
      number: 63,
      color: "success",
    },

    {
      label: "Company Name",
      isHeader: true,
    },
    {
      id: "developer-team",
      label: "Developer Team",
      icon: "inbox",
      number: 250,
      state: true,
      subItems: [
        {
          id: "designing-channel",
          channelId : "5f9f1b5b5b9b9b5b5b5b5b5b",
          label: "Designing Channel",
          icon: "circle",
          link: "/app/channel/designing-channel",
          parentId: "developer-team",
          color: "primary",
          number: 50,
        },
        {
          id: "testing-channel",
          channelId : "5f9f1b5b5b9b9b5b5b5b5b5d",
          label: "Testing Channel",
          icon: "circle",
          link: "/app/channel/testing-channel",
          parentId: "developer-team",
          color: "warning",
          number: 200,
        },
        {
          id: "marketing-channel",
          channelId : "5f9f1b5b5b9b9b5b5b5b5b5c",
          label: "Marketing Channel",
          icon: "circle",
          link: "/app/channel/marketing-channel",
          parentId: "developer-team",
          color: "success",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};

export default NavData;
