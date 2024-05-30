import "./style.scss";
//constants
import { LogoImg } from "../../contants/image";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo-image" src={LogoImg} alt="" />
      <h3>LAMA.</h3>
    </div>
  );
};

export default Logo;
