import React from "react";
import { getAllOrders } from "../axiosRequests/ordersRequests";
import "../styles/Cart.css";

const HistoryContainer = () => {
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.isAdmin === true) getAllOrders().then((res) => setCart(res.data));
  }, []);

  return (
    <div className="cart">
      {/* Cart table */}
      <table className="table">
        <tr>
          <th>Username</th>
          <th>Title</th>
          <th>Author</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cart.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.user.username}</td>
              <td>{data.book.title}</td>
              <td>{data.book.author}</td>
              <td>{data.quantity}</td>
              <td>{data.book.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default HistoryContainer;
