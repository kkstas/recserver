require('dotenv').config();
require('express-async-handler');
const path = require('path');
const express = require('express');
const app = express();
const pdfRouter = require('./routes/index');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(pdfRouter);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));
