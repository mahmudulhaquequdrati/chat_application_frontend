import React, { useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";

const NavData = () => {
  const [isInbox, setIsInbox] = useState(true);
  const [isHCPOD, setIsHCPOD] = useState(true);
  const [isTeamInboxes, setIsTeamInboxes] = useState(true);

  // if we want like, if any expanded item is clicked then other expanded item should be closed then uncomment below code.

  // const [isCurrentState, setIsCurrentState] = useState("team-inboxes");

  // useEffect(() => {
  //   if (isCurrentState !== "inbox") {
  //     setIsInbox(false);
  //   }
  //   if (isCurrentState !== "starred") {
  //     setIsStarred(false);
  //   }
  //   if (isCurrentState !== "drafts") {
  //     setIsDrafts(false);
  //   }
  //   if (isCurrentState !== "sent") {
  //     setIsSent(false);
  //   }
  //   if (isCurrentState !== "tags") {
  //     setIsTags(false);
  //   }
  //   if (isCurrentState !== "test2") {
  //     setIsTest2(false);
  //   }
  //   if (isCurrentState !== "jhon") {
  //     setIsJhon(false);
  //   }
  //   if (isCurrentState !== "arron") {
  //     setIsArron(false);
  //   }
  //   if (isCurrentState !== "development") {
  //     setIsDevelopment(false);
  //   }
  //   if (isCurrentState !== "hcpod") {
  //     setIsHCPOD(false);
  //   }
  //   if (isCurrentState !== "team-inboxes") {
  //     setIsTeamInboxes(false);
  //   }
  // }, [
  //   isCurrentState,
  //   isInbox,
  //   isStarred,
  //   isDrafts,
  //   isSent,
  //   isTags,
  //   isTest2,
  //   isJhon,
  //   isArron,
  //   isDevelopment,
  //   isHCPOD,
  //   isTeamInboxes,
  // ]);

  const menuItems = [
    {
      label: "Me",
      isHeader: true,
      icon: <AiFillCaretUp size={12} />,
    },
    {
      id: "allInbox",
      label: "All Inbox",
      icon: "inbox",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsInbox(!isInbox);
        // setIsCurrentState("inbox");
      },
      stateVariables: isInbox,
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
      id: "tags",
      label: "Tags",
      icon: "tag",
      link: "/app/tags",
      click: function (e) {
        e.preventDefault();
        // setIsCurrentState("tags");
      },
      color: "primary",
    },
    {
      id: "test2",
      label: "Test2",
      icon: "tag",
      link: "/app/test2",
      click: function (e) {
        e.preventDefault();
        // setIsCurrentState("test2");
      },
      number: 2,
      color: "warning",
    },
    {
      id: "jhon",
      label: "Jhon",
      icon: "tag",
      link: "/app/jhon",
      click: function (e) {
        e.preventDefault();
        // setIsCurrentState("jhon");
      },
      number: 23,
      color: "success",
    },
    {
      id: "arron",
      label: "Arron",
      icon: "tag",
      link: "/app/arron",
      click: function (e) {
        e.preventDefault();
        // setIsCurrentState("arron");
      },
      number: 43,
      color: "info",
    },
    {
      id: "development",
      label: "Development",
      icon: "tag",
      link: "/app/development",
      click: function (e) {
        e.preventDefault();
        // setIsCurrentState("development");
      },
      number: 55,
      color: "danger",
    },
    {
      id: "hcpod",
      label: "HCPOD",
      icon: "tag",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsHCPOD(!isHCPOD);
        // setIsCurrentState("hcpod");
      },
      stateVariables: isHCPOD,
      number: 125,
      color: "primary",
      subItems: [
        {
          id: "hcpod1",
          label: "HCPOD1",
          icon: "tag",
          link: "/app/hcpod1",
          parentId: "hcpod",
          number: 75,
          color: "warning",
        },
        {
          id: "hcpod2",
          label: "HCPOD2",
          icon: "tag",
          link: "/app/hcpod2",
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
      link: "/app/mark",
      click: function (e) {
        e.preventDefault();
        // setIsCurrentState("jhon");
      },
      number: 63,
      color: "success",
    },

    {
      label: "Company Name",
      isHeader: true,
      icon: <AiFillCaretUp size={12} />,
    },
    {
      id: "developer-team",
      label: "Developer Team",
      icon: "inbox",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsTeamInboxes(!isTeamInboxes);
        // setIsCurrentState("team-inboxes");
      },
      stateVariables: isTeamInboxes,
      number: 250,
      subItems: [
        {
          id: "designing-channel",
          label: "Designing Channel",
          icon: "circle",
          link: "/app/message",
          parentId: "developer-team",
          color: "primary",
          number: 50,
        },
        {
          id: "testing-channel",
          label: "Testing Channel",
          icon: "circle",
          link: "/app/testing-channel",
          parentId: "developer-team",
          color: "warning",
          number: 200,
        },
        {
          id: "marketing-channel",
          label: "Marketing Channel",
          icon: "circle",
          link: "/app/marketing-channel",
          parentId: "developer-team",
          color: "success",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};

export default NavData;
