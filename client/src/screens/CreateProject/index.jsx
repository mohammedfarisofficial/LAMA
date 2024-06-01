import "./style.scss";
import { useRef, useState, useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import { closeModel, openModel } from "../../state/reducers/modelSlice";
// router
import { NavLink, useNavigate } from "react-router-dom";
// contants
import { officeWorkImg } from "../../contants/image";
// comp
import Button from "../../components/Button";
import CreateProjectModal from "../../components/Modals/CreateProjectModal";

const CreateProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="createprojects-container">
      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        deleteBtnMessage="Delete"
        itemBody="Are you sure you want to delete this item?"
        errorText=""
        title="Create Project"
        actionButtonLabel="Create Project"
      />
      <img className="createproject-image" src={officeWorkImg} alt="" />
      <h3>Create New Project</h3>
      <div style={{ position: "absolute", zIndex: 999 }}>hi</div>
      <p className="createproject-desc">
        A robust web application designed to streamline project planning, task
        assignment, and team collaboration, ensuring efficient workflow and
        productivity. It offers real-time progress tracking, comprehensive
        reporting features
      </p>
      <Button onClick={handleShowModal} label="New Project" variant="dark" />
      <NavLink to="projects">Goto projects</NavLink>
    </div>
  );
};

export default CreateProject;
