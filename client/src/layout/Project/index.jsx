import "./style.scss";
// router
import { Outlet } from "react-router-dom";
// comp
import Sidebar from "../../components/Sidebar";

const Project = () => {
  return (
    <div className="project-container">
      <Sidebar />
      <div className="project-inner">
        <Outlet />
      </div>
    </div>
  );
};

export default Project;
