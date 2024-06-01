import { useState } from "react";
import "./style.scss";
// framer
import { motion } from "framer-motion";
// constants
import { sidebarVariants } from "../../contants/variants/variants";
import { sidebarLinks } from "../../contants/links";
import { leftIcon, settingsIcon } from "../../contants/icons";
// comp
import SidebarItem from "../SidebarItem";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="sidebar-container"
      variants={sidebarVariants}
    >
      <div className="sidebar-route-container">
        {sidebarLinks.map((item, index) => (
          <>
            <SidebarItem key={index} isOpen={isOpen} {...item} />
          </>
        ))}
      </div>
      <div className="sidebar-route-container">
        <SidebarItem
          path="settings"
          title="Settings"
          isOpen={isOpen}
          icon={settingsIcon}
        />
      </div>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="sidebar-action-btn"
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.8 }}
        transition={{ bounce: true }}
      >
        <motion.img
          draggable="false"
          animate={{ rotateZ: isOpen ? "0deg" : "180deg" }}
          src={leftIcon}
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
