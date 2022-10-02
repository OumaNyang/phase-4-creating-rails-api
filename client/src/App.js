import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Hello from React!</h1>;
}

export default App;