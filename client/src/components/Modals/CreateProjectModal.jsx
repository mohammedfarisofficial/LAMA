import { useState } from "react";
// router
import { useNavigate } from "react-router-dom";
// comp
import InputBox from "../InputBox";
import Modal from "../Modal";
import Button from "../Button";

const CreateProjectModal = ({
  isOpen = true,
  onClose = () => {},
  deleteBtnMessage,
  onDeleteItem,
  itemBody,
  errorText,
  title = "Create Project",
  icon,
  isDeleting = false,
}) => {
  const [projectName, setProjectName] = useState("");

  const navigate = useNavigate();

  const projectCreateHandler = () => {
    console.log(projectName);
    navigate("projects");
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <h2>Create Project</h2>
      </Modal.Header>
      <Modal.Body>
        <InputBox
          value={projectName}
          setValue={setProjectName}
          label="Project name"
          placeholder="Enter project name..."
        />
      </Modal.Body>
      <div className="model-footer">
        <Button variant="cancel" onClick={onClose} label="Cancel" />
        <Button
          variant="primary"
          label="Create Project"
          onClick={projectCreateHandler}
        />
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
