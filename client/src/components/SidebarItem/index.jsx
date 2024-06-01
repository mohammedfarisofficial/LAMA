import "./style.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { sidebarTextVariants } from "../../contants/variants/variants";

const SidebarItem = ({ path, isOpen, index, title, step }, key) => {
  return (
    <NavLink
      key={key}
      to={`/project/${path}`}
      className={({ isActive }) =>
        isActive ? "active sidebar-item-container" : "sidebar-item-container"
      }
    >
      {/* <img className="sidebaritem-icon" src={settingsIcon} alt="" /> */}
      <div className="sidebar-item-step">
        <h4>{step}</h4>
      </div>
      <motion.p
        className="sidebar-item-text"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarTextVariants}
      >
        {title}
      </motion.p>
    </NavLink>
  );
};

export default SidebarItem;
