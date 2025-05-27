import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
const app = express();
const PORT = 5000;

app.use(cors());


const moodSongs = JSON.parse(readFileSync('moodmusicdata.json', 'utf-8'));


app.get('/moodmusicdata', (req, res) => {
  const mood = req.query.mood;
  if (!mood || !moodSongs[mood]) {
    return res.status(404).json({ message: 'Mood not found' });
  }
  res.json(moodSongs[mood]);
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
