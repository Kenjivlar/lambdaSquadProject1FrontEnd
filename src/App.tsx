import SignInView from "./components/LogInForm";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationView from "./views/RegistrationView";
import UserDashboard from "./views/UserDashboard";
import CreateLoanView from "./views/CreateLoanView";
import UpdateUserView from "./views/UpdateUserView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<SignInView />} />
          <Route path="/register" element={<RegistrationView />} />
          <Route path="/user/dashboard" element={<UserDashboard/>}/>
          <Route path="/user/dashboard/create-loan" element={<CreateLoanView/>}/>
          <Route path="/user/dashboard/update-profile" element={<UpdateUserView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
