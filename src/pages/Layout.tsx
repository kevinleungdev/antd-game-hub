import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div style={{ padding: "0.5em" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
