import "./style.scss";
import {
  buttonVariants,
  buttonBaseStyle,
} from "../../contants/variants/variants";
const Button = ({ variant = "danger", label = "Button", ...props }) => {
  const style = buttonVariants[variant] || buttonBaseStyle;

  return (
    <button className="button" {...props} style={style}>
      {label}
    </button>
  );
};

export default Button;
