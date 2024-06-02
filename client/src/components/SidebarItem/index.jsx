import "./style.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { sidebarTextVariants } from "../../contants/variants/variants";

const SidebarItem = ({ path, isOpen, index, title, step, icon }, key) => {
  const [isActive, setIsActive] = useState(false);

  return (
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
          backgroundColor: icon ? "transparent" : "rgba(199, 199, 199, 0.659)",
          marginRight: "5px",
        }}
        className="sidebar-item-step"
      >
        {step && <h4>{step}</h4>}
        {icon && <img src={icon} alt="" />}
      </div>
      <motion.div animate={{ width: isOpen ? "100%" : 0 }}>
        <motion.p
          className="sidebar-item-text"
          animate={isOpen ? "open" : "closed"}
          variants={sidebarTextVariants}
          transition={{ duration: 0.1 }}
        >
          {title}
        </motion.p>
      </motion.div>
    </NavLink>
  );
};

export default SidebarItem;
