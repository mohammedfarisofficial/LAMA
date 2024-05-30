import { Outlet } from "react-router-dom";
import Model from "../../components/Model";

const Root = () => {
  return (
    <>
      <Model />
      <Outlet />
    </>
  );
};

export default Root;
