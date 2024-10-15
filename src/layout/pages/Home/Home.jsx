import { useLoaderData } from "react-router-dom";
import Breakingnews from "../Breakingnews";
import Header from "../Shared/Header/Header";
import Leftsidenav from "../Shared/Leftsidenav/Leftsidenav";
import Navber from "../Shared/Navber/Navber";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import Newscard from "./Newscard/Newscard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <Breakingnews></Breakingnews>
      <Navber></Navber>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <Leftsidenav></Leftsidenav>
        </div>
        <div className="border md:col-span-2">
          <h2 className="text-4xl">Dragon news home</h2>
          <div>
            {news.map((n) => (
              <Newscard key={n._id} news={n}></Newscard>
            ))}
          </div>
        </div>
        <div className="border">
          <Rightsidenav></Rightsidenav>
        </div>
      </div>
    </div>
  );
};

export default Home;
