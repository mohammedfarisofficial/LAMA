import { Outlet } from "react-router-dom";
// comp
import Navbar from "../../components/Navbar";

const RootLayout = () => {
  return (
    <div style={{ marginTop: "7vh" }}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
