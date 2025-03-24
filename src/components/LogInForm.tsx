import { Link } from 'react-router-dom';

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "65vh" }}>
      <main
        className="form-signin w-100"
        style={{
          maxWidth: "800px",
          padding: "30px",
          border: "2px solid #007bff", // Border color
          borderRadius: "8px", // Optional: Round corners, remove if you want a sharp square border
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Adds shadow for depth
        }}
      >
        <form>
          
        <h1 className="h3 mb-4 fw-bold text-primary text-center" style={{ 
  backgroundColor: '#e0f7fa', 
  padding: '10px 20px', 
  borderRadius: '8px', 
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', 
  fontSize: '2rem' 
}}>
  Please sign in
</h1>


          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email-Id</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Remember me
            </label>
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/register">
              <button
                type="button"
                className="btn btn-primary rounded-pill px-5"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;
