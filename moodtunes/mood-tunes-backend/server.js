const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;


app.use(cors());

const songs = JSON.parse(fs.readFileSync('./moodmusicdata.json', 'utf-8'));


app.get('/api/songs', (req, res) => {
  const mood = req.query.mood;

  if (!mood || !songs[mood]) {
    return res.status(404).json({ message: 'Mood not found' });
  }

  res.json(songs[mood]);
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
