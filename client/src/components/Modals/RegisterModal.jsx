import { useState } from "react";
// router
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { setLogin } from "../../state/reducers/authSlice";
// comp
import InputBox from "../InputBox";
import Modal from "../Modal";
import Button from "../Button";
import { LAMAClient } from "../../utils/axios";
import { validEmailChecker } from "../../utils/validEmailChecker";

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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerHandler = async () => {
    try {
      if (email !== "") {
        setEmailErr("");
        const isValidEmail = validEmailChecker(email);

        if (isValidEmail) {
          const formData = { name, email };
          const response = await LAMAClient.post(
            "api/v1/auth/register-login",
            formData
          );
          const { data } = response;
          if (data) {
            dispatch(setLogin(data));
            //   clear state
            setName("");
            setEmail("");

            onClose();
          }
        } else {
          setEmailErr("Invalid email address!");
        }
      } else {
        setEmailErr("email can't be empty!");
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
          value={email}
          setValue={setEmail}
          label="Email"
          placeholder="Enter your email..."
          error={emailErr}
          type="email"
        />
        <InputBox
          value={name}
          setValue={setName}
          label="Name"
          placeholder="Enter your name..."
        />
      </Modal.Body>
      <div className="model-footer">
        <Button variant="cancel" onClick={onClose} label={deleteButtonLabel} />
        <Button
          variant="primary"
          label={actionButtonLabel}
          onClick={registerHandler}
        />
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
