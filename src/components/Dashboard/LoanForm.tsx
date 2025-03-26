import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanForm:React.FC = () => {
    let navigate = useNavigate();

  type LoanForm = {
    loanType: number | undefined;
    interestRate: number | undefined;
    amount: number | undefined;
    title: string;
    description: string;
  };

  const [loan, setLoan] = useState<LoanForm>({
    loanType: undefined,
    interestRate: undefined,
    amount: undefined,
    title: "",
    description: ""
  });

  const {
    loanType,
    interestRate,
    amount,
    title,
    description
  } = loan;

  // Methods
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/users/register";
    console.log("OnSubmit executed");
    console.log(loan);
    try {
      await axios.post(url, loan);
      console.log('post request Successfuly')
      navigate("/user/dashboard"); // Redirect to home page
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  }
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //spread operator ... expand attributes
    setLoan({...loan, [e.target.name]: e.target.value})
}

  
    return (
    <div className="mt-4">
         <form onSubmit={(e) => onSubmit(e)}>
          <div className="border border-primary rounded p-4 me-4">
            <h5 className="text-primary fw-normal mb-3">Loan Details:</h5>

            <div className="row mb-3 align-items-center">
              <label htmlFor="loanType"className="col-sm-2 col-htmlForm-label">
                Loan Type:
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className="form-control"
                  id="loanType"
                  name="loanType"
                  placeholder="Loan Type"
                  required={true}
                  value={loanType}
                  onChange={(e)=>onInputChange(e)}/>
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
                  type="number" 
                  className="form-control" 
                  placeholder="Title"
                  id="title" name="title" required={true} 
                  value={title} onChange={(e)=>onInputChange(e)} />
              </div>
            </div>

            <div className="row mb-3 align-items-center">
              <label
                htmlFor="description"
                className="col-sm-2 col-htmlForm-label">
                Description:
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  placeholder="Description"
                  className="form-control"
                  id="description"
                  
                  required={true}
                  value={description}
                  onChange={(e)=>onInputChange(e)}
                />
              </div>
            </div>

          </div>
          <br />
 
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary rounded-pill px-5">
              Register
            </button>
            <button
              type="button"
              className="btn btn-primary rounded-pill px-5 mx-2"
      
            >
              Cancel
            </button>
          </div>
        </form> 
    </div>
  )
}

export default LoanForm