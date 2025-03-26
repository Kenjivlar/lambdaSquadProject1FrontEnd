import LoanForm from "../components/Dashboard/LoanForm";
import SideBar from "../components/Dashboard/SideBar";
import TopBar from "../components/Dashboard/TopBar";

const CreateLoanView:React.FC = () => {
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
            <LoanForm/>
        </div>
    </div>
</div>
  )
}

export default CreateLoanView;