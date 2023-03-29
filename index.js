require('dotenv').config();
const indexRouter = require('./routes/index')
const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: true}));


app.use('/', indexRouter)

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})
