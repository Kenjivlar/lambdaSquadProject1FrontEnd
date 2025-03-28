import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationView:React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 d-flex align-items-center">
        <div className="container py-4 mt-4">
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationView;