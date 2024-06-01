import "./style.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { sidebarTextVariants } from "../../contants/variants/variants";
import { settingsIcon } from "../../contants/icons";

const SidebarItem = ({ path, isOpen, index, title, step, icon }, key) => {
  return (
    <NavLink
      key={key}
      to={`/project/${path}`}
      className={({ isActive }) =>
        isActive ? "active sidebar-item-container" : "sidebar-item-container"
      }
    >
      {/* <img className="sidebaritem-icon" src={settingsIcon} alt="" /> */}
      <div
        style={{
          backgroundColor: icon ? "transparent" : "rgba(199, 199, 199, 0.659)",
          marginRight: "5px",
        }}
        className="sidebar-item-step"
      >
        {step && <h4>{step}</h4>}
        {icon && <img src={icon} alt="" />}
      </div>
      {/* <div className={isOpen ? "sidebar-item-text-container" : "sidebar-item-text-container hide"}> */}
      <motion.p
        className="sidebar-item-text"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarTextVariants}
      >
        {title}
      </motion.p>
      {/* </div> */}
    </NavLink>
  );
};

export default SidebarItem;
