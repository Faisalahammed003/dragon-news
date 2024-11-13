import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LetesNews = () => {
  return (
    <div className="flex gap-2 justify-center items-center bg-base-200">
      <p className="  bg-[#D72050] text-base-100 p-2 mx-3 px-5">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default LetesNews;
