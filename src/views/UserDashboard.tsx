import InfoTable from "../components/Dashboard/InfoTable"
// import MainInfo from "../components/Dashboard/MainInfo"
import SideBar from "../components/Dashboard/SideBar"
import TopBar from "../components/Dashboard/TopBar"

const UserDashboard: React.FC = () => {
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
            <div className="col-10 ">
                <InfoTable/>
            </div>
        </div>
    </div>
    
  )
}

export default UserDashboard;