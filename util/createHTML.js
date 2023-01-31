const planetCashSvg = require('./svgPlanetCash');

const createHTML = ({ a, b, c, d, e, f, g, h }) => {
  const transactionStartDateTime = a; // state.transactionManager.transactionStartDateTime
  const deviceName = b; // state.blockManager.deviceName
  const transactionID = c; // state.transactionManager.transactionID
  const localizationName = d; // state.blockManager.localizationName
  const localizationStreet = e; // state.blockManager.localizationStreet
  const localizationCity = f; // state.blockManager.localizationCity
  const tempcardNumberFormatted = g; // tempcardNumberFormatted
  const amountValue = h; // device.cashmodule.cashOut.data.amountValue
  // localhost:3000/pdf?a=12:24:43&b=RNET6338&c=asldkfjwod fw&d=ITCARD&e=ul. Zwycięska 43&f=Wrocław&g=234234*******3242342&h=200,00 PLN
  const html = `
<!-- start a5 div -->
<div
style="
width: 95vw;
height: 95vh;
padding: 8%;
padding-right: 12%;
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-between;
font-family: Lucida Console, Monaco, monospace;
">
${planetCashSvg}
 <p
      style="
        border-bottom: 1px solid rgba(0, 0, 0, 0.234);
        padding-bottom: 0;
        margin-bottom: 0;
        font-size: 12px;
        letter
      ">
      POTWIERDZENIE DOKONANIA TRANSAKCJI
    </p>

    <!-- start trx info -->
    <div style="display: flex">
      <!--  start kolumna lewa  -->
      <div style="">
        <p style="">Data i czas</p>
        <p style="">Terminal</p>
        <p style="">Nr transakcji</p>
        <p style="">Lokalizacja</p>
        <!--  end kolumna lewa  -->
      </div>
      <!--  start kolumna prawa -->
      <div style="flex: 1; text-align: end">
        <p style="">${transactionStartDateTime}</p>
        <p style="">${deviceName}</p>
        <p style="">${transactionID}</p>
        <p style="">${localizationName}</p>
        <p style="">${localizationStreet}</p>
        <p style="">${localizationCity}</p>
        <!--  end kolumna prawa -->
      </div>
      <!-- end trx info -->
    </div>

    <!-- separator  -->
    <div
      style="
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.234);
      ">
      <!-- end separator -->
    </div>

    <!-- start trx amounts -->
    <div style="display: flex">
      <!--  start kolumna lewa  -->
      <div style="">
        <p style="font-size: 17px">Numer karty:</p>
        <p style="font-size: 19px; font-weight: 600">WYPŁATA:</p>
        <!--  end kolumna lewa  -->
      </div>
      <!--  start kolumna prawa -->
      <div style="flex: 1; text-align: end">
        <p style="font-size: 17px">${tempcardNumberFormatted}</p>
        <p style="font-size: 19px; font-weight: 600">${amountValue}</p>
        <!--  end kolumna prawa -->
      </div>

      <!-- end trx amounts -->
    </div>

    <!-- separator  -->
    <div
      style="width: 100%; height: 2px; background-color: #000000;">
      <!-- end separator -->
    </div>

    <!-- start dziękujemy zapraszamy ponownie  -->
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 400;
      ">
      <p style="margin: 2px; font-size: 10px; letter-spacing: 1px">
        TEL. 801 501 601
      </p>
      <p style="margin: 2px; font-size: 12.2px; letter-spacing: 1px">
        WWW.PLANETCASH.PL
      </p>
      <p style="margin: 2px; font-size: 14px; letter-spacing: 1px">
        DZIĘKUJEMY I ZAPRASZAMY PONOWNIE
      </p>
      <!-- end dziękujemy zapraszamy ponownie  -->
    </div>
    <!-- end a5 div -->
  </div>

`;
  return html;
};

module.exports = createHTML;
