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
    // <div className="container mt-5">
    //   <h2>Loan Applications</h2>
    //   <br/>
    //   <div className="">
    //   <table className="table">
    //   <thead>
    //     <tr>
    //       <th scope="col">ID</th>
    //       <th scope="col">Type</th>
    //       <th scope="col">Amount</th>
    //       <th scope="col">Status</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row">1</th>
    //       <td>Mark</td>
    //       <td>Otto</td>
    //       <td>@mdo</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">2</th>
    //       <td>Jacob</td>
    //       <td>Thornton</td>
    //       <td>@fat</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">3</th>
    //       <td colSpan={2}>Larry the Bird</td>
    //       <td>@twitter</td>
    //     </tr>
    //   </tbody>
    // </table>
    //   </div>
    // </div>
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
        <th></th>
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
            <td className='text-center'>
              <div className="row">
                <div className="col">
                    <Link to={`/editar/`}
                    className='btn btn-success btn-sm me-3'>Accept</Link>
                    
                </div>
                <div className="col">
                    <Link to={`/editar/`}
                    className='btn btn-danger btn-sm me-3'>Reject</Link>
                </div>
              </div>
            </td>
        </tr>
        ))
        }
    </tbody>
    </table>

</div>
  )
}

export default InfoTable;