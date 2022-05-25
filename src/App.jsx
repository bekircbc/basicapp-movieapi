import "./App.scss";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function App() {
  const { movies } = useContext(AppContext);
  console.log(movies);
  return <div className="App">Hello</div>;
}

export default App;
