import "./style.scss";
import { useState } from "react";
// comp
import Division from "../../Division";
import InputBox from "../../InputBox";
import Title from "../../Title";
import Button from "../../Button";
import { uploadIcon } from "../../../contants/icons";

const DisplayTab = () => {
  const [fontSize, setFontSize] = useState();
  return (
    <div className="displaytab-container">
      <div className="displaytab-theme-container">
        <div className="displaytab-items">
          <InputBox />
          <InputBox />
        </div>
        <div className="displaytab-items">
          <InputBox
            label="Font Size (in px)"
            placeholder="Enter font size..."
          />
          <InputBox
            label="Chat Height (in % of total screen)"
            placeholder="Enter chat height..."
          />
        </div>
      </div>
      <Division />
      <div className="displaytab-chat-container">
        <Title title="Chat icon" />
        <div className="displaytab-items">
          <InputBox />
          <InputBox />
        </div>
        <div className="displaytab-items">
          <InputBox
            label="Distance from bottom (in px)"
            placeholder="Enter distance from bottom..."
          />
          <InputBox
            label="Horizontal Distance (in px)"
            placeholder="Enter horizontal distance..."
          />
        </div>
      </div>
      <div className="displaytab-bot-container">
        <div className="displaytab-bot-profile"></div>
        <div className="displaytab-bot-uploadimage">
          <Button
            style={{ marginBottom: 0 }}
            variant="primary"
            label="Upload Image"
            Icon={uploadIcon}
          />
          <p>Recommended Size: 48x48px</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayTab;
