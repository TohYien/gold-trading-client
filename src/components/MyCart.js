import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Form, Row } from "react-bootstrap";
import { updateCart, deleteItem } from "../api/carts";
import Swal from "sweetalert2";

const MyCart = ({ item }) => {
  const [formData, setFormData] = useState({ quantity: item.amount });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { mutate: updateMutate } = useMutation({ mutationFn: updateCart });
  const { mutate: deleteItemMutate } = useMutation({ mutationFn: deleteItem });

  const handleToCart = async (operation) => {
    let newQuantity = formData.quantity;

    if (operation === "minus" && formData.quantity > 1) {
      newQuantity = parseInt(newQuantity) - 1;
    } else if (operation === "plus") {
      newQuantity = parseInt(newQuantity) + 1;
    }

    setFormData({ ...formData, quantity: newQuantity });
    updateMutate(
      { id: item._id, quantity: newQuantity },
      {
        onSuccess: (data) => {
          Swal.fire("Updated", data.msg, "success");
        },
        onError: (error) =>
          Swal.fire("Error", error.response.data.msg, "error"),
      }
    );
  };

  const handleDeleteCartItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItemMutate(item._id, {
          onSuccess: (data) => {
            Swal.fire("Deleted", data.msg, "success");
          },
          onError: (error) =>
            Swal.fire("Error", error.response.data.msg, "error"),
        });
      }
    });
  };

  const subTotal = parseFloat(item.price) * parseInt(formData.quantity);
  return (
    <tr key={item._id}>
      <td>
        <span className="fw-bold">{item.product}</span>
        <span className="ms-2 badge bg-warning text-dark rounded-pill">
          {item.tradeNumber === 1 ? "Buy" : "Sell"}
        </span>
      </td>
      <td>{item.description}</td>
      <td>RM{item.price.toFixed(2)}</td>
      <td>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-outline-secondary mx-3"
            onClick={() => handleToCart("minus")}
          >
            -
          </button>
          <Form>
            <Form.Group as={Row} className="mb-0">
              <Form.Control
                type="number"
                placeholder="Enter Quantity /g"
                value={formData.quantity}
                name="quantity"
                onChange={handleChange}
                className="text-center"
              />
            </Form.Group>
          </Form>
          <button
            className="btn btn-outline-secondary mx-3"
            onClick={() => handleToCart("plus")}
          >
            +
          </button>
          /g
        </div>
      </td>
      <td>RM{subTotal.toFixed(2)}</td>
      <td>
        <button
          className="btn btn-outline-danger"
          onClick={() => handleDeleteCartItem(item.product._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyCart;
