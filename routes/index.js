const express = require('express');
const getPdf = require('../controllers/getPdf');
const generateFromHTML = require('../controllers/generateFromHTML');
const pdfRouter = express.Router();
const generateCashinFromHTML = require('../controllers/generateCashinFromHTML');
// pdfRouter.get('/getpdf', getPdf);

// cashin
pdfRouter.get('/c', generateCashinFromHTML);

// cashout
pdfRouter.get('/', generateFromHTML);

// pdfRouter.get('/', generateFromHTML);

module.exports = pdfRouter;
