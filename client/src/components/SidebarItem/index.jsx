import "./style.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { sidebarTextVariants } from "../../contants/variants/variants";

const SidebarItem = ({ path, isOpen }) => {
  return (
    <NavLink
      to={`/project/${path}`}
      className={({ isActive }) =>
        isActive ? "active sidebar-item-container" : "sidebar-item-container"
      }
    >
      <motion.p
        animate={isOpen ? "open" : "closed"}
        variants={sidebarTextVariants}
      >
        {path}
      </motion.p>
    </NavLink>
  );
};

export default SidebarItem;
