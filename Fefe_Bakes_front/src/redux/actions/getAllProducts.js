import { GET_ALL_PRODUCTS } from "../actionTypes";
import axios from "axios";
axios.defaults.withCredentials = true;

export const getAllProducts = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(
        "https://api.devfrikipolis.com/products"
      );
      const data = apiData.data.data;

      dispatch({ type: GET_ALL_PRODUCTS, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};
