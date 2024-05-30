import Logo from "../Logo";
import "./style.scss";
import { navbarLinks } from "../../contants/links";

const Navbar = ({ isDashboard = false }) => {
  return (
    <div className="navbar-container">
      {isDashboard ? (
        <>hi</>
      ) : (
        <>
          <Logo />
          <div className="navbar-icons">
            {navbarLinks.map(({ path, icon }, index) => (
              <img key={index} className="navbar-icon" src={icon} alt="" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
