const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

app.get('/api/ip', async (req, res) => {
  try {
    const response = await axios.get('https://httpbin.org/ip');
    const ipAddress = response.data.origin;

    res.json({ ip: ipAddress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch IP address' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
