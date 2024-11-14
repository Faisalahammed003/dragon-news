import { FaStar, FaEye } from "react-icons/fa";
import { BsShare } from "react-icons/bs";

const NewsCard = ({ news }) => {
  return (
    <div className="card my-5 bg-base-100 shadow-xl p-4 max-w-lg mx-auto">
      <div className="flex items-center space-x-4">
        <img
          src={news.author?.img}
          alt={`Author ${news.author?.name}`}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="font-bold text-gray-800">{news.author?.name}</h2>
          <p className="text-sm text-gray-500">{news.author?.published_date}</p>
        </div>
      </div>

      <h3 className="font-semibold text-xl mt-4">{news.title}</h3>

      <img
        src={news.image_url}
        alt={`Article ${news.title}`}
        className="w-full h-48 object-cover mt-4 rounded-lg"
      />

      <p className="text-gray-600 mt-4 text-sm">
        {news.details?.length > 150
          ? `${news.details.slice(0, 150)}...`
          : news.details}
      </p>

      <button className="text-blue-500 mt-2">Read More</button>

      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
        <div className="flex items-center space-x-2">
          <FaStar className="text-yellow-400" />
          <span>{news.rating?.number || "N/A"}</span>{" "}
          {/* Render correct rating */}
        </div>

        <div className="flex items-center space-x-2">
          <FaEye />
          <span>{news.total_view || "0"}</span> {/* Render correct views */}
        </div>

        <button className="text-gray-400 hover:text-gray-600">
          <BsShare />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
