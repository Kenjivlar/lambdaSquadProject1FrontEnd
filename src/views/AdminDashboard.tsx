import AllLoansTable from "../components/Dashboard/AllLoansTable";
import SideBarAdmin from "../components/Dashboard/SideBarAdmin";
import TopBar from "../components/Dashboard/TopBar";

const AdminDashboard:React.FC = () => {
  return (
    <div>
        <div className="row">
            <div className="col">
                <TopBar/>
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                <SideBarAdmin/>
            </div>
            <div className="col-10 ">
                <AllLoansTable/>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard;