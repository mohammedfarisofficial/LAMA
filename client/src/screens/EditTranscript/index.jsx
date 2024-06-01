import "./style.scss";
import Title from "../../components/Title";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";

const EditTranscript = () => {
  const renderRightItem = () => {
    return (
      <div style={{ display: "flex" }}>
        <Button variant="cancel" label="Discard" />
        <Button variant="dark" label="Save & exit" />
      </div>
    );
  };
  return (
    <div className="edit-transcript-container">
      <Title title="Edit Transcript" RightItem={renderRightItem} />
      <TextArea />
    </div>
  );
};

export default EditTranscript;
