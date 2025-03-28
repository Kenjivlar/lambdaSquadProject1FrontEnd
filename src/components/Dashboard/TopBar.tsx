import LoanLogo from "../../../public/img/LoanLogoNavbar.png";

const TopBar:React.FC = () => {
  return (
    <div>
      <header className="container-fluid  border shadow">
        <div className="row">
          <div className="col-auto">
          <img 
              src={LoanLogo} 
              alt="Loan Logo" 
              className="img-fluid" 
              style={{ maxHeight: '60px' }} 
            />
          </div>
        </div>
      </header>
    </div>
  )
}

export default TopBar;