import "./style.scss";
// breadcrump
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbDivider,
} from "@fluentui/react-breadcrumb";
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { navbarLinks } from "../../contants/links";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div className="breadcrumb-container">
      <Breadcrumb aria-label="breadcrumb">
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <>
              <BreadcrumbItem key={to} current={true}>
                <h4 style={{ color: "#7f23cf" }}>
                  {capitalizeFirstLetter(value)}
                </h4>
              </BreadcrumbItem>
            </>
          ) : (
            <>
              <BreadcrumbItem>
                <p style={{ color: "grey" }}>{capitalizeFirstLetter(value)}</p>
              </BreadcrumbItem>
              <BreadcrumbDivider />
            </>
          );
        })}
      </Breadcrumb>
      <div className="navbar-icons">
        {navbarLinks.map(({ path, icon }, index) => (
          <img key={index} className="navbar-icon" src={icon} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
