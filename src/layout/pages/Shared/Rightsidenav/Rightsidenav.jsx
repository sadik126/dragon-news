import { FaGithub, FaGoogle } from "react-icons/fa";
import facebook from "../../../../assets/facebook.png";
import twitter from "../../../../assets/twitter.png";
import instagram from "../../../../assets/instagram.png";
import swimming from "../../../../assets/qZone1.png";
import classroom from "../../../../assets/qZone2.png";
import playground from "../../../../assets/qZone3.png";
const Rightsidenav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-extrabold">Login with</h2>
        <button className="btn text-blue-700 btn-outline w-full ">
          <FaGoogle></FaGoogle> Login with google
        </button>
        <button className="btn text-black-700 btn-outline w-full ">
          <FaGithub /> Login with github
        </button>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-extrabold">Find Us On</h2>
        <a href="" className="p-4 border flex text-lg ">
          <img className="mr-3 w-7" src={facebook} alt="" />
          <span>Facebook</span>
        </a>
        <a href="" className="p-4 border flex text-lg ">
          <img className="mr-3 w-7" src={twitter} alt="" />
          <span>Twitter</span>
        </a>
        <a href="" className="p-4 border flex text-lg ">
          <img className="mr-3 w-7" src={instagram} alt="" />
          <span>Instagram</span>
        </a>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold">Q-zone</h2>
        <div>
          <img src={swimming} alt="" />
          <img src={classroom} alt="" />
          <img src={playground} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Rightsidenav;
