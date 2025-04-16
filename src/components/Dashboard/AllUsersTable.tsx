import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { User } from "../../models/LoanApplication";

const AllUsersTable: React.FC = () => {
  const urlBase = "http://18.208.153.87:8000/api/admin/users";
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    try {
      const result = await axios.get(urlBase, { withCredentials: true });
      setUsers(result.data);
    } catch (err) {
      console.error("Failed to load user:", err);
      setError("Failed to load user");
    }
  };

  return (
    <div className="container mt-4">
      <h3>All Users</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped table-hover align-middle">
        <thead className='table-dark'>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Credit Score</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.firstName}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <NumericFormat 
                  value={user.creditScore}
                  displayType={'text'}
                  thousandSeparator=',' 
                  prefix={'$'}
                  decimalScale={2} 
                  fixedDecimalScale
                />
              </td>
              <td>{user.account.accountType.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersTable;