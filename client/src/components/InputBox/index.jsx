import "./style.scss";
const InputBox = ({
  size = "full",
  label = "label",
  placeholder = "placeholder",
  error = "",
  ...props
}) => {
  return (
    <div className="input-container">
      <p className="input-label">{label}</p>
      <input
        style={{ width: size === "half" ? "50%" : "100%" }}
        placeholder={placeholder}
        {...props}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default InputBox;
