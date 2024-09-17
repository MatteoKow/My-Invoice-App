import RNFS from 'react-native-fs';
import { formatDate } from './formatDate';
import { invoiceNumberGenerator } from './invoiceNumberGenerator';

const calculateValues = (products) => {
    return products.map((item) => {
      const netPrice = parseFloat(item.netPrice); // Cena netto
      const vatRate = parseFloat(item.vat) / 100; // Stawka VAT
      const netValue = netPrice * item.quantity; // Wartość netto
      const vatValue = netValue * vatRate; // Wartość VAT
      const grossValue = netValue + vatValue; // Wartość brutto
  
      return {
        ...item,
        netValue: netValue.toFixed(2),
        vatValue: vatValue.toFixed(2),
        grossValue: grossValue.toFixed(2)
      };
    });
};
  
const calculateGroupedTotals = (products) => {
    return products.reduce((acc, item) => {
      const vatRate = item.vat;
      if (!acc[vatRate]) {
        acc[vatRate] = { netTotal: 0, vatTotal: 0, grossTotal: 0 };
      }
      acc[vatRate].netTotal += parseFloat(item.netValue);
      acc[vatRate].vatTotal += parseFloat(item.vatValue);
      acc[vatRate].grossTotal += parseFloat(item.grossValue);
      return acc;
    }, {});
};
  
const calculateOverallTotals = (groupedTotals) => {
    return Object.keys(groupedTotals).reduce((acc, vatRate) => {
      const group = groupedTotals[vatRate];
      acc.netTotal += group.netTotal;
      acc.vatTotal += group.vatTotal;
      acc.grossTotal += group.grossTotal;
      return acc;
    }, { netTotal: 0, vatTotal: 0, grossTotal: 0 });
};
  
export const invoiceTemplate = async (data) => {
    const processedProducts = calculateValues(data.products);
    const groupedTotals = calculateGroupedTotals(processedProducts);
    const overallTotals = calculateOverallTotals(groupedTotals);

    const getBase64Image = async (path) => {
        try {
            const base64String = await RNFS.readFile(path, 'base64');
            return `data:image/png;base64,${base64String}`;
        } catch (error) {
            console.error('Error reading image file:', error);
            throw error;
        }
    };
    
    const imageBase64 = await getBase64Image(data.seller.logo);

    return (`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <style>
      html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        display: flex;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      .container {
        width: 100%;
        margin: auto;
        overflow: hidden;
        padding: 20px;
      }
      .top-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 150px;
      }
      .top-row .logo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 50%;
        height: 150px;
      }
      .top-row .date-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 50%;
        height: 150px;
        gap: 20px;
        font-weight: 600;
      }
      .logo img {
        max-width: 100%;
        max-height: 100%;
        height: auto;
      }
      .invoice-number {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-weight: 600;
        margin-top: 30px;
      }
      .info {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
      }
      .info-box {
        display: flex;
        width: 40%;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      .info-box span {
        width: 100%;
        font-weight: 600;
      }
      .info-box .name {
        width: 100%;
        border-bottom: 2px solid black;
        font-size: 22px;
        font-weight: 600;
      }
      .items-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 30px;
      }
      .items-table th, .items-table td {
        border: 1px solid black;
        padding: 5px;
        text-align: center;
      }
      .items-table tr {
        font-size: 12px;
      }
      .items-table th {
        background-color: lightgrey;
        font-weight: bold;
        text-align: center;
        border: 1px solid black;
        padding: 5px;
      }
      .items-table-vat {
        position: relative;
        width: 50%;
        border-collapse: collapse;
        margin-top: 30px;
      }   
      .items-table-vat th, .items-table-vat td {
        border: 1px solid black;
        padding: 5px;
        text-align: center;
      }
      .items-table-vat tr {
        font-size: 12px;
      }
      .items-table-vat th {
        background-color: lightgrey;
        font-weight: bold;
        text-align: center;
        border: 1px solid black;
        padding: 5px;
      }
      .items-table-vat .summary-row {
        font-weight: bold;
        background-color: #f0f0f0;
      }
      .payment {
        display: flex;
        width: 100%;
        flex-direction: row;
      }
      .payment .payment-box {
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 20px;
        margin-top: 40px;
        font-weight: 600;
      }
      </style>
      </head>
      <body>
          <div class="container">
              <div class="top-row">
                  <div class="logo">
                      <img src="${imageBase64}" alt="" srcset="">
                  </div>
                  <div class="date-info">
                      <span>Data wystawienia: ${formatDate(data.info.issueDate)}</span>
                      <span>Data sprzedaży / wykonania usług: ${formatDate(data.info.saleDate)}</span>
                  </div>
              </div>
              <div class="info">
                  <div class="info-box">
                      <p class="name">Sprzedawca</p>
                      <span>${data.seller.name}</span>
                      <span>${data.seller.address}</span>
                      <span>${data.seller.code}, ${data.seller.city}</span>
                      <span>NIP: ${data.seller.nip}</span>
                      <span>Email: ${data.seller.email}</span>
                      <span>Telefon: ${data.seller.phone}</span>
                  </div>
                  <div class="info-box">
                      <p class="name">Nabywca</p>
                      <span>${data.customer.name}</span>
                      <span>${data.customer.address}</span>
                      <span>${data.customer.code}, ${data.customer.city}</span>
                      <span>NIP: ${data.customer.nip}</span>
                      <span>Email: ${data.customer.email}</span>
                      <span>Telefon: ${data.customer.phone}</span>
                  </div>
              </div>
              <div class="invoice-number">Faktura nr: ${invoiceNumberGenerator(data.info.issueDate, data.info.invoiceNumber)}</div>
              <table class="items-table">
              <thead>
                  <tr>
                      <th>Lp.</th>
                      <th>Nazwa towaru lub usługi</th>
                      <th>Cena netto [zł]</th>
                      <th>Ilość</th>
                      <th>JM</th>
                      <th>Wartość netto [zł]</th>
                      <th>Stawka VAT</th>
                      <th>Wartość VAT [zł]</th>
                      <th>Wartość brutto [zł]</th>
                  </tr>
              </thead>
              <tbody>
                  ${processedProducts.map((item, index) => `
                  <tr>
                      <td>${index + 1}.</td>
                      <td>${item.name}</td>
                      <td>${item.netPrice}</td>
                      <td>${item.quantity}</td>
                      <td>${item.uom}</td>
                      <td>${item.netValue}</td>
                      <td>${item.vat}%</td>
                      <td>${item.vatValue}</td>
                      <td>${item.grossValue}</td>
                  </tr>`).join('')}
              </tbody>
          </table>

          <table class="items-table-vat">
            <thead>
                <tr>
                    <th>Wartość netto [zł]</th>
                    <th>Stawka VAT</th>
                    <th>Wartość VAT [zł]</th>
                    <th>Wartość brutto [zł]</th>
                </tr>
            </thead>
            <tbody>
                ${Object.entries(groupedTotals).map(([vatRate, totals]) => `
                <tr>
                    <td>${totals.netTotal.toFixed(2)}</td>
                    <td>${vatRate}%</td>
                    <td>${totals.vatTotal.toFixed(2)}</td>
                    <td>${totals.grossTotal.toFixed(2)}</td>
                </tr>`).join('')}
                <tr class="summary-row">
                    <td>${overallTotals.netTotal.toFixed(2)}</td>
                    <td>---</td>
                    <td>${overallTotals.vatTotal.toFixed(2)}</td>
                    <td>${overallTotals.grossTotal.toFixed(2)}</td>
                </tr>
            </tbody>
          </table>

          <div class="payment">
              <div class="payment-box">
                  <span>Metoda płatności: ${data.info.paymentMethod}</span>
                  <span>Termin płatności: ${formatDate(data.info.maturity)}</span>
              </div>
              <div class="payment-box">
                  <span class="payment-text"><u>Razem do zapłaty: ${overallTotals.grossTotal.toFixed(2)} PLN</u></span>
              </div>
          </div>
      </div>
      </body>
      </html>
    `);
};
