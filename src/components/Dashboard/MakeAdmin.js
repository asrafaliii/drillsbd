import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://glacial-falls-47354.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h2>All Users:{users.length}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Make Admin</th>
            <th scope="col">Remove Admin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((admin) => (
            <tr key={admin._id}>
              <td>{admin.email}</td>

              <td>
                <button type="button" className="btn btn-primary">
                  Make Admin
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-primary">
                  Remove Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
