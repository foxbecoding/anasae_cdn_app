const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 6000;

app.get('/assets/:file', (req, res) => {
    // Handle the static asset request here
})

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
  
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});