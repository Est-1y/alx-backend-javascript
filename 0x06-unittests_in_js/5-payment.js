// const utils
const Utils = require("./utils");

// sending payment to req api
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
}

// export module
module.exports = sendPaymentRequestToApi;
