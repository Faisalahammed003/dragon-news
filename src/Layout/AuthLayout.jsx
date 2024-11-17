import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#f3f3f3]">
      <header className="py-3 w-11/12 mx-auto">
        <Nav></Nav>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
