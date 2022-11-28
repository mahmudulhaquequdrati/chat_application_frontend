import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { MdPersonAddAlt1, MdPersonalInjury } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

const submenus = [
  {
    icon: <MdPersonAddAlt1 />,
    text: "Assaign to me",
    number: 2,
  },
  {
    icon: <MdPersonalInjury />,
    text: "Shared with me",
    number: 5,
  },
  {
    icon: <AiOutlineMessage />,
    text: "Discussion",
    number: 3,
  },
  {
    icon: <GoPrimitiveDot />,
    text: "precisioncomp...",
    number: 260,
  },
];

const menusItem = [
  {
    icon: "star",
    text: "Starred",
    // number: 2,
  },
  {
    icon: "file-text",
    text: "drafts",
    // number: 5,
  },
  {
    icon: "send",
    text: "sent",
  },
  {
    icon: "tag",
    text: "Tags",
    color: "primary",
  },
  {
    icon: "tag",
    text: "Test 2",
    number: 15,
    color: "warning",
  },
  {
    icon: "tag",
    text: "Jhon",
    number: 55,
    color: "success",
  },
  {
    icon: "tag",
    text: "Aron",
    number: 85,
    color: "danger",
  },
  {
    icon: "tag",
    text: "Development",
    number: 250,
    color: "warning",
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Aj Secure");
  return (
    <div className="mt-3 menus fs-8">
      {/* me */}
      <div className="ms-1">
        <div className="d-flex align-items-center">
          <p className="m-0 text-muted">Me</p>
          <FaSortUp className="text-muted" />
        </div>
      </div>
      {/* end me */}
      {/* inbox */}
      <div className="">
        {/*  */}
        <div className="d-flex align-items-center gap-1 mt-1  menu_item ps-1">
          <BsChevronDown size={14} />
          <FeatherIcon icon="inbox" className=" icons" size={14} />

          <p className="m-0 fw-semibold ms-1">Inbox</p>
        </div>
        {/*  */}
        <div className="mt-1 sub_menu">
          {submenus.map((item, index) => (
            <div
              className={`d-flex align-items-center gap-1 mt-1 sub_menu_item justify-content-between me-1 pe-2 ${
                active === item.text ? "sub_menu_item_active" : ""
              }`}
              onClick={() => setActive(item.text)}
            >
              <div className="d-flex align-items-center text-gray_light gap-1">
                {item.icon}
                <p className="m-0 ms-1 text-gray_light">{item?.text}</p>
              </div>
              <div className="d-flex align-items-center ">
                <span className="text-muted">{item.number}</span>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="menus_items mt-2">
          {menusItem.map((item, index) => (
            <div className="d-flex align-items-center gap-1 mt-1 menu_item justify-content-between pe-2">
              <div className="d-flex align-items-center text-gray_light gap-1">
                <FeatherIcon
                  icon={item?.icon}
                  className={`icons ${item?.icon === "tag" ? "tag_icon" : ""} ${
                    item?.color ? `text-${item?.color}` : ""
                  } `}
                  size={14}
                />
                <p
                  className={`m-0 ms-1 text-gray_light ${
                    item.number > 0 ? "fw-semibold" : ""
                  }`}
                >
                  {item?.text}
                </p>
              </div>
              <div className="d-flex align-items-center ">
                <span className="text-muted">{item?.number}</span>
              </div>
            </div>
          ))}

          <div>
            <div className="d-flex align-items-center gap-1 mt-1 justify-content-between pe-2 menu_item ps-1">
              <div className="d-flex align-items-center gap-1">
                <BsChevronDown size={14} />

                <FeatherIcon
                  icon="tag"
                  className=" icons text-primary tag_icon"
                  size={14}
                />
                <p className="m-0 ms-1 fw-semibold">HCPOD</p>
              </div>
              <div>
                <p className="fw-semibold m-0">250</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-1 mt-1 justify-content-between pe-2 sub_menu_item">
              <div className="d-flex align-items-center gap-1">
                <FeatherIcon
                  icon="tag"
                  className=" icons text-primary tag_icon"
                  size={14}
                />
                <p className="m-0 ms-1 fw-semibold">HCPOD</p>
              </div>
              <div>
                <p className="fw-semibold m-0">250</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-3">
          <div className="ms-1 ">
            <div className="d-flex align-items-center ">
              <p className="m-0 text-muted">Group Name</p>
              <FaSortDown className="text-muted mb-1" />
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center gap-1 mt-1 justify-content-between pe-2 menu_item ps-1">
              <div className="d-flex align-items-center gap-1">
                <BsChevronDown size={14} />

                <FeatherIcon
                  icon="inbox"
                  className=" icons text-primary"
                  size={14}
                />
                <p className="m-0 ms-1 fw-semibold">Team Inboxes</p>
              </div>
              <div>
                <p className="fw-semibold m-0">2500</p>
              </div>
            </div>
            <div
              className={`d-flex align-items-center gap-1 mt-1 menu_item justify-content-between pe-2 sub_menu_item ${
                active === "Aj Secure" ? "sub_menu_item_active" : ""
              }`}
            >
              <div className="d-flex align-items-center text-gray_light gap-1">
                <GoPrimitiveDot className="text-danger" />
                <p className={`m-0 text-gray_light fw-semibold `}>Aj Secure</p>
              </div>
              <div className="d-flex align-items-center ">
                <span className="text-muted">232</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-1 mt-1 menu_item justify-content-between pe-2 sub_menu_item">
              <div className="d-flex align-items-center text-gray_light gap-1">
                <GoPrimitiveDot className="text-success" />
                <p className={`m-0  text-gray_light fw-semibold`}>Demo Inbox</p>
              </div>
              <div className="d-flex align-items-center ">
                <span className="text-muted">23</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-1 mt-1 menu_item justify-content-between pe-2 sub_menu_item">
              <div className="d-flex align-items-center text-gray_light gap-1">
                <GoPrimitiveDot className="text-info" />
                <p className={`m-0  text-gray_light`}>Dispatch SMS</p>
              </div>
              <div className="d-flex align-items-center ">
                <span className="text-muted"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
