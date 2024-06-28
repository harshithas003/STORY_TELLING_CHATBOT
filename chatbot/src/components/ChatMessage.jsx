// components/ChatMessage.js

import React from 'react';

const ChatMessage = ({ role, text }) => {
    return (
        <div className={`message ${role}`}>
            <p>{text}</p>
        </div>
    );
};

export default ChatMessage;
