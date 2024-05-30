import "./style.scss";
// router
import { NavLink } from "react-router-dom";

const CreateProject = () => {
  return (
    <div className="projects-container">
      <NavLink to="projects">Goto project</NavLink>
    </div>
  );
};

export default CreateProject;
