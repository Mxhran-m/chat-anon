import React from "react";

export default function MessageField() {
    return (
        <div className="flex flex-col h-screen">
            {/* Message Area */}
            <div className="flex-grow w-[90%] bg-slate-700 m-auto overflow-y-auto p-4">
                {/* Example messages (replace with your dynamic messages) */}
                <div className="text-white">Message 1: Hello!</div>
                <div className="text-white">Message 2: How are you?</div>
                <div className="text-white">Message 3: This is a scrollable area.</div>
                <div className="text-white">Message 4: Keep adding messages.</div>
                <div className="text-white">Message 5: You can use a map function here.</div>
                {/* Add more messages as needed */}
            </div>
        </div>
    );
}
