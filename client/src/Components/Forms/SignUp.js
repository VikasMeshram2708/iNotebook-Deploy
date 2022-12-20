import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [imageUri, setImageUri] = useState("");

  return (
    <>
      <form className="p-4 p-md-5 border rounded-3 bg-light container mt-5">
        <h3 className="form-label">Sign Up</h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="github"
            placeholder="github"
          />
          <label>Github Link</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="linkdedin"
            placeholder="linkedin"
          />
          <label>Linkedin Link</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="image uri"
            id="imageUri"
          />
          <label>Image Uri</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <Link to="/signIn">Already a User</Link>
          </label>
        </div>
        <button className="w-100 btn btn-primary rounded fs-5" type="submit">
          Sign up
        </button>
        <hr className="my-4" />
        <small className="text-muted">
          By clicking Sign up, you agree to the terms of use.
        </small>
      </form>
    </>
  );
};

export default SignUp;
