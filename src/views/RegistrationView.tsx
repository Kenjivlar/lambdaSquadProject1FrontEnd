import Footer from "../components/Footer";
import RegistrationForm from "../components/RegistrationForm";

type Props = {}

const RegistrationView = (props: Props) => {
  return (
    <div className="container">
      <RegistrationForm />
      <Footer/>
  
    </div>
  )
}

export default RegistrationView;

