import "./style.scss";
import {
  buttonVariants,
  buttonBaseStyle,
} from "../../contants/variants/variants";
const Button = ({ variant = "danger", label = "Button", Icon, ...props }) => {
  const style = buttonVariants[variant] || buttonBaseStyle;

  return (
    <button className="button" {...props} style={style}>
      {Icon && <img className="button-icon" src={Icon} />}
      {label}
    </button>
  );
};

export default Button;
