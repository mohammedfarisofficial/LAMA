import "./style.scss";
import { youtubeImg } from "../../contants/image";
// framer
import { motion } from "framer-motion";
const UploadItem = ({ ...props }) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.01 }}
      className="upload-item-container"
      {...props}
    >
      <div className="upload-item-icon">
        <img src={youtubeImg} alt="" />
      </div>
      <div className="upload-item-content">
        <div>
          <h4>Youtube</h4>
          <p>Upload youtube video</p>
        </div>
      </div>
    </motion.div>
  );
};

export default UploadItem;
