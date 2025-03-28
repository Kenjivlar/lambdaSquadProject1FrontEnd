import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Account } from "../../models/LoanApplication";

const SideBarAdmin:React.FC = () => {
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
              <h4>Hello Admin</h4>
              <p>{account?.email}</p>
              <p>Operations:</p>
              <ul className="nav flex-column">
                  <li className="nav-item"><Link className="nav-link text-white" to="/admin/dashboard/">All Loans</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="/admin/dashboard/all-users">All Users</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="/admin/dashboard/create-admin">Create an Admin</Link></li>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item"><Link className="nav-link text-white" to="/admin/dashboard/update-admin">Update Profile</Link></li>

                  <li className="nav-item">
                  <a className="nav-link text-white" href="" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                      Logout
                  </a>
                  </li>
              </ul>
          </nav>
  )
}
export default SideBarAdmin;