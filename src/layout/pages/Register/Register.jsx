import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authproviders";

const Register = () => {
  const { createuser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");

    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    createuser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navber></Navber>

      <h2 className="text-2xl text-center mt-36 font-extrabold">
        Please Register your account
      </h2>
      <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            name="photo"
            className="input input-bordered"
          />
        </div>
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
          <button className="btn btn-secondary">Register</button>
        </div>
      </form>
      <p className="text-center">
        Do you have an Account?{" "}
        <Link className="text-red-700 font-extrabold" to="/login">
          Please login here
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
