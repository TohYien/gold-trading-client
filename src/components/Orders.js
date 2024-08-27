import { Accordion } from "react-bootstrap";

const Orders = ({ order }) => {
  // Function to format the timestamp to the desired format in Malaysia's time zone
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      day: "2-digit",
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kuala_Lumpur",
    };

    return date.toLocaleString("en-US", options).replace(",", "");
  };

  const formatPurchaseDate = formatTimestamp(order.purchased_date);

  return (
    <Accordion.Item eventKey={order._id} className="mb-3 shadow-sm">
      <Accordion.Header>
        <div className="m-0">
          <strong className="text-primary">Order ID: {order._id}</strong>
          <br />
          <i className="text-muted">Purchased Date: {formatPurchaseDate}</i>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th className="text-center">Quantity</th>
              <th className="text-end">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.product._id}>
                <td>
                  <span className="fw-bold">{item.product}</span>
                  <span className={`badge ms-2 ${item.tradeNumber === 1 ? "bg-success" : "bg-danger"}`}>
                    {item.tradeNumber === 1 ? "Buy" : "Sell"}
                  </span>
                </td>
                <td>{item.description}</td>
                <td className="text-center">{item.amount}</td>
                <td className="text-end">RM{item.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end mt-3">
          <h4 className="text-dark">Total: RM{order.total}</h4>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Orders;
