import { uploadImg } from "../../contants/image";
import Button from "../Button";
import "./style.scss";

const FilePicker = () => {
  return (
    <div className="filepicker-container">
      <img className="filepicker-upload-img" src={uploadImg} alt="" />
      <p className="filepicker-upload-title">
        Select a file or drag and drop here (Podcast Media or Transcription
        Text)
      </p>
      <p className="filepicker-upload-para">
        MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
      </p>
      <Button variant="primary" label="Select File" />
    </div>
  );
};

export default FilePicker;
