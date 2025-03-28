import Footer from "../components/Footer";
import SignInForm from "../components/LogInForm";
import Navbar from "../components/Navbar";

const LoginView: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <SignInForm />
      </main>
      <Footer />
    </div>
  );
};
export default LoginView;
