import { Link } from "react-router-dom";

const SideBar:React.FC = () => {
    return (
          <nav className="bg-dark text-white vh-100 p-3">
              <h4>Hello User</h4>
              <p>Loan operations:</p>
              <ul className="nav flex-column">
                  <li className="nav-item"><Link className="nav-link text-white" to="/user/dashboard/create-loan">Create a loan</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="/user/dashboard">All Loans</Link></li>
                  {/* <li className="nav-item"><Link className="nav-link text-white" to=""></Link></li> */}
              </ul>
              <br/>
              <ul className="nav flex-column">
                <li className="nav-item">Update Profile</li>
                <li className="nav-item">Logout</li>
              </ul>
          </nav>
  )
}
export default SideBar;