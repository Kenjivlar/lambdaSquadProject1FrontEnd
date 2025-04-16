import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Account } from "../../models/LoanApplication";
import { useEffect, useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import UpdateIcon from '@mui/icons-material/Update';
import LogoutIcon from '@mui/icons-material/Logout';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';

const SideBar:React.FC = () => {
  const navigate = useNavigate();

  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    loadAccount();
  }, []);
    

  const loadAccount= async () => {
    const url_accounts = "http://18.208.153.87:8000/api/accounts/session-check"
    const result = await axios.get(url_accounts, { withCredentials:true });
    console.log("Account");
    console.log(result.data);
    setAccount(result.data);
  }


const handleLogout = async () => {
  if (window.confirm('Are you sure to logout?')) {
    let url  ="http://18.208.153.87:8000/api/accounts/logout"
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
              <h4>Hello User</h4>
              <p>{account?.email}</p>
              <p>Operations:</p>
              <ul className="nav flex-column">
                  <li className="nav-item"><Link className="nav-link text-white" to="/user/dashboard/create-loan"><NoteAddIcon className="me-2" fontSize="small"/> Create a loan</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="/user/dashboard"><RealEstateAgentIcon className="me-2" fontSize="small"/> All Loans</Link></li>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item"><Link className="nav-link text-white" to="/user/dashboard/update-profile"><UpdateIcon className="me-2" fontSize="small"/> Update Profile</Link></li>

                  <li className="nav-item">
                  <a className="nav-link text-white" href="" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                      <LogoutIcon className="me-2" fontSize="small"/>
                      Logout
                  </a>
                  </li>
              </ul>
          </nav>
  )
}

export default SideBar;