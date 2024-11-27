// test utils const
const Utils = require('./utils');

// sending payment to req api
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};

// export module
module.exports = sendPaymentRequestToApi;
