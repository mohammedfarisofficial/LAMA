import "./style.scss";
//framer
import { motion } from "framer-motion";
// router
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ ...props }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      {...props}
      initial={{ scale: 0.95, y: 5 }}
      animate={{ scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="project-item-container"
    >
      <div className="project-item-profile">
        <h1>NP</h1>
      </div>
      <div className="project-item-content">
        <div>
          <h4>Sample Project</h4>
          <p>4 Episodes</p>
        </div>
        <div>
          <p className="project-item-date">Last edited a week ego</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
