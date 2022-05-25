import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const moviesUrl =
  "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup";

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      setMovies((await axios.get(moviesUrl)).data);
    })();
  }, []);

  return (
    <>
      <AppProvider
        value={{
          movies,
        }}
      >
        {children}
      </AppProvider>
    </>
  );
};
