import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';

const app = express();
app.use(cors());

const songs = JSON.parse(readFileSync('./moodmusicdata.json', 'utf-8'));

app.get('/moodmusicdata', (req, res) => {
  const mood = req.query.mood;
  if (!mood || !moodmusicdata[mood]) {
    return res.status(404).json({ message: 'Mood not found' });
  }
  res.json(moodmusicdata[mood]);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});