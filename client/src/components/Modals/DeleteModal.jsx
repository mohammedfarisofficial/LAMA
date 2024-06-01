
// comp 
import InputBox from "../InputBox";
import Modal from "../Modal";
import Button from "../Button";

const DeleteModal = ({
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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <h2>Create Project</h2>
      </Modal.Header>
      <Modal.Body>
        <InputBox label="Project name" placeholder="Enter project name..." />
      </Modal.Body>
      <div className="model-footer">
        <Button variant="cancel" onClick={onClose} label="Cancel"/>
        <Button variant="primary" label="Create Project" onClick={() => {}}/>
      </div>
    </Modal>
  );
};

export default DeleteModal;
