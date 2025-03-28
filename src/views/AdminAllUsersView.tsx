import AllUsersTable from "../components/Dashboard/AllUsersTable"
import SideBarAdmin from "../components/Dashboard/SideBarAdmin"
import TopBar from "../components/Dashboard/TopBar"

const AdminAllUsersView = () => {
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
                <AllUsersTable/>
            </div>
        </div>
    </div>
  )
}

export default AdminAllUsersView