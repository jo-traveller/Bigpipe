// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Pagelet endpoints
app.get('/', (req, res) => {
  res.send('Welcome to the login form');
});

app.get('/pagelet1', (req, res) => {
  // Implementation for pagelet 1
  res.json({ content: 'Pagelet 1 Content' });
});

app.get('/pagelet2', (req, res) => {
  // Implementation for pagelet 2
  res.json({ content: 'Pagelet 2 Content' });
});

// Additional endpoints for other stages (data fetching, markup generation, etc.)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
