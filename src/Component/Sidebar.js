import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDarkMode, MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import ThemeContext from "../context/ThemeContext";

const Sidebar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/user", icon: AiOutlineUser },
    { name: "messages", link: "/messages", icon: FiMessageSquare },
    {
      name: "analytics",
      link: "/analytics",
      icon: TbReportAnalytics,
      margin: true,
    },
    { name: "File Manager", link: "/File Manager", icon: FiFolder },
    { name: "Cart", link: "/Cart", icon: FiShoppingCart },
    { name: "Dark Mode", link: "", icon: MdOutlineDarkMode, margin: true },
    { name: "Setting", link: "/Setting", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-[#0e0e0e] h-screen ${
        open ? "w-60" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) =>
          menu?.name == "Dark Mode" ? (
            <div
              onClick={handleClick}
              className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
            </div>
          ) : (
            <NavLink
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
            </NavLink>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
