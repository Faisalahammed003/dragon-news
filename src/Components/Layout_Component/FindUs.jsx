import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold">Find Us On</h2>
      <div className="join flex join-vertical *:mb-2 *:bg-white">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram></FaInstagram> Instagram
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter></FaTwitter> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
