import "./style.scss";
// toggle
import "react-toggle/style.css";
import Toggle from "react-toggle";

const Switch = ({ title, subTitle, value, setValue }) => {
  return (
    <div className="switch-container">
      <div className="switch-content">
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
      <Toggle
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
        icons={false}
      />
    </div>
  );
};

export default Switch;
