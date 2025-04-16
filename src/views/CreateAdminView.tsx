import SideBarAdmin from "../components/Dashboard/SideBarAdmin";
import AdminForm from "../components/Dashboard/AdminForm";
import TopBar from "../components/Dashboard/TopBar";

const CreateAdminView: React.FC = () => {

  // Methods

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
            <AdminForm/>
        </div>
    </div>
</div>
  );
};

export default CreateAdminView;
