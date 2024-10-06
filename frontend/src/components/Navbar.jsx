import React from "react";
export default function Navbar() {
  const list = ["Home", "About", "Contact"];
  const listItems = list.map((item, index) => {
    return (
      <a href="#" key={index} className="hover:underline cursor-pointer transition-all">
        {item}
      </a>
    );
  });
  return (
    <div className="flex justify-between w-full border-2 p-2 rounded-lg text-lg px-3 font-mono">
      <div className="hover:underline cursor-pointer">Maahi</div>
      <div className="flex gap-3">{listItems}</div>
    </div>
  );
}
