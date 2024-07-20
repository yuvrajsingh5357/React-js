import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  const prop1 = {
    name : 'Hello',
    btnText : 'Click Me',
  }
  const prop2 = {
    name : 'Helloww',
    btnText : 'Visit Me',
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-10">Tailwind test</h1>
      <Card obj={prop1} />
      <Card obj={prop2} />
    </>
  );
}

export default App;
