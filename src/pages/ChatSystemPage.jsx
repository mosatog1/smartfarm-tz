import React, { useState } from "react";

export default function ChatSystemPage() {
  const [messages, setMessages] = useState([
    { sender: "support", text: "Hello! How can we help you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "user", text: newMessage }]);
    setNewMessage("");

    // Simulate support reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "support",
          text: "Thank you for reaching out. We'll get back to you shortly.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-50 to-blue-100 p-6 font-sans">
      <h1 className="text-3xl font-bold text-green-900 mb-6">SmartFarm Chat</h1>

      <div className="bg-white/80 backdrop-blur max-w-2xl mx-auto p-6 rounded-2xl shadow">
        <div className="h-96 overflow-y-auto mb-4 space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl w-fit max-w-xs ${
                msg.sender === "user"
                  ? "ml-auto bg-green-200 text-right"
                  : "mr-auto bg-blue-100"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full border border-green-300 focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-green-600 text-white px-4 py-2 rounded-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
