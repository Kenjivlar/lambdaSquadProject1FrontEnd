import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import SideBarAdmin from "../components/Dashboard/SideBarAdmin";
import AdminForm from "../components/Dashboard/AdminForm";
import TopBar from "../components/Dashboard/TopBar";

const CreateAdminView: React.FC = () => {
  const navigate = useNavigate();

  type AccountForm = {
    email: string;
    password: string;
    accountTypeId: number | undefined;
    firstName: string;
    lastName: string;
    phoneNumber: string | undefined;
    creditScore: string | undefined;
  };

  const [account, setAccount] = useState<AccountForm>({
    email: "",
    password: "",
    accountTypeId: 1,
    firstName: "",
    lastName: "",
    phoneNumber: undefined,
    creditScore: undefined,
  });

  const [error, setError] = useState<string>("");

  // Methods
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/users/register";
    console.log("Regist user onSubmit executed");
    console.log(account)
  try {
    await axios.post(url, account);
    console.log('User Registered Successfully');
    navigate("/login");
  } catch (error) {
    console.error("Failed to Register:", error);
    setError("Registration failed. Please check your data.");
  }
  }
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //spread operator ... expand attributes
    setAccount({ ...account, [e.target.name]: e.target.value })
  }

  const onRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value !== account.password) {
      setError("Passwords do not match.");
    } else {
      setError(""); // Clear error when they match
    }

  }


  return (
    <div>
    <div className="row">
        <div className="col">
            <TopBar/>
        </div>
    </div>
    <div className="row">
        <div className="col-2">
            <SideBarAdmin/>
        </div>
        <div className="col-10">
            <AdminForm/>
        </div>
    </div>
</div>
  );
};

export default CreateAdminView;
