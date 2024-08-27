// REGISTER
import axios from "axios";

export const registerUser = async (user) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/register`, user);
    return { data: res.data, status: res.status };
};

// LOGIN
export const login = async (user) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, user);
    return { data: res.data, status: res.status };
};
