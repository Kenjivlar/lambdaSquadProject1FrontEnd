import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Account } from "../../models/LoanApplication";
import { useEffect, useState } from "react";

const SideBar:React.FC = () => {
  const navigate = useNavigate();

  const [account, setAccount] = useState<Account>();

  const [error, setError] = useState("");

  useEffect(() => {
    loadAccount();
  }, []);
    

  const loadAccount= async () => {
    const url_accounts = "http://localhost:8000/api/accounts/session-check"
    const result = await axios.get(url_accounts, { withCredentials:true });
    console.log("Account");
    console.log(result.data);
    setAccount(result.data);
  }


const handleLogout = async () => {
  if (window.confirm('Are you sure to logout?')) {
    let url  ="http://localhost:8000/api/accounts/logout"
    try {
      await axios.post(url, { withCredentials:true });
      console.log("logged out!")
      navigate('/');
    } catch(error) {
      console.error(error)
    }
  }
};

    return (
          <nav className="bg-dark text-white vh-100 p-3">
              <h4>Hello {account?.accountType.id}</h4>
              <p>Loan operations:</p>
              <ul className="nav flex-column">
                  <li className="nav-item"><Link className="nav-link text-white" to="/user/dashboard/create-loan">Create a loan</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="/user/dashboard">All Loans</Link></li>
              </ul>
              <br/>
              <ul className="nav flex-column">
                <li className="nav-item"><Link className="nav-link text-white" to="/user/dashboard/update-profile">Update Profile</Link></li>

                  <li className="nav-item">
                  <a className="nav-link text-white" href="" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                      Logout
                  </a>
                  </li>
              </ul>
          </nav>
  )
}

export default SideBar;