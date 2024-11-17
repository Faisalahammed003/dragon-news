import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const Nav = () => {
  const { parson, logOut } = useContext(AuthContext);
  return (
    <div className=" flex justify-between items-center my-3 ">
      <div className="">
        <small>{parson && parson.email}</small>
      </div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="logo">
          <img src={userIcon} alt="" />
        </div>
        <div>
          {parson && parson?.email ? (
            <button onClick={logOut} className="btn btn-neutral rounded-none">
              Log-Out
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
