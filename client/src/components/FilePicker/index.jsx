import "./style.scss";
//constants
import { uploadImg } from "../../contants/image";
//comp
import Button from "../Button";
// framer 
import { motion } from "framer-motion";

const FilePicker = () => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className="filepicker-container"
    >
      <img className="filepicker-upload-img" src={uploadImg} alt="" />
      <p className="filepicker-upload-title">
        Select a file or drag and drop here (Podcast Media or Transcription
        Text)
      </p>
      <p className="filepicker-upload-para">
        MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
      </p>
      <Button variant="primary" label="Select File" />
    </motion.div>
  );
};

export default FilePicker;
