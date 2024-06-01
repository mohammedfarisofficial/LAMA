import "./style.scss";
//framer
import { motion } from "framer-motion";

const Badge = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className="badge-container"
    >
      {children}
    </motion.div>
  );
};

export default Badge;
