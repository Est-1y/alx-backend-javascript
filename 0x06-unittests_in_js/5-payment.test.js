// import mocha
const {describe, it} = require("mocha");
// import sinon
const sinon = require("sinon");
// import "./5-payment"
const sendPaymentRequestToApi = require("./5-payment");
// import chai
const expect = require("chai").expect;

// sending payment to api
describe("sendPaymentRequestToApi", function() {
    beforeEach("Set up spy to use for each test", function() {
	sinon.spy(console, "log");
    });
    afterEach("restore spy after each test", function() {
	console.log.restore();
    });
    it("check that console.log is called with the right arg", function() {
	sendPaymentRequestToApi(100, 20);

	expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("check that console.log is called with the right arg", function() {
	sendPaymentRequestToApi(10, 10);

	expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
