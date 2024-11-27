// Utils

const Utils = require('./utils');

// sending payment to req API
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};

// exprt module
module.exports = sendPaymentRequestToApi;
