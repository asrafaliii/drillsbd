import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(
        `https://glacial-falls-47354.herokuapp.com/order?clientEmail=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <div>
      <h2>My Order : {orders.length}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Tools</th>
            <th scope="col">Quantity</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Update</th>
            <th scope="col">Pay</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.clientName}</td>
              <td>{order.name}</td>
              <td>{order.quanty}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>

              <td>
                <button type="button" className="btn btn-primary">
                  Update
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-primary">
                  Pay Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
