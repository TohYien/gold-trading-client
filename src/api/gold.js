import axios from "axios";

export const fetchGold = async () => {
  const res = await axios(
    `https://api.metalpriceapi.com/v1/latest?api_key=e17f4fb3aac013849adbbb70f8cb15f0&base=USD&currencies=EUR,XAU,XAG`);
  return res.data;
};
