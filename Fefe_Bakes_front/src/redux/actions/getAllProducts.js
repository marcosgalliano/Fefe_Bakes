import { GET_ALL_PRODUCTS } from "../actionTypes";
import axios from "axios";
axios.defaults.withCredentials = true;

export const getAllProducts = () => {
  return async function (dispatch) {
    try {
      // Realizar ambas llamadas API
      const [coursesResponse, recipeBooksResponse] = await Promise.all([
        axios.get("http://localhost:3001/api/courses"),
        axios.get("http://localhost:3001/api/recipebooks"),
      ]);

      // Extraer los datos de las respuestas, manejando la posibilidad de que sean indefinidos
      const coursesData = coursesResponse.data.data || [];
      const recipeBooksData = recipeBooksResponse.data.data || [];

      // Combinar los datos
      const combinedData = [...coursesData, ...recipeBooksData];

      // Despachar la acción con los datos combinados
      dispatch({ type: GET_ALL_PRODUCTS, payload: combinedData });
    } catch (error) {
      console.error("Error fetching products:", error);
      return error.message;
    }
  };
};

