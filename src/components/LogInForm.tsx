import React, { useState } from "react";
import axios from 'axios';


const LoginForm: React.FC = () => {

  type SignInForm = {
    email: string;
    password: string;
  };

  const [signIn, setSignIn] = useState<SignInForm>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signIn.email || !signIn.password) {
      setError("All fields are required.");
      return;
    }
    const url = "http://localhost:8000/api/users/login";
    console.log("OnSubmit executed");
    //console.log(signIn);
    try {
      await axios.post(url, signIn);
      console.log('Login Successfuly')
    } catch (error) {
      console.error("Login Failed:", error);
    }
  }
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignIn({ ...signIn, [name]: value })

    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setError("Invalid email format.");
    } else {
      setError("");
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "65vh" }}>
      <main
        className="form-signin w-100"
        style={{
          maxWidth: "800px",
          padding: "30px",
          border: "2px solid #007bff", // Border color
          borderRadius: "8px", // Optional: Round corners, remove if you want a sharp square border
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Adds shadow for depth
        }}
      >
        <form onSubmit={onSubmit}>

          <h1 className="h3 mb-4 fw-bold text-primary text-center" style={{
            backgroundColor: '#e0f7fa',
            padding: '10px 20px',
            borderRadius: '8px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '2rem'
          }}>
            Please sign in
          </h1>


          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email-Id</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={signIn.email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={signIn.password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}


          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Remember me
            </label>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary rounded-pill px-5"
            >
              Sign-in
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;
