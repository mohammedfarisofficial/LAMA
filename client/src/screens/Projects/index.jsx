import "./style.scss";
import { useState } from "react";
//comp
import Title from "../../components/Title";
import Button from "../../components/Button";
import ProjectItem from "../../components/ProjectItem";
import CreateProjectModal from "../../components/Modals/CreateProjectModal";
//redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createIcon } from "../../contants/icons";
//hooks
import useDisclosure from "../../hooks/useDisclosure";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <CreateProjectModal
        isOpen={isOpen}
        onClose={onClose}
        deleteBtnMessage="Delete"
        itemBody="Are you sure you want to delete this item?"
        errorText=""
        title="Create Project"
      />
      <div className="projects-back-btn">go to home</div>
      <Title
        RightItem={() => (
          <Button
            variant="dark"
            label="New Project"
            onClick={onOpen}
            Icon={createIcon}
          />
        )}
      />
      <div className="projects-list">
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
      </div>
    </div>
  );
};

export default Projects;
