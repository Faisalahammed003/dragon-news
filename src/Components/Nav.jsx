import { Link } from "react-router-dom";
import user from "../assets/user.png";

const Nav = () => {
  return (
    <div className=" flex justify-between items-center my-3 ">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="logo">
          <img src={user} alt="" />
        </div>
        <div>
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
