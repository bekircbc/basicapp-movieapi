import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

// const moviesUrl =
//   "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup";

const options = {
  url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
  params: { term: "bojack", country: "uk" },
  headers: {
    "X-RapidAPI-Host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  },
};

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      setMovies((await axios.get(options)).data);
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
