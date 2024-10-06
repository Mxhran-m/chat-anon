import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MessageBox from "./components/MessageBox";
import CustomButton from "./components/CustomButton"
import ChatBox from "./components/Chatbox";
import MessageField from "./components/MessageFIeld";
function App() {
  return (
    <>
    <div className="bg-black h-full w-full text-white p-2">
      <Navbar />
      <MessageField/>
      <ChatBox/>
    </div>
    </>
  );
}

export default App;
