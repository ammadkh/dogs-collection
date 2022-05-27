import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DogsContext = createContext();

export const DogsProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random/9"
      );
      setDogs((prevDogs) => [
        ...new Set([...prevDogs, ...response.data.message]),
      ]);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDogs();
  }, []);
  return (
    <DogsContext.Provider
      value={{ dogs, fetchDogs, loading: isLoading, error }}
    >
      {children}
    </DogsContext.Provider>
  );
};
