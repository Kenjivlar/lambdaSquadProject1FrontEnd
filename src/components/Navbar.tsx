import { Link } from "react-router-dom";
import LoanLogo from "../../public/img/LoanLogoNavbar.png";

const Navbar: React.FC = () => {
  return (
    <header className="container-fluid py-1 border shadow fixed-top bg-white">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-auto ps-4">
          <Link to="/">  {/* Changed from <a> to <Link> for React Router */}
            <img 
              src={LoanLogo} 
              alt="Loan Logo" 
              className="img-fluid" 
              style={{ maxHeight: '60px' }} 
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;