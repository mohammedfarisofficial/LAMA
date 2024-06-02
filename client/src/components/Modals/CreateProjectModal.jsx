import { useState } from "react";
// router
import { useLocation, useNavigate } from "react-router-dom";
// comp
import InputBox from "../InputBox";
import Modal from "../Modal";
import Button from "../Button";
// axios
import { LAMAClient } from "../../utils/axios";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../state/reducers/projectSlice";

const CreateProjectModal = ({
  isOpen = true,
  onClose = () => {},
  deleteButtonLabel,
  onDeleteItem,
  itemBody,
  errorText,
  title = "Create Project",
  icon,
  isDeleting = false,
  actionButtonLabel,
}) => {
  const [projectName, setProjectName] = useState("");
  const [projectNameErr, setProjectNameErr] = useState("");

  const { email } = useSelector((state) => state.auth.user) || "";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const pathname = location.pathname.split("/").filter((x) => x)[0];

  const projectCreateHandler = async () => {
    try {
      if (projectName !== "") {
        setProjectNameErr("");
        const response = await LAMAClient.post("api/v1/project/create", {
          projectName,
          userEmail: email,
        });
        const { data } = response;
        if (data) {
          dispatch(setProjects(data));
          setProjectName("");
          if (pathname === "projects") {
            onClose();
          } else {
            onClose();
            navigate("/projects");
          }
        }
        console.log(data);
      } else {
        setProjectNameErr("project name can't be empty!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <h2>{title}</h2>
      </Modal.Header>
      <Modal.Body>
        <InputBox
          value={projectName}
          setValue={setProjectName}
          label="Project name"
          placeholder="Enter project name..."
          error={projectNameErr}
        />
      </Modal.Body>
      <div className="model-footer">
        <Button variant="cancel" onClick={onClose} label={deleteButtonLabel} />
        <Button
          variant="primary"
          label={actionButtonLabel}
          onClick={projectCreateHandler}
        />
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
