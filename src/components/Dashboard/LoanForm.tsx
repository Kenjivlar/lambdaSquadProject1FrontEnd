import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanForm:React.FC = () => {
    let navigate = useNavigate();

  type LoanForm = {
    loanTypeId: number | undefined;
    interestRate: number | undefined;
    amount: number | undefined;
    title: string;
    description: string;
  };

  const [loan, setLoan] = useState<LoanForm>({
    loanTypeId: undefined,
    interestRate: undefined,
    amount: undefined,
    title: "",
    description: ""
  });

  const {
    loanTypeId,
    interestRate,
    amount,
    title,
    description
  } = loan;

        
  

  // Methods
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "http://18.208.153.87:8000/api/loans";
    // Prepare payload with enforced number types
    const payload = {
      ...loan,
      loanTypeId: loan.loanTypeId !== undefined ? Number(loan.loanTypeId) : undefined,
      interestRate: loan.interestRate !== undefined ? Number(loan.interestRate) : undefined,
      amount: loan.amount !== undefined ? Number(loan.amount) : undefined,
    };

    console.log("Payload to send:", payload);
    try {
      await axios.post(url, payload,{withCredentials:true});
      console.log('post request Successfuly')
      navigate("/user/dashboard"); // Redirect to home page
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  }
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //spread operator ... expand attributes
    setLoan({...loan, [e.target.name]: e.target.value})
}

  
    return (
    <div className="mt-4">
         <form onSubmit={(e) => onSubmit(e)}>
          <div className="border border-primary rounded p-4 me-4">
            <h5 className="text-primary fw-normal mb-3">Loan Details:</h5>

            <div className="row mb-3 align-items-center">
  <label htmlFor="loanTypeId" className="col-sm-2 col-form-label">
    Loan Type:
  </label>
  <div className="col-sm-4">
    <select
      className="form-control"
      id="loanTypeId"
      name="loanTypeId"
      required={true}
      value={loanTypeId}
      onChange={(e) => onInputChange(e)}
    >
      <option value=""></option>
      <option value="1">Personal</option>
      <option value="2">Mortgage</option>
      <option value="3">Auto</option>
      <option value="4">Debt Consolidation</option>
      <option value="5">Business</option>
      <option value="6">Education</option>
      <option value="7">Health</option>
      <option value="8">Home Improvement</option>
      <option value="9">Vacation</option>
    </select>
  </div>
</div>

            <div className="row mb-3 align-items-center">
              <label htmlFor="interestRate" className="col-sm-2 col-htmlForm-label">
                Interest Rate:
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  id="interestRate"
                  name="interestRate"
                  placeholder="Interest Rate"
                  required={true}
                  value={interestRate}
                  onChange={(e)=>onInputChange(e)}/>
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <label htmlFor="amount" className="col-sm-2 col-htmlForm-label">
                Amount
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  placeholder="Amount"
                  name="amount"
                  required={true}
                  value={amount}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label htmlFor="title" className="col-sm-2 col-form-label">
                Title
              </label>

              <div className="col-sm-4">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Title"
                  id="title" name="title" required={true} 
                  value={title} onChange={(e)=>onInputChange(e)} />
              </div>
            </div>
            <div className="row mb-3 align-items-center">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Description:
              </label>

              <div className="col-sm-4">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Description"
                  id="description" name="description" required={true} 
                  value={description} onChange={(e)=>onInputChange(e)} />
              </div>
            </div>
            

          </div>
          <br />
 
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary rounded-pill px-5">
              Create
            </button>
            <button
              type="button"
              className="btn btn-primary rounded-pill px-5 mx-2">
              Cancel
            </button>
          </div>
        </form> 
    </div>
  )
}

export default LoanForm