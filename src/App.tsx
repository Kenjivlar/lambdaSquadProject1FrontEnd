import SignInView from "./components/LogInForm";
import HomeView from "./views/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationView from "./views/RegistrationView";
import UserDashboard from "./views/UserDashboard";
import CreateLoanView from "./views/CreateLoanView";
import UpdateUserView from "./views/UpdateUserView";
import AdminDashboard from "./views/AdminDashboard";
import CreateAdminView from "./views/CreateAdminView";
import UpdateAdminView from "./views/UpdateAdminView";

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
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="/admin/dashboard/create-admin" element={<CreateAdminView/>}/>
          <Route path="/admin/dashboard/update-admin" element={<UpdateAdminView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
