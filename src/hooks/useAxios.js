import { useState, useCallback } from "react";
import axios from "axios";

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseURL = process.env.REACT_APP_API_BASE_URL;
//   const authToken = user.token;

  const axiosInstance = axios.create({
    baseURL,
    // headers: {
    //   Authorization: `Bearer ${authToken}`,
    // },
  });

  const makeRequest = useCallback(
    async (method, endpoint, payload = null) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance({
          method,
          url: endpoint,
          data: payload,
        });

        setLoading(false);
        return response.data;
      } catch (error) {
        setError(error);
        setLoading(false);
        throw error;
      }
    }, // eslint-disable-next-line
    [axiosInstance],
  );

  return { loading, error, makeRequest };
};

export default useAxios;
