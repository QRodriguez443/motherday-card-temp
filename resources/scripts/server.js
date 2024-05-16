require('dotenv').config()
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

const userIP = process.env.IP_ADDRESS

app.use(express.static(path.join(__dirname, '../..')));

app.get('/', (req, res) => {
    // Use the absolute path of the main.html file
    const filePath = path.resolve(__dirname, '../..', 'main.html');
    res.sendFile(filePath);
  });
  
app.listen(port, userIP, () => {
  if (userIP != 'localhost') {
      console.log(`Server listening at http://${userIP}:${port}`);
    } else {
      console.log(`Server listening at http://localhost:${port}`);
    }
});
