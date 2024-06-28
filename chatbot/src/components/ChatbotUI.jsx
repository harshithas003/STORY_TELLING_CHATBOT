// components/Chatbot.js

import React, { useState } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import './Chatbot.css'; // Import your CSS file for styling

const ChatbotUI = () => {
    const [userMessage, setUserMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleMessageSubmit = async () => {
        if (userMessage.trim() === '') return;

        // Send user message to backend
        try {
            const response = await axios.post('http://localhost:5000/api/chatbot', {
              inputText: userMessage
            });
            console.log(response);
            const botResponse = response.data.response;
            setChatHistory(prevHistory => [
                ...prevHistory,
                { role: 'user', text: userMessage },
                { role: 'bot', text: botResponse }
            ]);

            setUserMessage('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };

    return (
        <div className="chatbot-container">
            <div className="chat-history">
                {chatHistory.map((message, index) => (
                    <ChatMessage key={index} role={message.role} text={message.text} />
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={userMessage}
                    onChange={handleInputChange}
                />
                <button onClick={handleMessageSubmit}>Send</button>
            </div>
        </div>
    );
};

export default ChatbotUI;
