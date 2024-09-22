require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const cors = require('cors')
const app = express();
const authRoute = require('./routes/auth');
const pelamarRoute = require('./routes/pelamarRoute')

app.use(cors());
app.use(express.json());
app.use('/auth', authRoute);
app.use('/pelamar', pelamarRoute);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  })