import React, {Component, Fragment} from 'react';
import Web3 from 'web3';
import DappTokenSaleABI from './contracts/DappTokenSale';
import DappConfig from './DappConfig';

class App extends Component {
  state = {
    isLoading: false,
    account: '',
    DappTokenSale: '',
    input: 0
  };

  setContractProvider = async () => {
    console.log(DappTokenSaleABI);
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    const DappTokenSale = new web3.eth.Contract(DappConfig.contractABI, DappConfig.contractAddress);
    this.setState({
      account: accounts[0],
      DappTokenSale,
      isLoading: true
    });
    console.log(DappTokenSale);
  };

  componentDidMount = () => {
    this.setContractProvider();
  };

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

  render() {
    const {isLoading, account, input} = this.state;
    return (
      <Fragment>
        {!isLoading ? <Fragment> Loading... </Fragment> :
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
                <form role="form">
                  <div className="form-group">
                    <div className="input-group">
                      <input className="form-control input-group-lg" type="number" id="numberOfToken" name="number" value={input} onChange={this.textOnchange}/>
                      <div className="input-group-btn">
                        <button className="btn btn-primary">Buy Tokens</button>
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
                <p className="text-center"><span className="tokens-sold"></span> / <span className="tokens-available"></span> tokens sold </p>
                <hr/>
                <p className="text-center">{account}</p>
              </div>
            </div>
          </div>
        }
      </Fragment>
    );
  }
}

export default App;
