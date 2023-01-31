const html_to_pdf = require('html-pdf-node');
const createHTML = require('../util/createHTML');
const path = require('path');

const generateFromHTML = async (req, res) => {
  console.log(req.query);

  try {
    let options = { format: 'A5' };
    // Example of options with args //
    // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };
    let file;
    if (req.query) {
      const createdFromTemplate = createHTML(req.query);
      file = {
        content: createdFromTemplate,
      };
    } else {
      file = { content: '<h1>Welcome to html-pdf-node</h1>' };
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

module.exports = generateFromHTML;
