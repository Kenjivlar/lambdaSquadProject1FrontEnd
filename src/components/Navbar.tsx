import { Link } from "react-router-dom";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/"className="d-inline-flex link-body-emphasis text-decoration-none">
          <h2>Loan Management</h2>
        </a>
      </div>
      <div className="col-md-3 text-end">
        <Link to="/login">
          <button type="button" className="btn btn-primary me-2">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </Link>
      </div>
    </header>
  </div>
  )
}

export default Navbar;