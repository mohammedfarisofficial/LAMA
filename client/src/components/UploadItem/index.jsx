import { spotifyImg, youtubeImg } from "../../contants/image";
import "./style.scss";
const UploadItem = ({ ...props }) => {
  return (
    <div {...props} className="upload-item-container">
      <div className="upload-item-icon">
        <img src={youtubeImg} alt="" />
      </div>
      <div className="upload-item-content">
        <div>
          <h4>Youtube</h4>
          <p>Upload youtube video</p>
        </div>
      </div>
    </div>
  );
};

export default UploadItem;
