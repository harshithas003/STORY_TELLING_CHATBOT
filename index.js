const express = require('express');
const bodyParser = require('body-parser');
const chatbot = require('./chatbot');

const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for chatbot
app.post('/api/chatbot', async (req, res) => {
  const { inputText } = req.body;

  try {
    if (!inputText) {
      return res.status(400).json({ error: 'Input text is required' });
    }

    const responseText = await chatbot(inputText);
    res.json({ response: responseText });
  } catch (error) {
    console.error('Error in chatbot processing:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
