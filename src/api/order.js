import axios from "axios";
import Cookies from "js-cookie";


export const getOrders = async () => {
    const token = Cookies.get("authToken");
  
    let res = await axios.get(`${process.env.REACT_APP_API_URL}/orders/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};

export const getOrdersAdmin = async () => {
    const token = Cookies.get("authToken");
  
    let res = await axios.get(`${process.env.REACT_APP_API_URL}/orders/admin/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};




export const checkout = async ({ total }) => {
    const token = Cookies.get("authToken");
    const body = {
        total
    };
    let res = await axios.post(`${process.env.REACT_APP_API_URL}/orders/`, body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};