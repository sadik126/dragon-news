import logo from "../../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto mt-14" src={logo} alt="" />
      <p className="mt-3 text-xl">Journalism Without Fear or Favour</p>
      <p className="leading-8">
        {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Header;
