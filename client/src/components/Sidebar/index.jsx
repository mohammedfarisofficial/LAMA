import { useState } from "react";
import "./style.scss";
// framer
import { motion } from "framer-motion";
// constants
import {
  sidebarTextVariants,
  sidebarVariants,
} from "../../contants/variants/variants";
import { sidebarLinks } from "../../contants/links";
// comp
import Button from "../Button";
import SidebarItem from "../SidebarItem";
import Logo from "../Logo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="sidebar-container"
      variants={sidebarVariants}
    >
      <Logo />
      <Button label="click" onClick={() => setIsOpen(!isOpen)} />
      {sidebarLinks.map((item, index) => (
        <>
          <SidebarItem isOpen={isOpen} {...item} />
        </>
      ))}
    </motion.div>
  );
};

export default Sidebar;
