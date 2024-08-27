import axios from "axios";
import Cookies from "js-cookie";

// GET ALL CART
export const getCarts = async () => {
  const res = await axios.get("http://localhost:5000/carts");
  return res.data;
};

//ADD TO CART
export const addToCart = async (product, price, amount, description, type) => {
  const token = Cookies.get("authToken");
  const body = {
    product,
    price,    
    amount,
    description,
    type,
  };

  let res = await axios.post("http://localhost:5000/carts/", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// ADD CART
export const addCart = async (newCart) => {
  const res = await axios.post("http://localhost:5000/", newCart);
  return res.data;
};

// UPDATE CART
export const updateCart = async ({ id, quantity }) => {
  const res = await axios.put(
    `http://localhost:5000/carts/${id}`,
    { quantity },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("authToken")}`,
      },
    }
  );
  return res.data;
};

// DELETE CART
export const deleteItem = async (id) => {
  const res = await axios.delete(`http://localhost:5000/carts/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });
  return res.data;
};

//EMPTY CART
export const deleteCart = async () => {
  const token = Cookies.get("authToken");
  let res = await axios.delete("http://localhost:5000/carts/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

//Chechout Cart
export const checkoutCart = async ({userId}) => {
  console.log("id", userId)
  const res = await axios.post(`http://localhost:5000/orders/${userId}`);
  return res.data;
};
