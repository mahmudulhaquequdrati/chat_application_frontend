// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
// import React, { useEffect, useState } from "react";
// import { FaSortUp, FaSortDown } from "react-icons/fa";
// import { MdPersonAddAlt1, MdPersonalInjury } from "react-icons/md";
// import { AiOutlineMessage } from "react-icons/ai";
// import { GoPrimitiveDot } from "react-icons/go";

// const NavData = () => {
//   const [isInbox, setIsInbox] = useState(false);
//   const [isStarred, setIsStarred] = useState(false);
//   const [isDrafts, setIsDrafts] = useState(false);
//   const [isSent, setIsSent] = useState(false);
//   const [isTags, setIsTags] = useState(false);
//   const [isTest2, setIsTest2] = useState(false);
//   const [isJhon, setIsJhon] = useState(false);
//   const [isArron, setIsArron] = useState(false);
//   const [isDevelopment, setIsDevelopment] = useState(false);
//   const [isHCPOD, setIsHCPOD] = useState(false);

//   const [isCurrentState, setIsCurrentState] = useState("");

//   const menuItems = [
//     {
//       label: "Me",
//       isHeader: true,
//     },
//     {
//       id: "inbox",
//       label: "Inbox",
//       icon: <FeatherIcon icon="inbox" className=" icons" size={14} />,
//       link: "/#",
//       click: function (e) {
//         e.preventDefault();
//         setIsInbox(!isInbox);
//         setIsCurrentState("inbox");
//       },
//       stateVariables: isInbox,
//       subItems: [
//         {
//           id: "assigned to me",
//           label: "Assigned to me",
//           icon: <FeatherIcon icon="user" className=" icons" size={14} />,
//           link: "/assigned-to-me",
//           parentId: "inbox",
//         },
//         {
//           id: "shared with me",
//           label: "Shared with me",
//           icon: <FeatherIcon icon="user" className=" icons" size={14} />,
//           link: "/shared-with-me",
//           parentId: "inbox",
//         },
//         {
//           id: "discussion",
//           label: "Discussion",
//           icon: (
//             <FeatherIcon icon="message-circle" className=" icons" size={14} />
//           ),
//           link: "/discussion",
//           parentId: "inbox",
//         },
//         {
//           id: "precisioncom",
//           label: "precisioncom",
//           icon: <FeatherIcon icon="circle" className=" icons" size={14} />,
//           link: "/precisioncom",
//           parentId: "inbox",
//         },
//       ],
//     },
//     {
//       id: "starred",
//       label: "Starred",
//       icon: <FeatherIcon icon="star" className=" icons" size={14} />,
//       link: "/starred",
//       click: function (e) {
//         e.preventDefault();
//         setIsStarred(!isStarred);
//         setIsCurrentState("starred");
//       },
//       stateVariables: isStarred,
//     },
//     {
//       id: "drafts",
//       label: "Drafts",
//       icon: <FeatherIcon icon="file-text" className=" icons" size={14} />,
//       link: "/drafts",
//       click: function (e) {
//         e.preventDefault();
//         setIsDrafts(!isDrafts);
//         setIsCurrentState("drafts");
//       },

//       stateVariables: isDrafts,
//     },
//     {
//       id: "sent",
//       label: "Sent",
//       icon: <FeatherIcon icon="send" className=" icons" size={14} />,
//       link: "/sent",
//       click: function (e) {
//         e.preventDefault();
//         setIsSent(!isSent);
//         setIsCurrentState("sent");
//       },

//       stateVariables: isSent,
//     },
//     {
//       id: "tags",
//       label: "Tags",
//       icon: <FeatherIcon icon="tag" className=" icons" size={14} />,
//       link: "/tags",
//       click: function (e) {
//         e.preventDefault();
//         setIsTags(!isTags);
//         setIsCurrentState("tags");
//       },
//       stateVariables: isTags,
//     },
//     {
//       id: "test2",
//       label: "Test2",
//       icon: <FeatherIcon icon="tag" className=" icons" size={14} />,
//       link: "/test2",
//       click: function (e) {
//         e.preventDefault();
//         setIsTest2(!isTest2);
//         setIsCurrentState("test2");
//       },
//       stateVariables: isTest2,
//     },
//     {
//       id: "jhon",
//       label: "Jhon",
//       icon: <FeatherIcon icon="tag" className=" icons" size={14} />,
//       link: "/jhon",
//       click: function (e) {
//         e.preventDefault();
//         setIsJhon(!isJhon);
//         setIsCurrentState("jhon");
//       },
//       stateVariables: isJhon,
//     },
//     {
//       id: "arron",
//       label: "Arron",
//       icon: <FeatherIcon icon="tag" className=" icons" size={14} />,
//       link: "/arron",
//       click: function (e) {
//         e.preventDefault();
//         setIsArron(!isArron);
//         setIsCurrentState("arron");
//       },
//       stateVariables: isArron,
//     },
//     {
//       id: "development",
//       label: "Development",
//       icon: <FeatherIcon icon="tag" className=" icons" size={14} />,
//       link: "/development",
//       click: function (e) {
//         e.preventDefault();
//         setIsDevelopment(!isDevelopment);
//         setIsCurrentState("development");
//       },
//       stateVariables: isDevelopment,
//     },
//     {
//       id: "hcpod",
//       label: "HCPOD",
//       icon: <FeatherIcon icon="tag" className=" icons" size={14} />,
//       link: "/hcpod",
//       click: function (e) {
//         e.preventDefault();
//         setIsHCPOD(!isHCPOD);
//         setIsCurrentState("hcpod");
//       },
//       stateVariables: isHCPOD,
//       subItems: [
//         {
//           id: "hcpod1",
//           label: "HCPOD1",
//           icon: <FeatherIcon icon="tag" className=" icons" size={14} />,
//           link: "/hcpod1",
//           parentId: "hcpod",
//         },
//         {
//           id: "hcpod2",
//           label: "HCPOD2",
//           icon: <FeatherIcon icon="tag" className=" icons" size={14} />,
//           link: "/hcpod2",
//           parentId: "hcpod",
//         },
//       ],
//     },

//     // {
//     //   label: "Group Name",
//     // },
//   ];
//   return <React.Fragment>{menuItems}</React.Fragment>;
// };

// export default NavData;
