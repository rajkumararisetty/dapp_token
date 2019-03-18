import React, {PureComponent} from 'react';

class DappToken extends PureComponent {
  state = {input: 0, totalTokensKey:null, tokenPriceKey:null, soldTokensKey: null,
    saleContractAddress: null, tokenContractAddress: null};

  textOnchange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    if (value > 9) {
      return;
    }

    this.setState((prevState) => ({
      input: value
    }));
  };

  buyTokens = (event, tokenPrice) => {
    event.preventDefault();
    const {input} = this.state;
    const {drizzle, drizzleState} = this.props;
    const saleContract = drizzle.contracts.DappTokenSale;
    // Let drizzle know we want to call the buyToken method with the `input` value
    const buyTokenId = saleContract.methods['buyTokens'].cacheSend(input, {
      from: drizzleState.accounts[0], value: tokenPrice.value*input
    });
  };

  componentDidMount = () => {
    const {drizzle} = this.props;
    const tokenContract = drizzle.contracts.DappToken;
    const saleContract = drizzle.contracts.DappTokenSale;

    // Get the contract addresses
    const saleContractAddress = saleContract.address;
    const tokenContractAddress = tokenContract.address;

    // Let drizzle know we want to watch the `myString` method
    const totalTokensKey = tokenContract.methods['balanceOf'].cacheCall(saleContractAddress);
    const soldTokensKey = saleContract.methods['tokensSold'].cacheCall();
    const tokenPriceKey = saleContract.methods['tokenPrice'].cacheCall();

    // Save the totalTokensKey to local component state for later reference
    this.setState({saleContractAddress, tokenContractAddress, totalTokensKey, soldTokensKey, tokenPriceKey});
  };

  render = () => {
    const {drizzleState} = this.props;
    const {DappToken, DappTokenSale} = drizzleState.contracts;
    const {input, totalTokensKey, soldTokensKey, tokenPriceKey} = this.state;
    const totalTokens = DappToken.balanceOf[totalTokensKey];
    const soldTokens = DappTokenSale.tokensSold[soldTokensKey];
    const tokenPrice = DappTokenSale.tokenPrice[tokenPriceKey];

    return (
      <div className="container" style={{width: "650px"}}>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center">Dapp Token ICO Sale</h1>
            <hr/>
            <br/>
            <div id="content" className="text-center">
              <p>
                Introducing "Dapp Token" (Dapp)!
                Token price is <span className="token-price"></span> Ether. you currently have <span className="dapp-balance"></span>&nbsp;Dapp.
              </p>
            </div>
            <form>
              <div className="form-group">
                <div className="input-group">
                  <input className="form-control input-group-lg" type="number" id="numberOfToken" name="number" value={input} onChange={this.textOnchange}/>
                  <div className="input-group-btn">
                    <button className="btn btn-primary" onClick={(event) => this.buyTokens(event, tokenPrice)}>Buy Tokens</button>
                  </div>
                </div>
              </div>
            </form>
            <br/>
            <div className="progress">
              <div className="progress-bar progress-bar-striped active" aria-valuemin="0" aria-valuemax="100">

              </div>
            </div>
            <br/>
            <p className="text-center"><span className="tokens-sold"></span> {soldTokens && soldTokens.value}/ {totalTokens && totalTokens.value} <span className="tokens-available"></span> tokens sold </p>
            <hr/>
            <p className="text-center">{drizzleState.accounts[0]}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DappToken;