const DappTokenSale = artifacts.require('DappTokenSale');
const DappToken = artifacts.require('DappToken');

contract('DappTokenSale', (accounts) => {
  let tokenSaleInstance;
  let tokenInstance;
  const admin = accounts[0];
  const buyer = accounts[5];
  const tokenPrice = 10000000000000000; // in wei
  const tokensAvailable = 75000;
  const numberOfTokens = 10;

  it('Initializes the contract with the contract values', () => {
    return DappTokenSale.deployed().then(instance => {
      tokenSaleInstance = instance;
      return tokenSaleInstance.address;
    }).then(address => {
      assert.notEqual(address, 0x0, 'Has contract address');
      return tokenSaleInstance.tokenContract();
    }).then(address => {
      assert.notEqual(address, 0x0, 'has token contract address');
      return tokenSaleInstance.tokenPrice();
    }).then(price => {
      assert.equal(price, tokenPrice, 'Token Price is correct');
    })
  });

  it('Facilitates token buying', () => {
    return DappToken.deployed().then(instance => {
      // Grab token instance first
      tokenInstance = instance;
      return DappTokenSale.deployed();
    }).then(instance => {
      // Then grab token sale instance
      tokenSaleInstance = instance;
      // Provision 75% of all tokens to token sale
      return tokenInstance.transfer(tokenSaleInstance.address, tokensAvailable, {from: admin});
    }).then((receipt) => {
      return tokenSaleInstance.buyTokens(numberOfTokens, {from: buyer, value: numberOfTokens * tokenPrice});
    }).then(receipt => {
      assert.equal(receipt.logs.length, 1, 'Trigger one event');
      assert.equal(receipt.logs[0].event, 'Sell', 'Should be a "Sell" event');
      assert.equal(receipt.logs[0].args._buyer, buyer, 'Logs the account that purchased the tokens');
      assert.equal(receipt.logs[0].args._amount, numberOfTokens, 'Logs the number of tokens purchased');
      return tokenSaleInstance.tokensSold();
    }).then(amount => {
      assert.equal(amount.toNumber(), numberOfTokens, 'Increment the number of tokens sold');
      return tokenInstance.balanceOf(tokenSaleInstance.address);
    }).then(balance => {
      assert.equal(balance.toNumber(), tokensAvailable - numberOfTokens, '');
      // Try to buy tokens different from the ether value
      return tokenInstance.balanceOf(buyer);
    }).then(balance => {
      assert.equal(balance.toNumber(), numberOfTokens, '');
      return tokenSaleInstance.buyTokens(numberOfTokens, {from: buyer, value: 1});
    }).then(assert.fail).catch(error => {
      assert(error.message.indexOf('revert') >= 0, 'msg.value must equal number of tokens in wei');
      return tokenSaleInstance.buyTokens(80000, {from: buyer, value: numberOfTokens * tokenPrice});
    }).then(assert.fail).catch(error => {
      assert(error.message.indexOf('revert') >= 0, 'cannot purchase more tokens than available');
    })
  })
});