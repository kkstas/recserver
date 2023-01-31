const PDFDocument = require('pdfkit');

const getPdf = (req, res) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment;filename=invoice.pdf',
  });
  let text = 'tekst teskt';

  const doc = new PDFDocument({
    bufferPages: true,
    font: 'Courier',
    size: 'A5',
  });
  doc.on('data', (chunk) => stream.write(chunk));
  doc.on('end', () => stream.end());
  doc.fontSize(25).text(`${text}`);
  doc.end();
};

module.exports = getPdf;
