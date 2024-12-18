const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;


// CORS Options
const corsOptions = {
  origin: ['http://localhost:4000', 'https://startup.gene-chat.com'], // Allowed origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and credentials
};

// Middleware
app.use(cors(corsOptions)); 
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// In-memory storage for users
const users = {};
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Routes
app.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  if (users[username]) {
    return res.status(400).json({ message: 'Username already exists.' });
  }
  users[username] = { username, password, email };
  res.status(201).json({ message: 'Account created successfully.' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!users[username] || users[username].password !== password) {
    return res.status(401).json({ message: 'Invalid username or password.' });
  }
  res.status(200).json({ message: 'Login successful.', user: users[username] });
});

app.get('/account/:username', (req, res) => {
  const { username } = req.params;
  if (!users[username]) {
    return res.status(404).json({ message: 'User not found.' });
  }
  res.status(200).json(users[username]);
});

app.put('/account/:username', (req, res) => {
  const { username } = req.params;
  const { name } = req.body;

  if (!users[username]) {
    return res.status(404).json({ message: 'User not found.' });
  }

  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'Invalid name.' });
  }

  users[username].name = name.trim(); // Update name
  res.status(200).json({ message: 'Account updated successfully.' });
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Message is required.' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
      stream: false,
    });
    res.json({ reply: response.choices[0]?.message?.content.trim() });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ message: 'Error communicating with OpenAI.' });
  }
});

// Serve Frontend Index
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
