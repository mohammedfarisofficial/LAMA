import "./style.scss";
import Title from "../../components/Title";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import Breadcrumbs from "../../components/Breadcrumps";
import { useNavigate } from "react-router-dom";

const EditTranscript = () => {
  const navigate = useNavigate();
  const renderRightItem = () => {
    return (
      <div style={{ display: "flex" }}>
        <Button onClick={() => navigate(-1)} variant="cancel" label="Discard" />
        <Button variant="dark" label="Save & exit" />
      </div>
    );
  };
  return (
    <div className="edit-transcript-container">
      <Breadcrumbs />
      <Title title="Edit Transcript" RightItem={renderRightItem} />
      <TextArea />
    </div>
  );
};

export default EditTranscript;
