import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authproviders";

const Login = () => {
  const { signinuser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handlelogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signinuser(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navber></Navber>

      <h2 className="text-2xl text-center mt-36 font-extrabold">
        Please login your account
      </h2>
      <form onSubmit={handlelogin} className="card-body lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Email address</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">
        Dont’t Have An Account?{" "}
        <Link className="text-red-700 font-extrabold" to="/register">
          Register
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
