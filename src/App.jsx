import "./App.scss";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { movies } = useContext(AppContext);
  console.log(movies);

  return (
    <div className="App">
      <div className="movies">
        {movies.map((m, i) => {
          return (
            <ul>
              <li key={i}>{m.title}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
