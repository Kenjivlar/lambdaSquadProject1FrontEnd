import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { LoanApplication } from "../../models/LoanApplication";

const AllLoansTable: React.FC = () => {
  const urlBase = "http://localhost:8000/api/admin/loans";
  const [loans, setLoans] = useState<LoanApplication[]>([]);
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadLoans();
  }, []);

  const loadLoans = async () => {
    try {
      const result = await axios.get(urlBase, { withCredentials: true });
      setLoans(result.data);
    } catch (err) {
      console.error("Failed to load loans:", err);
      setError("Failed to load loans");
    }
  };

  const handleStatusUpdate = async (loanId: number, newStatus: "accepted" | "rejected") => {
    setLoadingId(loanId);
    setError(null);

    try {
      await axios.put(
        `http://localhost:8000/api/loans/admin/${loanId}/status`,
        { status: newStatus },
        { withCredentials: true }
      );

      // Update the local state to reflect the change
      setLoans(loans.map(loan => 
        loan.id === loanId 
          ? { ...loan, status: { ...loan.status, status: newStatus } } 
          : loan
      ));
    } catch (err) {
      console.error("Failed to update loan status:", err);
      setError("Failed to update loan status");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Loans</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped table-hover align-middle">
        <thead className='table-dark'>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope='col'>Title</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <th scope="row">{loan.id}</th>
              <td>{loan.userId.firstName}</td>
              <td>{loan.title}</td>
              <td>{loan.description}</td>
              <td>{loan.loanType.loanType}</td>
              <td>
                <NumericFormat 
                  value={loan.amount}
                  displayType={'text'}
                  thousandSeparator=',' 
                  prefix={'$'}
                  decimalScale={2} 
                  fixedDecimalScale
                />
              </td>
              <td>{loan.status.status}</td>
              <td className='text-center'>
                <div className="row">
                  <div className="col">
                    <button
                      onClick={() => handleStatusUpdate(loan.id, "accepted")}
                      className='btn btn-success btn-sm me-3'
                      
                    >
                      {loadingId === loan.id ? "Processing..." : "Accept"}
                    </button>
                  </div>
                  <div className="col">
                    <button
                      onClick={() => handleStatusUpdate(loan.id, "rejected")}
                      className='btn btn-danger btn-sm me-3'
                 
                    >
                      {loadingId === loan.id ? "Processing..." : "Reject"}
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllLoansTable;