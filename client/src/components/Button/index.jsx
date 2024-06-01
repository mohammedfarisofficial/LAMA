import "./style.scss";
//framer
import { motion } from "framer-motion";
//contants
import {
  buttonVariants,
  buttonBaseStyle,
} from "../../contants/variants/variants";

const Button = ({ variant = "danger", label = "Button", Icon, ...props }) => {
  const style = buttonVariants[variant] || buttonBaseStyle;

  return (
    <motion.button
      whileHover={{ scale: 0.97, opacity: 0.8 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
      className="button"
      {...props}
      style={style}
    >
      {Icon && <img className="button-icon" src={Icon} />}
      {label}
    </motion.button>
  );
};

export default Button;
