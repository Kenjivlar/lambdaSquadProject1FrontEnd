import React, { ReactHTMLElement, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const RegistrationhtmlForm: React.FC = () => {
  let navigate = useNavigate();

  type AccountForm = {
    email: string;
    password: string;
    accountTypeId: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    creditScore: number;
  };

  const [account, setAccount] = useState<AccountForm>({
    email: "",
    password: "",
    accountTypeId: 2,
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    creditScore: 0,
  });

  const {
    email,
    password,
    accountTypeId,
    firstName,
    lastName,
    phoneNumber,
    creditScore,
  } = account;

  // Methods
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/users/register";
    console.log("OnSubmit executed");
    console.log(account);
    try {
      await axios.post(url, account);
      console.log('post request Successfuly')
      navigate("/login"); // Redirect to home page
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  }
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //spread operator ... expand attributes
    setAccount({...account, [e.target.name]: e.target.value})
}
  // const handleCancel = () => {
  //   setFirstName("");
  //   setLastName("");
  // };
  // const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFirstName(e.target.value);
  // };
  // const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLastName(e.target.value);
  // };

  return (
    <div className="container">
      <main className="htmlForm-signin w-100 m-auto">
        <form onSubmit={(e) => onSubmit(e)}>
          <h1
            className="h3 mb-4 fw-bold text-primary text-center"
            style={{
              backgroundColor: "#e0f7fa",
              padding: "10px 20px",
              borderRadius: "500px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
              fontSize: "2rem",
            }}
          >
            {" "}
            Register Here{" "}
          </h1>
          <p>Please fill in this htmlForm to create an account.</p>

          <div className="border border-primary rounded p-4">
            <h5 className="text-primary fw-normal mb-3">User Details:</h5>

            <div className="row mb-3 align-items-center">
              <label htmlFor="firstName"className="col-sm-2 col-htmlForm-label">
                FirstName:
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required={true}
                  value={firstName}
                  onChange={(e)=>onInputChange(e)}/>
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label htmlFor="lastName" className="col-sm-2 col-htmlForm-label">
                LastName:
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  required={true}
                  value={lastName}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <label htmlFor="email" className="col-sm-2 col-htmlForm-label">
                Email address
              </label>
              <div className="col-sm-4">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                  required={true}
                  value={email}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label htmlFor="phone" className="col-sm-2 col-form-label">
                Phone
              </label>

              <div className="col-sm-4">
                <input 
                  type="tel" 
                  className="form-control" 
                  id="phone" name="phone" required={true} 
                  value={phoneNumber} onChange={(e)=>onInputChange(e)} />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label
                htmlFor="creditScore"
                className="col-sm-2 col-htmlForm-label"
              >
                Credit Score:
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  id="creditScore"
                  
                  required={true}
                  value={creditScore}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label htmlFor="password" className="col-sm-2 col-htmlForm-label">
                Password
              </label>
              <div className="col-sm-4">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required={true}
                  value={password}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
            </div>

             <div className="row mb-3 align-items-center">
              <label
                htmlFor="repeatPassword"
                className="col-sm-2 col-htmlForm-label"
              >
                Repeat Password
              </label>
              <div className="col-sm-4">
                <input
                  type="password"
                  className="htmlForm-control"
                  id="floatingPassword"
                />
              </div>
            </div> 
          </div>
          <br />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary rounded-pill px-5">
              Register
            </button>
            <button
              type="button"
              className="btn btn-primary rounded-pill px-5 mx-2"
      
            >
              Cancel
            </button>
          </div>

          <div className="container signin">
            <p>
              Already have an account? <a href="/login">Sign in</a>.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RegistrationhtmlForm;
