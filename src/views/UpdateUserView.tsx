import SideBar from "../components/Dashboard/SideBar";
import TopBar from "../components/Dashboard/TopBar";
import UpdateProfile from "../components/Dashboard/UpdateProfile";

const UpdateUserView:React.FC = () => {
  return (
    <div>
    <div className="row">
        <div className="col">
            <TopBar/>
        </div>
    </div>
    <div className="row">
        <div className="col-2">
            <SideBar/>
        </div>
        <div className="col-10">
            <UpdateProfile/>
        </div>
    </div>
</div>
  )
}

export default UpdateUserView;