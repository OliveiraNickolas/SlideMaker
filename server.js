import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/api/scrape', async (req, res) => {
  const url = req.query.url;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(`Failed to fetch data from the provided URL: ${url}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
