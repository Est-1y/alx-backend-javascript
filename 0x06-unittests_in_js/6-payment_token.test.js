// import chai
const { expect } = require('chai');
// import ./6-payment_token
const getPaymentTokenFromAPI = require('./6-payment_token');

// operation to getpayment token from ap
describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
