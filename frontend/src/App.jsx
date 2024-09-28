import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <div className="bg-black h-screen w-full text-white p-2">
      <Navbar />
    </div>
    </>
  );
}

export default App;
