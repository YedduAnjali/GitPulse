import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';

console.log('Token loaded:', !!process.env.GITHUB_TOKEN);
console.log('Token prefix:', process.env.GITHUB_TOKEN?.slice(0, 10));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("GitPulse API is running successfully 🚀");
});