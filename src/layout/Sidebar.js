import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import React, { useEffect, useState } from "react";
import { BsChevronDown , BsChevronRight} from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import NavData from "./data/LayoutMenuData";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
import { AiFillCaretUp } from "react-icons/ai";

const Sidebar = () => {
  // const navData = NavData().props.children;
  const [navData , setNavData] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/channels/all-channels").then(res =>res.json()).then(data =>setNavData(data?.channels)).catch(err => console.log(err))
  },[])
  // console.log(navData)

  const [active, setActive] = useState("");
  const [parentCollapse, setParentCollapse] = useState([]);

  useEffect(()=>{
   const navDataWithSubMenu =  navData?.filter((item) => item?.subItems)
   setParentCollapse(navDataWithSubMenu)
  },[navData])

    // console.log(parentCollapse);

  const handleClick = (id) => {
    setParentCollapse((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            state: !item.state,
          };
        } else {
          return item;
        }
      });
    });
  };

  useEffect(() => {
    const currentUrl = window.location.pathname;
    navData.forEach((item) => {
      if (item.subItems) {
        item.subItems.forEach((subItem) => {
          if (subItem.link === currentUrl) {
            setActive(subItem.label);
          }
        });
      } else {
        if (item.link === currentUrl) {
          setActive(item.label);
        }
      }
    });
  }, [navData]);

  return (
    <div className="  menus" id="menus">
      {/* start */}
      <React.Fragment>
        {(navData || []).map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item["isHeader"] ? (
                <li className=" isHeader d-flex align-items-center gap-1">
                <div className="text-gray_light d-flex align-items-center">
                    </div>
                  <span className="">{item?.label}</span>
                    <AiFillCaretUp size={12} />
                 
                </li>
              ) : item.subItems ? (
                <li className="mt-1 pe-2">
                  <div
                    // onClick={item.click}
                    onClick={() => handleClick(item?.id)}
                    // to={item.link ? item.link : "/#"}
                    className="d-flex align-items-center justify-content-between w-100 gap-1  menu_item ps-1 text-gray_light pe-2"
                  >
                    <div className="d-flex align-items-center gap-1">
                    {
                      parentCollapse.find((x) => x.id === item?.id)?.state ?<BsChevronDown  size={14} /> : <BsChevronRight size={14} />
                    }
                      
                      <FeatherIcon
                        icon={item.icon}
                        className={`align-self-center icons ${
                          item?.color ? `text-${item?.color}` : ""
                        }`}
                        size={14}
                      />
                      {item.label ? (
                        <p className="m-0 fw-semibold ms-1 ">{item.label}</p>
                      ) : null}
                    </div>
                    {item.number ? (
                      <div className="d-flex align-items-center ">
                        <span className="text-muted">{item?.number}</span>
                      </div>
                    ) : null}
                  </div>
                  <Collapse
                    className="pb-0 menu-dropdown"
                    isOpen={
                      parentCollapse.find((x) => x.id === item?.id)?.state
                    }
                  >
                    <ul className={`sub_menu  mb-1 mt-1 `}>
                      {(item.subItems || []).map((subItem, index) => (
                        <React.Fragment key={index}>
                          <li
                            className={`d-flex align-items-center gap-1 mt-1 sub_menu_item pe-2 ${
                              subItem.parentId === "team-inboxes"
                                ? "fw-semibold"
                                : ""
                            } ${
                              active === subItem.label
                                ? "sub_menu_item_active"
                                : ""
                            } `}
                          >
                            <Link
                              to={subItem?.channelId ? `channel/${subItem.channelId}` : subItem.link ? subItem.link : "/#" }
                              className="d-flex align-items-center  gap-1 justify-content-between  w-100"
                              onClick={() => setActive(subItem.label)}
                            >
                              <div className="d-flex align-items-center text-gray_light gap-1">
                                {subItem.icon && subItem.icon === "circle" ? (
                                  <GoPrimitiveDot
                                    size={14}
                                    className={
                                      subItem?.color
                                        ? "text-" + subItem.color
                                        : ""
                                    }
                                  />
                                ) : (
                                  <FeatherIcon
                                    icon={subItem.icon}
                                    className={`align-self-center icons   ${
                                      subItem?.color
                                        ? `text-${subItem?.color}`
                                        : ""
                                    }`}
                                    size={14}
                                  />
                                )}
                                {subItem.label ? (
                                  <p
                                    className={`m-0 ${
                                      subItem.icon === "circle" ? "" : "ms-1"
                                    }`}
                                  >
                                    {subItem.label}
                                  </p>
                                ) : null}
                              </div>

                              {subItem.number ? (
                                <div className="d-flex align-items-center ">
                                  <span className="text-muted">
                                    {subItem?.number}
                                  </span>
                                </div>
                              ) : null}
                            </Link>
                          </li>
                        </React.Fragment>
                      ))}
                    </ul>
                  </Collapse>
                </li>
              ) : (
                <li
                  className={`d-flex align-items-center gap-1 mt-1 me-2  menu_item  ${
                    active === item.label ? "sub_menu_item_active" : ""
                  } `}
                  onClick={() => setActive(item.label)}
                >
                  <Link
                    className="d-flex align-items-center  gap-1 justify-content-between  w-100"
                    to={item.link ? item.link : "/#"}
                  >
                    <div className="d-flex align-items-center text-gray_light gap-1">
                      {item.icon ? (
                        <div className="p-0">
                          <FeatherIcon
                            icon={item?.icon}
                            className={`icon  ${
                              item?.icon === "tag" ? "tag_icon" : ""
                            } ${item?.color ? `text-${item?.color}` : ""} `}
                            size={14}
                          />
                        </div>
                      ) : null}
                      {item.label ? (
                        <p
                          className={`m-0 ms-1 text-gray_light ${
                            item.number > 0 ? "fw-semibold" : ""
                          }`}
                        >
                          {item?.label}
                        </p>
                      ) : null}
                    </div>
                    {item.number ? (
                      <div className="d-flex align-items-center ">
                        <span className="text-muted">{item?.number}</span>
                      </div>
                    ) : null}
                  </Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </React.Fragment>

      {/* end */}
    </div>
  );
};

export default Sidebar;
