var TruffleContract = artifacts.require(‘./TruffleContract.sol’);

contract('TruffleContract', function (accounts) {
  it("should assert true", function (done) {
    var truffle_contract = TruffleContract.deployed();
    assert.isTrue(true);
    done();
  });
});
