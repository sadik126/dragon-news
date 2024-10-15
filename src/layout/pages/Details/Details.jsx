import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">this is details</div>
        <div>
          <Rightsidenav></Rightsidenav>
        </div>
      </div>
    </div>
  );
};

export default Details;
