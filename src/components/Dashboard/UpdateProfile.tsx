import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UpdateProfile: React.FC = () => {
  const navigate = useNavigate();

  type AccountForm = {
    firstName: string;
    lastName: string;
    phoneNumber: string | undefined;
    creditScore: string | undefined;
  };

  const [account, setAccount] = useState<AccountForm>({
    firstName: "",
    lastName: "",
    phoneNumber: undefined,
    creditScore: undefined,
  });

  const [error, setError] = useState<string>("");

  // Methods
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = "http://localhost:8000/api/users/edit-my-info";
        const payload = {
            ...account,
            creditScore: account.creditScore !== undefined ? Number(account.creditScore) : undefined,
            
        };
        console.log("Regist user onSubmit executed");
        console.log(payload)
    try {
        await axios.put(url, payload, {withCredentials:true});
        console.log('User updated Successfully');
        navigate("/user/dashboard");
    } catch (error) {
        console.error("Failed to Register:", error);
        setError("Registration failed. Please check your data.");
    }
  }
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //spread operator ... expand attributes
    setAccount({ ...account, [e.target.name]: e.target.value })
  }



  return (
    <div className="container pt-4">
      <main className="htmlForm-signin w-100 m-auto">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="border border-primary rounded p-4">
            <h5 className="text-primary fw-normal mb-3">Update User:</h5>

            <div className="row mb-3 align-items-center">
              <label htmlFor="firstName" className="col-sm-2 col-htmlForm-label">
                FirstName:
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={account.firstName}
                  onChange={(e) => onInputChange(e)} />
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
                  placeholder="Last Name"
                  required
                  value={account.lastName}
                  onChange={(e) => onInputChange(e)}
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
                  id="phone"
                  name="phoneNumber"
                  placeholder="Phone number"
                  required
                  value={account.phoneNumber}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onChange={(e) => {
                    if (/^\d*$/.test(e.target.value)) {
                      onInputChange(e)
                    }
                  }} />
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
                  name="creditScore"
                  placeholder="Credit Score"
                  required
                  value={account.creditScore}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary rounded-pill px-5">
              Update
            </button>
            <button
              type="button"
              className="btn btn-primary rounded-pill px-5 mx-2"
              onClick={() => navigate("/user/dashboard")}
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default UpdateProfile;
