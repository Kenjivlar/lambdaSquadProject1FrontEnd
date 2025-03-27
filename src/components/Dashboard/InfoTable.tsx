import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import { LoanApplication } from "../../models/LoanApplication"

const InfoTable:React.FC = () => {
  const urlBase = "http://localhost:8000/api/users/my-loans";

  const[loans, setLoans] = useState<LoanApplication[]>([]);

  useEffect(() => {
      loadLoans();
  }, []);
      

  const loadLoans = async () => {
      const result = await axios.get(urlBase, { withCredentials:true });
      console.log("Loans");
      console.log(result.data);
      setLoans(result.data);
  }

  return (
    <div className="container mt-4">
    
    <h3>Loans</h3>
    <table className="table table-striped table-hover align-middle">
    <thead className='table-dark'>
        <tr>
             <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope='col'>Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>

        </tr>
    </thead>
    <tbody>
        {
          
        // Loop loans
        loans.map((loan, index) => (
            <tr key={index}>
            <th scope="row">{loan.id}</th>
              <td>{loan.title}</td>
              <td>{loan.loanType.loanType}</td>
              <td><NumericFormat value={loan.amount}
                  displayType={'text'}
                  thousandSeparator=',' prefix={'$'}
                  decimalScale={2} fixedDecimalScale/>
              </td>
              <td>{loan.status.status}</td>
        </tr>
        ))
        }
    </tbody>
    </table>
</div>
  )
}

export default InfoTable;