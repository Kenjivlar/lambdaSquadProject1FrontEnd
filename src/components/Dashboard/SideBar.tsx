import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SideBar:React.FC = () => {
  const navigate = useNavigate();

const handleLogout = async () => {
  if (window.confirm('Are you sure to logout?')) {
    let url  ="http://localhost:8000/api/accounts/logout"
    try {
      await axios.post(url);
      localStorage.removeItem('authToken');
      navigate('/');
    } catch(error) {
      console.error(error)
    }
  }
};

    return (
          <nav className="bg-dark text-white vh-100 p-3">
              <h4>Hello User</h4>
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