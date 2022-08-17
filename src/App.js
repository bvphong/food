import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/Header";
import FormCreate from "./component/form/FormCreate";
import Todolist from "./component/todolist/Todolist";
import { useState } from "react";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <Header />
      <FormCreate handle={() => setState(!state)} />
      <Todolist />
    </div>
  );
}

export default App;
