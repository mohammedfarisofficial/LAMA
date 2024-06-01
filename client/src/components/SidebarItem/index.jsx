import "./style.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { sidebarTextVariants } from "../../contants/variants/variants";

const SidebarItem = ({ path, isOpen, index, title, step, icon }, key) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
      className={`sidebar-item-parent-container ${isActive ? "active" : ""}`}
    >
      <NavLink
        key={key}
        to={`/project/${path}`}
        className={({ isActive }) => {
          setIsActive(isActive);
          return isActive
            ? "active sidebar-item-container"
            : "sidebar-item-container";
        }}
      >
        <div
          style={{
            backgroundColor: icon
              ? "transparent"
              : "rgba(199, 199, 199, 0.659)",
            marginRight: "5px",
          }}
          className="sidebar-item-step"
        >
          {step && <h4>{step}</h4>}
          {icon && <img src={icon} alt="" />}
        </div>
        <motion.p
          className="sidebar-item-text"
          animate={isOpen ? "open" : "closed"}
          variants={sidebarTextVariants}
        >
          {title}
        </motion.p>
      </NavLink>
    </motion.div>
  );
};

export default SidebarItem;
