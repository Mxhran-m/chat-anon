import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Input, Button } from "@material-tailwind/react";

export default function MessageBox() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className="w-full h-12 bg-zinc-700 rounded-lg flex items-center p-2">
      <div className="w-full bg-white h-full border border-zinc-300 rounded-sm flex items-center">
        <input
          type="text"
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 h-full outline-none rounded-l-sm focus:ring-2 focus:ring-blue-500 transition text-black  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="h-full w-12 bg-grey-200 flex justify-center items-center rounded-r-sm transition duration-200"
          aria-label="Send Message"
        >
          <FaArrowCircleRight className="text-xl text-black h-10 w-10" />
        </button>
      </div>
    </div>
  );
}

 
// export function InputWithButton() {
//   const [email, setEmail] = React.useState("");
//   const onChange = ({ target }) => setEmail(target.value);
 
//   return (
//     <div className="relative flex w-full max-w-[24rem]">
//       <Input
//         type="email"
//         label="Email Address"
//         value={email}
//         onChange={onChange}
//         className="pr-20"
//         containerProps={{
//           className: "min-w-0",
//         }}
//       />
//       <Button
//         size="sm"
//         color={email ? "gray" : "blue-gray"}
//         disabled={!email}
//         className="!absolute right-1 top-1 rounded"
//       >
//         Invite
//       </Button>
//     </div>
//   );
// }