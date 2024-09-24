require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const cors = require('cors')
const app = express();
const authRoute = require('./routes/auth');
const pelamarRoute = require('./routes/pelamarRoute');
const perusahaanRoute = require('./routes/perusahaanRoute');
const postingPekerjaanRoute = require('./routes/postPekerjaanRoute')
const melamarRoute = require('./routes/melamarPekerjaanRoute')
const savedJobsRoute = require('./routes/savedJobsRoute');

app.use(cors());
app.use(express.json());
app.use('/auth', authRoute);
app.use('/pelamar', pelamarRoute);
app.use('/perusahaan', perusahaanRoute)
app.use('/postPekerjaan', postingPekerjaanRoute)
app.use('/melamarPekerjaan', melamarRoute)
app.use('/saveJobs', savedJobsRoute);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  })