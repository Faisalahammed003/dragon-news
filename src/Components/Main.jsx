import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Main = () => {
  const { data } = useLoaderData();

  return (
    <>
      <h2 className="font-semibold mb-2">Dragon News Home</h2>
      <small className="text-gray-400">
        ({data.length})News Found in This Category
      </small>
      <div>
        {data.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </>
  );
};

export default Main;
