import { Link } from "react-router-dom";
import loanBg from "../../public/img/loanbg2.jpg";

const HeroSection: React.FC = () => {
    return (
        <div 
            className="px-4 py-5 text-center d-flex flex-column justify-content-center"
            style={{
                backgroundImage: `url(${loanBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                position: 'relative'
            }}
        >
            {/* Dark overlay for better text readability */}
            <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
            ></div>
            
            <div className="position-relative z-index-1 text-white">
                <h1 className="display-5 fw-bold mb-2">Loan Management System</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Streamline your loan operations with our powerful Loan Management System. 
                        From application to approval, tracking to repayment, manage every aspect with ease.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/login">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button type="button" className="btn btn-outline-light btn-lg px-4">
                            Register
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;