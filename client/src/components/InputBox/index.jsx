import "./style.scss";
const InputBox = ({
  size = "full",
  label = "label",
  placeholder = "placeholder",
  error = true,
}) => {
  return (
    <div className="input-container">
      <p className="input-label">{label}</p>
      <input
        style={{ width: size === "half" ? "50%" : "100%" }}
        placeholder={placeholder}
      />
      {error && <p className="input-error">error message show here</p>}
    </div>
  );
};

export default InputBox;
