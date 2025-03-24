import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignInView from "./components/LogInForm";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationView from "./views/RegistrationView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<SignInView />} />
          <Route path="/register" element={<RegistrationView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
