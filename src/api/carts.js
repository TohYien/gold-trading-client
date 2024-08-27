import axios from "axios";
import Cookies from "js-cookie";

// GET ALL CART
export const getCarts = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/carts`);
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

  let res = await axios.post(`${process.env.REACT_APP_API_URL}/carts/`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// ADD CART
export const addCart = async (newCart) => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}`, newCart);
  return res.data;
};

// UPDATE CART
export const updateCart = async ({ id, quantity }) => {
  const res = await axios.put(
    `${process.env.REACT_APP_API_URL}/carts/${id}`,
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
  const res = await axios.delete(`${process.env.REACT_APP_API_URL}/carts/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });
  return res.data;
};

//EMPTY CART
export const deleteCart = async () => {
  const token = Cookies.get("authToken");
  let res = await axios.delete(`${process.env.REACT_APP_API_URL}/carts/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

//Chechout Cart
export const checkoutCart = async ({userId}) => {
  console.log("id", userId)
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/orders/${userId}`);
  return res.data;
};
