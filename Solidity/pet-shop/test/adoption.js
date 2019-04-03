var adoption = artifacts.require("adoption");

contract('adoption', function(accounts) {
  describe('First group of tests', () => {
    let instance;

    before(async () => {
      instance = await adoption.deployed();
  });

  it('User should adopt a pet', async () => {
    await instance.adopt.sendTransaction(8, {from: accounts[0]});
    let adopter = await instance.adopters.call(8);
    assert.equal(adopter, accounts[0], "Incorrect owner address");
  });
    
    it('Should get adopter address by pet id in array', async () => {
      let adopters = await instance.getAdopters.call();
      assert.equal(adopters[17], accounts[0], "Owner of pet id should be recorded in the array")
    });

    it('Should throw if invalid pet id is given', async () => {
      try {
        await instance.adopt.sendTransaction(17, { from: accounts[0] });
        assert.fail(true,false,"This function did not throw");
      } catch (error) {
        assert.include(String(error), "revert", 'Expected "revert" but instead got ${error}');
    }
    });
    });
});
