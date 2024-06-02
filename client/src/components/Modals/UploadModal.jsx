import { useState } from "react";
// router
import { useNavigate } from "react-router-dom";
// comp
import InputBox from "../InputBox";
import Modal from "../Modal";
import Button from "../Button";

const UploadModal = ({
  isOpen = true,
  onClose = () => {},
  deleteBtnMessage,
  onDeleteItem,
  itemBody,
  errorText,
  title = "Create Project",
  icon,
  isDeleting = false,
  actionButtonLabel,
}) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  const projectCreateHandler = () => {
    console.log(name, desc);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <h2 style={{ color: "#7f23cf" }}>Upload</h2>
      </Modal.Header>
      <Modal.Body>
        <InputBox
          value={name}
          setValue={setName}
          label="Name"
          placeholder="Enter name..."
        />
        <InputBox
          value={desc}
          setValue={setDesc}
          label="Description"
          placeholder="Enter description..."
        />
      </Modal.Body>
      <div className="model-footer">
        <Button variant="cancel" onClick={onClose} label="Cancel" />
        <Button
          variant="primary"
          label={actionButtonLabel}
          onClick={projectCreateHandler}
        />
      </div>
    </Modal>
  );
};

export default UploadModal;
