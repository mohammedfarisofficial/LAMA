import "./style.scss";
import { useEffect } from "react";
// router
import { NavLink } from "react-router-dom";
// contants
import { officeWorkImg } from "../../contants/image";
import { homeIcon } from "../../contants/icons";
// comp
import Button from "../../components/Button";
import CreateProjectModal from "../../components/Modals/CreateProjectModal";
import RegisterModal from "../../components/Modals/RegisterModal";
// hooks
import useDisclosure from "../../hooks/useDisclosure";
// redux
import { useSelector } from "react-redux";

const CreateProject = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const {
    onClose: onLoginClose,
    onOpen: onLoginOpen,
    isOpen: isLoginOpen,
  } = useDisclosure();

  const { isLogged } = useSelector((state) => state.auth);

  // for register modal
  useEffect(() => {
    if (!isLogged) {
      onLoginOpen();
    }
  }, []);
  return (
    <div className="createprojects-container">
      <CreateProjectModal
        isOpen={isOpen}
        onClose={onClose}
        deleteButtonLabel="Cancel"
        itemBody="Are you sure you want to delete this item?"
        errorText=""
        title="Create Project"
        actionButtonLabel="Create Project"
      />
      <RegisterModal
        isOpen={isLoginOpen}
        onClose={onLoginClose}
        deleteButtonLabel="Close"
        itemBody="Are you sure you want to delete this item?"
        errorText=""
        title="Register Email"
        actionButtonLabel="Register"
      />
      <div className="createproject-backbtn">
        <Button variant="outline" label="Back to home" Icon={homeIcon} />
      </div>
      <img className="createproject-image" src={officeWorkImg} alt="" />
      <h3>Create New Project</h3>
      <p className="createproject-desc">
        A robust web application designed to streamline project planning, task
        assignment, and team collaboration, ensuring efficient workflow and
        productivity. It offers real-time progress tracking, comprehensive
        reporting features
      </p>
      <Button onClick={onOpen} label="New Project" variant="dark" />
      <NavLink to="projects">Goto projects</NavLink>
    </div>
  );
};

export default CreateProject;
