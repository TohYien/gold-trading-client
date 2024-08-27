// REGISTER
import axios from "axios";

export const registerUser = async (user) => {
    const res = await axios.post("http://localhost:5000/user/register", user);
    return { data: res.data, status: res.status };
};

// LOGIN
export const login = async (user) => {
    const res = await axios.post("http://localhost:5000/user/login", user);
    return { data: res.data, status: res.status };
};
