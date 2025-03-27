import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SideBarAdmin:React.FC = () => {
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
              <h4>Hello Admin</h4>
              <p>Operations:</p>
              <ul className="nav flex-column">
                  <li className="nav-item"><Link className="nav-link text-white" to="/admin/dashboard/">All loans</Link></li>
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