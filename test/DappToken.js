const DappToken = artifacts.require("DappToken");

contract('DappToken', (accounts) => {
  let tokenInstance;

  it('Initialize the contract with the correct values', () => {
    return DappToken.deployed().then(instance => {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(name => {
      assert.equal(name, 'Dapp Token', 'Has the correct name');
      return tokenInstance.symbol();
    }).then(symbol => {
      assert.equal(symbol, 'DAPP', 'Has the correct symbol');
      return tokenInstance.standard();
    }).then(standard => {
      assert.equal(standard, 'Dapp Token v1.0', 'Has the correct standard');
    } );
  });

  it('Allocates the initial supply upon deployment', () => {
    return DappToken.deployed().then(instance => {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(totalSupply => {
      assert.equal(totalSupply.toNumber(), 1000000, 'Sets the total supply to 1,000,000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(adminBalance => {
      assert.equal(adminBalance.toNumber(), 1000000, 'It allocates the initialSupply to the admin account');
    });
  });

  it('Transfer token ownership', () => {
    return DappToken.deployed().then((instance) => {
      tokenInstance = instance;
      // Test `require` statement first by transferring something larger than the sender's revert
      return tokenInstance.transfer.call(accounts[1], 999999999999);
    }).then(assert.fail).catch(error => {
      assert(error.message.indexOf('revert') >= 0, 'Error message must contain rever');
      return tokenInstance.transfer.call(accounts[1], 250000, {from: accounts[0]});
    }).then(success => {
      assert.equal(success, true, 'It returns true');
      return tokenInstance.transfer(accounts[1], 250000, {from: accounts[0]});
    }).then(receipt => {
      assert.equal(receipt.logs.length, 1, 'Trigger one event');
      assert.equal(receipt.logs[0].event, 'Transfer', 'Should be a "Transfer" event');
      assert.equal(receipt.logs[0].args._from, accounts[0], 'Logs the account the tokens are transferred from');
      assert.equal(receipt.logs[0].args._to, accounts[1], 'Logs the account the tokens are transferred to');
      assert.equal(receipt.logs[0].args._value, 250000, 'Logs the transfer amount');
      return tokenInstance.balanceOf(accounts[1]);
    }).then(balance => {
      assert.equal(balance.toNumber(), 250000, 'Adds the amount to the receiving amount');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(balance => {
      assert.equal(balance.toNumber(), 750000, 'Adds the amount to the sending amount');
    });
  });

  it('Approves tokens for delegated transfer', () => {
    return DappToken.deployed().then((instance) => {
      tokenInstance = instance;
      return tokenInstance.approve.call(accounts[1], 100);
    }).then(success => {
      assert.equal(success, true, 'It returns true');
      return tokenInstance.approve(accounts[1], 100, {from: accounts[0]});
    }).then(receipt => {
      assert.equal(receipt.logs.length, 1, 'Trigger one event');
      assert.equal(receipt.logs[0].event, 'Approval', 'Should be a "Approval" event');
      assert.equal(receipt.logs[0].args._owner, accounts[0], 'Logs the account the tokens are authorized by');
      assert.equal(receipt.logs[0].args._spender, accounts[1], 'Logs the account the tokens are authorized to');
      assert.equal(receipt.logs[0].args._value, 100, 'Logs the transfer amount');

      return tokenInstance.allowance(accounts[0], accounts[1]);
    }).then(allowance => {
      assert.equal(allowance.toNumber(), 100, 'stores the allowance for delegated transfer');
    });
  });

  it('Handles delegate token transfer', () => {
    return DappToken.deployed().then(instance => {
      tokenInstance = instance;
      fromAccount = accounts[2];
      toAccount = accounts[3];
      spendingAccount = accounts[3];
      // Transfer some tokens to from account
      return tokenInstance.transfer(fromAccount, 100, {from: accounts[0]});
    }).then(receipt => {
      // Approve spendingAccount to spend 10 tokens from fromAccount
      return tokenInstance.approve(spendingAccount, 10, {from: fromAccount});
    }).then(receipt => {
      // Try transferring something larger than the sender's balance
      return tokenInstance.transferFrom(fromAccount, toAccount, 9999, {from: spendingAccount});
    }).then(assert.fail).catch(error => {
      assert(error.message.indexOf('revert') >= 0, 'cannot transfer value larger than the balance');
      // Try transferring something larger than the approved amount
      return tokenInstance.transferFrom(fromAccount, toAccount, 20, {from: spendingAccount});
    }).then(assert.fail).catch(error => {
      assert(error.message.indexOf('revert') >= 0, 'Cannot transfer value larger than balance');
      return tokenInstance.transferFrom.call(fromAccount, toAccount, 10, {from: spendingAccount});
    }).then(success => {
      assert.equal(success, true);
      return tokenInstance.transferFrom(fromAccount, toAccount, 10, {from: spendingAccount});
    }).then(receipt => {
      assert.equal(receipt.logs.length, 1, 'Trigger one event');
      assert.equal(receipt.logs[0].event, 'Transfer', 'Should be a "Transfer" event');
      assert.equal(receipt.logs[0].args._from, fromAccount, 'Logs the account the tokens are transferred from');
      assert.equal(receipt.logs[0].args._to, toAccount, 'Logs the account the tokens are transferred to');
      assert.equal(receipt.logs[0].args._value, 10, 'Logs the transfer amount');
      return tokenInstance.balanceOf(fromAccount);
    }).then(balance => {
      assert.equal(balance.toNumber(), 90, 'Deducts amount from the sending account');
      return tokenInstance.balanceOf(toAccount);
    }).then(balance => {
      assert.equal(balance.toNumber(), 10, 'Add amount from to receiving account');
      return tokenInstance.allowance(fromAccount, spendingAccount);
    }).then(allowance => {
      assert.equal(allowance, 0, 'deducts the amount from the allowance');
    });
  });
});
