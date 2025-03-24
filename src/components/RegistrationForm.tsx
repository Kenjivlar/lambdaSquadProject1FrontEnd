import React, { useState } from "react";
type Props = {}

const RegistrationhtmlForm = (props: Props) => {
  
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [creditScore, setCreditScore] = useState<number>(0);
  const [role, setRole] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [reTypePassword, setReTypePassword] = useState<string>("");

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
  };
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <div className="container">
      <main className="htmlForm-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-4 fw-bold text-primary text-center" style={{ 
  backgroundColor: '#e0f7fa', 
  padding: '10px 20px', 
  borderRadius: '500px', 
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', 
  fontSize: '2rem' 
}}> Register Here </h1>
 <p>Please fill in this htmlForm to create an account.</p>

         <div className="border border-primary rounded p-4">
            <h5 className="text-primary fw-normal mb-3">User Details:</h5>


            <div className="row mb-3 align-items-center">
              <label htmlFor="firstName" className="col-sm-2 col-htmlForm-label">
                FirstName:
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="htmlForm-control"
                  id="floatingInput"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label htmlFor="lastName" className="col-sm-2 col-htmlForm-label">
                LastName:
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="htmlForm-control"
                  id="floatingInput"
                  value={lastName}
                  onChange={handleLastNameChange}
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
                  className="htmlForm-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label htmlFor="phone" className="col-sm-2 col-htmlForm-label">
                Phone
              </label>
              <div className="col-sm-2">
                <select className="htmlForm-select">
                  <option value="+1">US +1</option>
                  <option value="+91">IN +91</option>
                  <option value="+61">AU +61</option>
                  <option value="+81">JP +81</option>
                  <option value="+52" selected>
                    MX +52
                  </option>
                  <option value="+44">GB +52</option>
                </select>
              </div>
              <div className="col-sm-4">
                <input type="tel" className="htmlForm-control" id="phone" />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label htmlFor="creditScore" className="col-sm-2 col-htmlForm-label">
                Credit Score:
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="htmlForm-control"
                  id="creditScore"
                  min="300"
                  max="850"
                  required
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
                  className="htmlForm-control"
                  id="floatingPassword"
                />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label htmlFor="repeatPassword" className="col-sm-2 col-htmlForm-label">
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
              onClick={handleCancel}
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
}


export default RegistrationhtmlForm;
