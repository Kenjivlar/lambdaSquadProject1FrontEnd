import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Account } from "../models/LoanApplication";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  
  type SignInForm = {
    email: string;
    password: string;
  };

  const [signIn, setSignIn] = useState<SignInForm>({
    email: "",
    password: "",
  });

  const [account, setAccount] = useState<Account | undefined>();
  const [error, setError] = useState("");

  useEffect(() => {
  }, []);

  const loadAccount = async () => {
    try {
      const url_accounts = "http://18.208.153.87:8000/api/accounts/session-check";
      const result = await axios.get(url_accounts, { withCredentials: true });
      console.log("Account data:", result.data);
      
      setAccount(result.data);
      
      if (result.data?.accountType?.id === 1) {
        console.log("Admin role detected, redirecting...");
        setAccount(undefined);
        navigate("/admin/dashboard");
      } else {
        console.log("User role detected, redirecting...");
        setAccount(undefined);
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.error("Failed to load account:", error);
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(account);
    setAccount(undefined);
    if (!signIn.email || !signIn.password) {
      setError("All fields are required.");
      return;
    }
    const url = "http://18.208.153.87:8000/api/accounts/login";
    try {
      await axios.post(url, signIn, {withCredentials:true});
      loadAccount();
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
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "500px" }}>
        <div className="card-body">
          <div className="text-center mb-4">
            <h2 className="text-primary fw-bold">Login</h2>
            <hr className="w-25 mx-auto my-3 border-primary" />
          </div>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={signIn.email}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={signIn.password}
                onChange={onInputChange}
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-pill"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;