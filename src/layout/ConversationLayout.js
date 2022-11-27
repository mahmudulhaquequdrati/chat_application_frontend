import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React from "react";
import { BiMessageAltEdit } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FaSortUp } from "react-icons/fa";
import { MdPersonAddAlt1, MdPersonalInjury } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
// import SimpleBar from "simplebar-react";
// import "../../node_modules/simplebar-react/dist/simplebar.min.css";

const ConversationLayout = () => {
  return (
    <div className="row  ms-3 me-2 grid-container">
      {/* new message */}
      <div className="col-2 px-0 ">
        <div className="d-flex align-items-center px-0">
          <button className="btn compose-btn">
            <BiMessageAltEdit size={20} />
            <span className="ms-1 compose">Compose</span>
          </button>
          <div className="bg-dark-primary text-white d-flex align-items-center pe-3 ps-2 cheveromDown">
            <BsChevronDown size={14} />
          </div>
        </div>
        {/* end new message */}
        {/* menus */}
        <div className="mt-3 ms-2 menus">
          {/* me */}
          <div className="">
            <div className="d-flex align-items-center">
              <p className="m-0 text-muted">Me</p>
              <FaSortUp className="text-muted" />
            </div>
          </div>
          {/* end me */}
          {/* inbox */}
          <div className="">
            {/*  */}
            <div className="d-flex align-items-center gap-1 mt-1">
              <BsChevronDown size={14} />
              <FeatherIcon icon="inbox" className=" icons" size={14} />

              <p className="m-0 fw-semibold ms-1">Inbox</p>
            </div>
            {/*  */}
            <div className="mt-1 sub_menu">
              <div className="d-flex align-items-center">
                <MdPersonAddAlt1 />
                <p className="mb-0 mt-1 ms-1">Assaign to me</p>
              </div>
              <div className="d-flex align-items-center">
                <MdPersonalInjury />
                <p className="m-0 mt-1 ms-1">Shared with me</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
              <div className="d-flex align-items-center">
                <AiOutlineMessage />
                <p className="m-0 mt-1 ms-1">Discussion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ends first col */}
      <div className="col-3">b</div>
      <div className="col-7">c</div>
    </div>
  );
};

export default ConversationLayout;
