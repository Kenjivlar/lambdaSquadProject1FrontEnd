import { Container } from "@mui/material";
import React, { useState } from "react";

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [creditScore, setCreditScore] = useState(0);
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="container">
      <main class="form-signin w-100 m-auto">
        <form>
          <img
            class="mb-4"
            src="/docs/{{< param docs_version >}}/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-bold">Register</h1>
          <p>Please fill in this form to create an account.</p>
          <div class="border border-primary rounded p-4">
            <h5 class="text-primary fw-normal mb-3">User Details:</h5>
            <div class="row mb-3 align-items-center">
              <label for="firstName" className="col-sm-2 col-form-label">
                FirstName:
              </label>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="lastName" className="col-sm-2 col-form-label">
                LastName:
              </label>
              <div class="col-sm-4">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="dateOfBirth" className="col-sm-2 col-form-label">
                Date of Birth:
              </label>
              <div class="col-sm-4">
                <input type="date" class="form-control" id="dob" required />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="email" className="col-sm-2 col-form-label">
                Email address
              </label>
              <div class="col-sm-4">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="phone" className="col-sm-2 col-form-label">
                Phone
              </label>
              <div class="col-sm-2">
                <select class="form-select">
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
              <div class="col-sm-4">
                <input type="tel" class="form-control" id="phone" />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="creditScore" className="col-sm-2 col-form-label">
                Credit Score:
              </label>
              <div class="col-sm-4">
                <input
                  type="number"
                  class="form-control"
                  id="creditScore"
                  min="300"
                  max="850"
                  required
                />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="role" class="col-sm-2 col-form-label">
                Role:
              </label>
              <div class="col-sm-4">
                <select class="form-select" id="role">
                  <option value="" selected>
                    Choose...
                  </option>
                  <option value="USER">USER</option>
                  <option value="MANAGER">MANAGER</option>
                </select>
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-4">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="repeatPassword" className="col-sm-2 col-form-label">
                Repeat Password
              </label>
              <div class="col-sm-4">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                />
              </div>
            </div>
          </div>

          <div class="border border-primary rounded p-4">
            <h5 class="text-primary fw-normal mb-3">Mailing Address:</h5>

            <div class="row mb-3 align-items-center">
              <label for="street" class="col-sm-2 col-form-label">
                Street Address:
              </label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="street" />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="city" class="col-sm-2 col-form-label">
                City:
              </label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="city" />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="state" class="col-sm-2 col-form-label">
                State/Province:
              </label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="state" />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="zip" class="col-sm-2 col-form-label">
                ZIP/Postal Code:
              </label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="zip" />
              </div>
            </div>

            <div class="row mb-3 align-items-center">
              <label for="country" class="col-sm-2 col-form-label">
                Country:
              </label>
              <div class="col-sm-4">
                <select class="form-select" id="country">
                  <option value="" selected>
                    Choose...
                  </option>
                  <option value="US">US United States</option>
                  <option value="CA">CA Canada</option>
                  <option value="UK">GB United Kingdom</option>
                  <option value="IN">IN India</option>
                  <option value="AU">AU Australia</option>
                  <option value="MX">MX Mexico</option>
                </select>
              </div>
            </div>
          </div>

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary rounded-pill px-4">
              Register
            </button>
            <button
              type="button"
              class="btn btn-secondary rounded-pill px-4 mx-2"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>

          <div class="container signin">
            <p>
              Already have an account? <a href="/login">Sign in</a>.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
