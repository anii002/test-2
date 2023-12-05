import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
library.add(fas);


function App() {
  return (
    <div className="container mt-5">
      <Home />
    </div>
  );
}

export default App;
