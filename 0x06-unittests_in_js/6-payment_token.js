// getting paymenttoken from api
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  if (success) {
    resolve({data: 'Successful response from the API'});
  }
});

// export module
module.exports = getPaymentTokenFromAPI;
