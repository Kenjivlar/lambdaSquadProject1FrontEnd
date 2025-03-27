import SideBarAdmin from "../components/Dashboard/SideBarAdmin"
import TopBar from "../components/Dashboard/TopBar"
import UpdateAdminProfile from "../components/UpdateAdminProfile"

const UpdateAdminView:React.FC = () => {
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
        <div className="col-10">
            <UpdateAdminProfile/>
        </div>
    </div>
</div>
  )
}

export default UpdateAdminView