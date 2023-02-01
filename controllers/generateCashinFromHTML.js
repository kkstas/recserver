const html_to_pdf = require('html-pdf-node');
const createCashinHTML = require('../util/createCashinHTML');
const path = require('path');

const generateCashinFromHTML = async (req, res) => {
  console.log(req.query);

  try {
    let options = { format: 'A5' };
    // Example of options with args //
    // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };
    let file;
    if (req.query) {
      const createdFromTemplate = createCashinHTML(req.query);
      file = {
        content: createdFromTemplate,
      };
    } else {
      file = { content: '<h1>file creation error</h1>' };
    }
    let data;
    await html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
      data = pdfBuffer;
      console.log('PDF Buffer:-', pdfBuffer);
    });
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=itcard-receipt.Pdf`
    );
    res.setHeader('Content-Length', data.length);
    return res.end(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = generateCashinFromHTML;
