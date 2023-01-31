const express = require('express');
const getPdf = require('../controllers/getPdf');
const generateFromHTML = require('../controllers/generateFromHTML');
const pdfRouter = express.Router();

pdfRouter.get('/getpdf', getPdf);
pdfRouter.get('/', generateFromHTML);
// pdfRouter.get('/', generateFromHTML);

module.exports = pdfRouter;
