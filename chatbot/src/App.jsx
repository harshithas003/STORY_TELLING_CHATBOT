// App.js

import React from 'react';
import './App.css'; // Import global CSS file for styling
import ChatbotUI from './components/ChatbotUI';
import backgroundImage from './assets/backgroundImage.png';

const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
};
    return (
        <div className="app" style={appStyle}>
            <header className="app-header">
                <h1>Lemmetization-Errors</h1>
                <p>A simple storytelling chatbot which gives you the story based on your prompts</p>
            </header>
            <main className="app-content">
                <ChatbotUI />
            </main>
            
        </div>
    );
}

export default App;
