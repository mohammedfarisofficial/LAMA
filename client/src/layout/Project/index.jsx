import "./style.scss";
// router
import { Outlet } from "react-router-dom";
// comp
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Project = () => {
  return (
    <div className="project-container">
      <Sidebar />
      <div className="project-inner">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Project;
